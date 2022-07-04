module.exports = {
    content: [
        './assets/src/**/*.{js,jsx,ts,tsx}',
        './assets/src/**/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                bible: [
                    'Noto Sans TC',
                    'Microsoft JhengHei',
                    'PingFang',
                    'sans-serif',
                ],
            },
            lineHeight: {
                '11': '2.75rem',
                '12': '3rem',
            },
            borderRadius: {
                '8px': '8px',
            },
            align: {
                verse: '2px',
            },
            zIndex: {
                '99999': '99999',
            }
        },
    },
    plugins: [
        require('proto-tailwindcss-pixels')({
            fontSize: {
                start: 1,
                stop: 36,
            },
            spacing: {
                start: 1,
                stop: 50,
            },
            width: {
                start: 1,
                stop: 900,
            },
            height: {
                start: 1,
                stop: 900,
            },
        }),
    ],
}
