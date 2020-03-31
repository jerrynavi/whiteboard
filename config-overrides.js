const {
    useBabelRc,
    override,
    fixBabelImports,
    addLessLoader,
    addPostcssPlugins,
} = require('customize-cra');

const purgecss = require('@fullhuman/postcss-purgecss')({

    content: [
        './src/**/*.html',
        './src/**/*.tsx',
    ],

    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#708090',
        },
    }),
    useBabelRc(),
    addPostcssPlugins([
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : [],
    ]),
);