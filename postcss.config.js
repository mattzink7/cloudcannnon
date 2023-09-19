const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './layouts/**/*.svg',
        './content/**/*.md',
      ],
      safelist: [
        'mobile-dropdown-open',
        'is-active',
        'nav-open',
        'has-dropdown-open',
        'has-sub-menu-open',
        'expand',
        'collapse',
        'page-home',
        'page-about',
        'page-contact',
        'parent-page-home',
        'parent-page-about',
        'parent-page-contact',
        'parent-page-blog',
        'active-button',
        'position-open',
        'list-open',
        'toggle-mobile-dropdown',
        'ul', 
        'ol',
        'table',
        'tr',
        'td',
        'pre',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'btn--active',
        'blog--grid',
        'hero--split-image-grid',
        'hero__content',
        'hero__image-grid',
        'hero__image-grid-1',
        'hero__image-grid-2',
        'hero__image-grid-3',
        'accent-line',
        'grid',
        'gap-lg',
        'grid-12',
        'grid-6-md',
        'grid-columns-3',
        'grid-columns-4',
        'auto-grid',
        'media-text-block',
        'media-text-block__image',
        'media-text-block--text-left',
        'media-text-block--text-right',
        'rounded-image',
        'margin-inline-auto',
        'max-width-none',
        'no-margin',
        'no-padding',
        'numbers',
        'number',
        'mb-6',
        'fw-500',
        'bg-black',
        'bg-gray',
        'bg-white',
      ],
    }),
  ],
}