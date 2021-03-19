// @import url('//cloud.webtype.com/css/eacfa0ce-537e-41fc-b539-42ef5480ab98.css');
/* stylelint-disable */
/*
#Icon font
##SCSS file (_fonts.scss) is automaticaly generated with a Gulp using lodash template(_fonts.tpl). Don't touch it.
Font generates from SVG icons which are in 'fonts/icons' folder
All SVG icons must be of the same height (the most common one): 32px or 64px for example
If they're not we have two options:
1) normalize SVG icons to make them all equal
2) ask a client to provide new SVG icons with the right size
To generate fonts from SVG icons run Gulp task
```
gulp iconfont
```
*/

@font-face {
    font-display: auto;
    font-family: 'Gotham';
    src: url('../fonts/Gotham-Book.woff2') format('woff2'),
        url('../fonts/Gotham-Book.woff') format('woff');
    font-weight: normal;
}

@font-face {
    font-display: auto;
    font-family: 'Gotham';
    src: url('../fonts/Gotham-Medium.woff2') format('woff2'),
        url('../fonts/Gotham-Medium.woff') format('woff');
    font-weight: 500;
}

@font-face {
    font-display: auto;
    font-family: 'Gotham';
    src: url('../fonts/Gotham-Bold.woff2') format('woff2'),
        url('../fonts/Gotham-Bold.woff') format('woff');
    font-weight: bold;
}

@font-face {
    font-display: auto;
    font-family: 'Didot';
    src: url('../../fonts/Didot.woff2') format('woff'),
    url('../../fonts/Didot.woff') format('woff');
    font-weight: 300;
}

@font-face {
    font-family: '<%= fontName %>';
    src: url('<%= fontPath %><%= fontName %>.woff2') format('woff2'),
         url('<%= fontPath %><%= fontName %>.woff') format('woff');
}
