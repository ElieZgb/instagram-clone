const svgIcons = [
    {
        name: 'home',
        filledSvg: `<?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="100px" height="100px">
        <g id="surface1584812">
        <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 50 2.101562 C 49.566406 2.101562 49.132812 2.238281 48.761719 2.519531 L 2.761719 38.421875 C 1.902344 39.101562 1.742188 40.359375 2.421875 41.238281 C 3.101562 42.097656 4.359375 42.257812 5.238281 41.578125 L 8 39.421875 L 8 92 C 8 93.101562 8.898438 94 10 94 L 38 94 L 38 58 L 62 58 L 62 94 L 90 94 C 91.101562 94 92 93.101562 92 92 L 92 39.421875 L 94.761719 41.578125 C 95.140625 41.859375 95.558594 42 96 42 C 96.601562 42 97.179688 41.738281 97.578125 41.238281 C 98.257812 40.359375 98.097656 39.101562 97.238281 38.421875 L 51.238281 2.519531 C 50.867188 2.238281 50.433594 2.101562 50 2.101562 Z M 70 10 L 70 12.101562 L 82 21.460938 L 82 10 Z M 70 10 "/>
        </g>
        </svg>
        `,
        outlineSvg: `<?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" width="100px" height="100px">
        <g id="surface1586604">
        <path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:15;stroke-linecap:butt;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 88.128209 4.336318 L 167.24966 66.083445 C 168.731417 67.252871 169.00743 69.417398 167.838005 70.928209 C 167.147971 71.792567 166.15287 72.242905 165.121451 72.242905 C 164.366045 72.242905 163.646958 71.995945 162.993241 71.516553 L 158.242904 67.804898 L 158.242904 158.242904 C 158.242904 160.131417 156.688512 161.678545 154.799998 161.678545 L 106.642904 161.678545 L 106.642904 99.757094 L 65.357094 99.757094 L 65.357094 161.678545 L 17.2 161.678545 C 15.311486 161.678545 13.757095 160.131417 13.757095 158.242904 L 13.757095 67.804898 L 9.006757 71.516553 C 7.495946 72.685979 5.338683 72.409965 4.169257 70.928209 C 2.992568 69.417398 3.268581 67.252871 4.750338 66.083445 L 83.87179 4.336318 C 84.503715 3.849662 85.251857 3.61723 85.999999 3.61723 C 86.748141 3.61723 87.496283 3.849662 88.128209 4.336318 Z M 141.042904 17.2 L 141.042904 36.913175 L 120.399999 20.81723 L 120.399999 17.2 Z M 141.042904 17.2 " transform="matrix(0.537791,0,0,0.537791,3.75,3.75)"/>
        <path style="stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 50 5.695312 C 49.597656 5.695312 49.195312 5.820312 48.855469 6.082031 L 6.304688 39.289062 C 5.507812 39.917969 5.359375 41.082031 5.988281 41.894531 C 6.621094 42.691406 7.78125 42.839844 8.59375 42.210938 L 11.148438 40.214844 L 11.148438 88.851562 C 11.148438 89.867188 11.984375 90.699219 13 90.699219 L 38.898438 90.699219 L 38.898438 57.398438 L 61.101562 57.398438 L 61.101562 90.699219 L 87 90.699219 C 88.015625 90.699219 88.851562 89.867188 88.851562 88.851562 L 88.851562 40.214844 L 91.40625 42.210938 C 91.757812 42.46875 92.144531 42.601562 92.550781 42.601562 C 93.105469 42.601562 93.640625 42.359375 94.007812 41.894531 C 94.640625 41.082031 94.492188 39.917969 93.695312 39.289062 L 51.144531 6.082031 C 50.804688 5.820312 50.402344 5.695312 50 5.695312 Z M 68.5 13 L 68.5 14.945312 L 79.601562 23.601562 L 79.601562 13 Z M 68.5 13 "/>
        </g>
        </svg>
        `
    },
    {
        name: 'search',
        filledSvg: `<?xml version="1.0" encoding="UTF-8"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 60" width="60px" height="60px">
        <g id="surface1621385">
        <path style="fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;stroke-width:10;stroke-linecap:butt;stroke-linejoin:round;stroke:rgb(0%,0%,0%);stroke-opacity:1;stroke-miterlimit:10;" d="M 131.870421 74.532397 C 131.870421 88.274762 126.992585 100.891472 118.890218 110.776126 L 153.117149 145.014782 C 154.618022 146.445302 155.216026 148.59108 154.700101 150.596152 C 154.17245 152.601224 152.601224 154.17245 150.596152 154.700101 C 148.59108 155.216026 146.445302 154.618022 145.014782 153.117149 L 110.776126 118.890218 C 100.891472 126.992585 88.274762 131.870421 74.532397 131.870421 C 42.931993 131.870421 17.194372 106.132801 17.194372 74.532397 C 17.194372 42.931993 42.931993 17.194372 74.532397 17.194372 C 106.132801 17.194372 131.870421 42.931993 131.870421 74.532397 Z M 28.661977 74.532397 C 28.661977 99.929976 49.134818 120.402816 74.532397 120.402816 C 99.929976 120.402816 120.402816 99.929976 120.402816 74.532397 C 120.402816 49.134818 99.929976 28.661977 74.532397 28.661977 C 49.134818 28.661977 28.661977 49.134818 28.661977 74.532397 Z M 28.661977 74.532397 " transform="matrix(0.33314,0,0,0.33314,1.35,1.35)"/>
        <path style="stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 26.179688 7.078125 C 15.652344 7.078125 7.078125 15.652344 7.078125 26.179688 C 7.078125 36.707031 15.652344 45.28125 26.179688 45.28125 C 30.757812 45.28125 34.960938 43.65625 38.253906 40.957031 L 49.660156 52.359375 C 50.136719 52.859375 50.851562 53.058594 51.519531 52.886719 C 52.1875 52.710938 52.710938 52.1875 52.886719 51.519531 C 53.058594 50.851562 52.859375 50.136719 52.359375 49.660156 L 40.957031 38.253906 C 43.65625 34.960938 45.28125 30.757812 45.28125 26.179688 C 45.28125 15.652344 36.707031 7.078125 26.179688 7.078125 Z M 26.179688 10.898438 C 34.640625 10.898438 41.460938 17.71875 41.460938 26.179688 C 41.460938 34.640625 34.640625 41.460938 26.179688 41.460938 C 17.71875 41.460938 10.898438 34.640625 10.898438 26.179688 C 10.898438 17.71875 17.71875 10.898438 26.179688 10.898438 Z M 26.179688 10.898438 "/>
        </g>
        </svg>
        `,
        outlineSvg: `<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>`
    },
    {
        name: 'reel',
        filledSvg: `<svg fill="#000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px">
        <path d="M13.34 4.13L20.26 16H4v-1C4 9.48 8.05 4.92 13.34 4.13zM33.26 16L22.57 16 15.57 4 26.26 4zM46 15v1H35.57l-7-12H35C41.08 4 46 8.92 46 15zM4 18v17c0 6.08 4.92 11 11 11h20c6.08 0 11-4.92 11-11V18H4zM31 32.19l-7.99 4.54C21.68 37.49 20 36.55 20 35.04v-9.08c0-1.51 1.68-2.45 3.01-1.69L31 28.81C32.33 29.56 32.33 31.44 31 32.19z"/>
        </svg>`,
        outlineSvg: `<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="100px" height="100px">
        <path d="M 15 4 C 8.9365932 4 4 8.9365932 4 15 L 4 35 C 4 41.063407 8.9365932 46 15 46 L 35 46 C 41.063407 46 46 41.063407 46 35 L 46 15 C 46 8.9365932 41.063407 4 35 4 L 15 4 z M 16.740234 6 L 27.425781 6 L 33.259766 16 L 22.574219 16 L 16.740234 6 z M 29.740234 6 L 35 6 C 39.982593 6 44 10.017407 44 15 L 44 16 L 35.574219 16 L 29.740234 6 z M 14.486328 6.1035156 L 20.259766 16 L 6 16 L 6 15 C 6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18 L 44 18 L 44 35 C 44 39.982593 39.982593 44 35 44 L 15 44 C 10.017407 44 6 39.982593 6 35 L 6 18 z M 21.978516 23.013672 C 20.435152 23.049868 19 24.269284 19 25.957031 L 19 35.041016 C 19 37.291345 21.552344 38.713255 23.509766 37.597656 L 31.498047 33.056641 C 33.442844 31.951609 33.442844 29.044485 31.498047 27.939453 L 23.509766 23.398438 L 23.507812 23.398438 C 23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328 C 22.158626 24.988232 22.342399 25.035052 22.521484 25.136719 L 30.511719 29.677734 C 31.220922 30.080703 31.220922 30.915391 30.511719 31.318359 L 22.519531 35.859375 C 21.802953 36.267773 21 35.808686 21 35.041016 L 21 25.957031 C 21 25.573196 21.201402 25.267385 21.492188 25.107422 C 21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z"/>
        </svg>`
    },{
        name: 'plus-story-icon',
        svg: `<?xml version="1.0"?><svg fill="#0096f6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="60px" height="60px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"/></svg>`
    }
]

export default svgIcons