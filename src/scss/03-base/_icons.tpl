/* stylelint-disable */


@font-face {
    font-family: "{{fontName}}";
    src:
        {{{src}}};
}

$webfont-icons: (
        {{#each codepoints}}
            '{{@key}}': ('{{../fontName}}' '\\{{this}}'),
        {{/each}}
);

@function unicode($str) {
    @return unquote('\"')+unquote(str-insert($str, '\\', 1))+unquote('\"');
}

@mixin icon($name: null, $insert: before, $size: inherit) {
    @if type-of($insert) != string {
        $size: $insert;
        $insert: before;
    }

    &::#{$insert} {
        font-family: "{{fontName}}";
        -webkit-font-smoothing: antialiased;
        font-style: normal;
        font-variant: normal;
        font-weight: normal;
        speak: none;
        text-decoration: none;
        text-transform: none;

        @if $size {
            font-size: $size;
        }
    }

    @if ($name != null) {
        $icon: map-get($webfont-icons, $name);

        @if ($icon != null and $insert == before) {
            &::before {
                content: #{'"' + nth($icon, 2) + '"'};
                @content;
            }
        } @else if ($icon != null and $insert == after) {
            &::after {
                content: #{'"' + nth($icon, 2) + '"'};
                @content;
            }
        }
    }
}

.icon {
    @include icon;

    &-left::before {
        right: auto;
    }

    &-right::before {
        left: auto;
    }
}

{{#each codepoints}}
$icon-{{@key}}: '\\{{this}}';
{{/each}}

@each $name, $code in $webfont-icons {
    .icon-#{$name}-before {
        &::before {
            content: #{'"' + nth($code, 2) + '"'};
        }
    }

    .icon-#{$name}-after {
        &::after {
            content: #{'"' + nth($code, 2) + '"'};
        }
    }
}

/*md
@no-stat

# SVG icons

<div class="row py-15 text-white bg-black border-bottom">
    <div class="col-12">Icons set</div>
</div>
<div class="b-icon-list">
    {{#each codepoints}}
        <div class="b-icon-list__item">
            <div class="b-icon-list__icon icon icon-{{@key}}-before"></div>
            <div class="b-icon-list__class-name">icon-{{@key}}-before</div>
        </div>
    {{/each}}
</div>

*/
