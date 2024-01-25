const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const generateWidth = (denominator) => {
    let widthConfig = {}
    for (let i = 0; i < denominator - 1; i++) {
        let numerator = i + 1
        widthConfig[`${numerator}/${denominator}`] =
            100 * (numerator / denominator) + '%'
    }
    return widthConfig
}

module.exports = {
    content: [
        './assets/src/**/*.{js,jsx,ts,tsx}',
        './assets/src/**/**/*.{js,jsx,ts,tsx}',
        './assets/src/js/blockeditor/!BibleSelector.jsx'
    ],
    theme: {
        screens: {
            xs: '475px',
            ...defaultTheme.screens,
            'only-xs': { min: '475px', max: '575px' },
            'only-sm': { min: '576px', max: '767px' },
            'only-md': { min: '768px', max: '991px' },
            'only-lg': { min: '992px', max: '1199px' },
            'wp-xs': { max: '600px' },
            'wp-sm': { max: '782px' }
        },
        extend: {
            minWidth: {
                ...generateWidth(8),
                ...generateWidth(24),
            },
            width: {
                ...generateWidth(8),
                ...generateWidth(24),
            },
            fontFamily: {
                bible: [
                    'Noto Sans TC',
                    'Microsoft JhengHei',
                    'PingFang',
                    'sans-serif',
                ],
            },
            lineHeight: {
                5.5: '1.375rem',
                11: '2.75rem',
                12: '3rem',
            },
            borderRadius: {
                '8px': '8px',
            },
            align: {
                verse: '2px',
            },
            zIndex: {
                99999: '99999',
            },
            transitionProperty: {
                left: 'left',
            },
        },
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant('every-4', '&:nth-child(4n)')
            addVariant('every-6', '&:nth-child(6n)')
            addVariant('every-8', '&:nth-child(8n)')
            addVariant('every-12', '&:nth-child(12n)')
        }),
        require('proto-tailwindcss-pixels')({
            border: {
                start: 1,
                stop: 10,
            },
            fontSize: {
                start: 1,
                stop: 36,
            },
            spacing: {
                start: 1,
                stop: 50,
            },
            minWidth: {
                start: 1,
                stop: 900,
            },
            maxWidth: {
                start: 1,
                stop: 900,
            },
            width: {
                start: 1,
                stop: 900,
            },
            height: {
                start: 1,
                stop: 900,
            },
            minHeight: {
                start: 1,
                stop: 900,
            },
            maxHeight: {
                start: 1,
                stop: 900,
            },
            lineHeight: {
                start: 1,
                stop: 100,
            },
        }),
    ],
}
