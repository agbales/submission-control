import React from 'react';

const UrsaMajorIcon = (props) => {

    return (
        <svg class="squiggle" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" size="250" height="250" width="250" xmlns="http://www.w3.org/2000/svg" style={props.style}>
            <path  d="M416.125 47.825L410.1 62.022l-30.914-.441 23.562 11.232-35.037 18.389 24.842-3.82-95.908 128.76-1.239-18.575-7.258 29.98-1.164 1.565-30.755-4.304 20.906 12.933-78.225 36.717-13.889-21.115-.16 27.709-3.367 1.58-.02.008-19.279-7.174 5.891 12.307-56.31 21.585-6.73-24.35-7.198 23.88-27.743 5.795 20.176 8.718-55.066 96.504-5.844-11.638-1.756 22.386-12.29.088 11.939 9.659-10.893 15.136 14.537-4.02 3.1 12.659 5.898-14.82 28.908-12.266-19.298-5.928 51.554-90.353 14.336 16.947-3.853-29.035 1.795-.69 20.144 7.196-9.943-11.106 44.908-17.215-3.695 15.31 19.515-21.058 11.98 25.46.88-29.378 20.367 4.213-8.305-11.941 67.87-31.858-6.815 19.737 19.16-19.793 11.99 15.703.172-13.775 55.026 27.513-12.377 19.295 20.484-8.816 15.52 30.047 2.607-34.393 28.309 4.47-24.495-15.798 96.502-104.295 12.743 10.77-3.864-19.897-.24-.209 4.885-5.28-5.403-7.04 1.989-2.395-3.688-24.055-5.767 16.723-51.155-66.656 14.295-19.688-25.222 5.45-1.795-2.34zm-5.13 44.926l8.042 21.805 4.602-17.235 41.45 54.014-16.776-3.809 18.064 13.436-19.074 10.076 16.935.451-89.521 96.75-8.518-18.398-1.65 21.047-54.074-27.038 32.324-9.953-36.133-1.08z"></path>
            <filter id="turbulence-1">
                <feTurbulence type="fractalNoise" baseFrequency="0.001" numOctaves="2" data-filterId="3" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" scale="25" />
            </filter>

            <filter id="turbulence-2">
                <feTurbulence type="fractalNoise" baseFrequency="0.0015" numOctaves="2" data-filterId="3" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" scale="25" />
            </filter>

            <filter id="turbulence-3">
                <feTurbulence type="fractalNoise" baseFrequency="0.002" numOctaves="2" data-filterId="3" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" scale="25" />
            </filter>

            <filter id="turbulence-4">
                <feTurbulence type="fractalNoise" baseFrequency="0.0025" numOctaves="2" data-filterId="3" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" scale="25" />
            </filter>

            <filter id="turbulence-5">
                <feTurbulence type="fractalNoise" baseFrequency="0.003" numOctaves="2" data-filterId="3" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" scale="25" />
            </filter>
        </svg>)
}

export default UrsaMajorIcon;