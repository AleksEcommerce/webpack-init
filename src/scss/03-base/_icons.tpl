/* stylelint-disable */
/*md
@no-stat
# Icons

## Icons from an icon font
_icons.tpl - is a template for _icons.scss

_icons.scss - is an automaticaly generated SCSS file. It contains:

* placeholder class %icon - it's needed for mixin icon
* function icon-char - it's needed for mixin icon
* mixin icon - you can use this mixin to insert an icon into ::before or ::after pseudo-elements. this mixin takes two parameters: icon name (file name without a char prefix), and position (before or after)
* and icon classes to use in HTML (content assets, content slots)

```html_example
<% _.each(glyphs, function(glyph) { %>
    <div class='i-<%= glyph.name %>-before'><%= glyph.name %></div>
<% }); %>
```

*/

@mixin g-icon {
    font-family: '<%= fontName %>';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    speak: none;
    text-decoration: none;
    text-transform: none;
}

@function icon-char($filename) {
    $char: '';
<% _.each(glyphs, function(glyph) { %>
    @if $filename == <%= glyph.name %> {
        $char: '<%= glyph.unicode[0] %>';
    }
<% }); %>
    @return $char;
}

@mixin icon($filename, $insert: before, $font-size: false) {

    @if type-of($insert) != string {
        $font-size: $insert;
        $insert: before;
    }

    &::#{$insert} {
        @include g-icon;

        content: icon-char($filename);

        @if $font-size {
            font-size: $font-size;
        }

        @content;
    }
}

/*
#Font icon variables
*/
<% _.each(glyphs, function(glyph) { %>
$icon-<%= glyph.name %>: '<%= glyph.unicode[0] %>';
<% }); %>

@mixin icons-classes {
<% _.each(glyphs, function(glyph) { %>
    .i-<%= glyph.name %>-before {
        @include icon(<%= glyph.name %>);
    }

    .i-<%= glyph.name %>-after {
        @include icon(<%= glyph.name %>, after);
    }
<% }); %>
}
/* stylelint-enable */
