import React from 'react';
import { FaHeart } from 'react-icons/fa'

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        let fontSize = { fontSize: '1.2rem'}
        return(
            <div id="footer">
                <p style={fontSize}>Built with<FaHeart style={{margin: '0 5px', color: '#FC5B30'}} />by <a href="http://github.com/agbales">@agbales</a></p>
            </div>
        )
    }
}
