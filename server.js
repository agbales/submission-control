const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require('path');
const csv = require('csv-parser')
const fs = require('fs')
const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer({ dest: 'tmp/csv/' })
// const testData = require('./data/test-flight-data.csv')

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file; 

    validateCSV(file)

    const results = []
    fs.createReadStream(file.path)
        .pipe(csv())
        .on('data', (data) => {
            if (!isValidRow(data)) res.send(415)
            results.push(data)
        })
        .on('end', () => {
            let stats = getUserStats(results)
            fs.unlinkSync(file.path); // remove temp file
            res.status(200).send({ 
                csv: results,
                stats: stats
            })
        })
})

app.get('/testData', (req, res) =>{
    const results = []
    fs.createReadStream('./data/test-flight-data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            let stats = getUserStats(results)
            res.status(200).send({ 
                csv: results,
                stats: stats
            })
        })
})

let validateCSV = file => {    
    if (!file) {
        fs.unlinkSync(file.path)
        throw new Error('Please upload a file')
    }

    if (!file.originalname.match(/\.(csv)$/)) {
        fs.unlinkSync(file.path)
        throw new Error('Accepts CSV files only')
    }
}

let isValidRow = row => {
    let keys = Object.keys(row)
    if (keys.length !== 8) return false
    if (keys[0] !== 'Title' ||
        keys[1] !== 'Submission Date' ||
        keys[2] !== 'Organization' ||
        keys[3] !== 'Form' ||
        keys[4] !== 'Status' ||
        keys[5] !== 'Organization Website' ||
        keys[6] !== 'Fee Paid' ||
        keys[7] !== 'Fee Currency') { 
        console.log('ERR in row', row)
        return false
    }
    return true
}

let getUserStats = results => {
    let stats = {}
    results.forEach( entry => {
        let year = entry['Submission Date'].match(/\d{4}/)[0]

        // obj setup
        stats.totalAcceptances = stats.totalAcceptances || 0
        stats.totalSubmissions = stats.totalSubmissions || 0
        stats.acceptances = stats.acceptances || []
        stats.years = stats.years || {}
        stats.years[year] = stats.years[year] || {}
        stats.years[year].submissions = stats.years[year].submissions || 0
        stats.years[year].acceptances = stats.years[year].acceptances || 0
        stats.years[year].costs = stats.years[year].costs || 0

        // tally
        stats.totalSubmissions++
        stats.years[year].submissions++
        if (entry['Status'] === 'Accepted') { 
            stats.years[year].acceptances++ 
            stats.totalAcceptances++
            stats.acceptances.push(entry)
        }
        if (entry['Fee Paid'] > 0 ) { stats.years[year].costs += parseFloat(entry['Fee Paid']) }
    })

    const acceptances = stats.totalAcceptances
    const subs = stats.totalSubmissions
    stats.overallAcceptanceRate = parseFloat(acceptances / subs * 100).toFixed(2)
    return stats
}

app.listen(port, () => console.log(`Listening on port ${port}`))
