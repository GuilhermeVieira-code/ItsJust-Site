/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-brown':  '#2C1810',
        'warm-brown':  '#4A3228',
        'gold':        '#D4A017',
        'amber':       '#F2A900',
        'light-gold':  '#FFD54F',
        'cream':       '#FFF8E7',
        'off-white':   '#FFFDF5',
        'card-bg':     '#FFFBF0',
        'warm-gray':   '#8B7355',
        'text-muted':  '#A69070',
        'green':       '#5B8C3E',
        'red':         '#C0392B',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'Calibri', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      maxWidth: {
        'text': '720px',
        'content': '1100px',
      },
      typography: ({ theme }) => ({
        itsjust: {
          css: {
            fontSize: '1.0625rem',
            lineHeight: '1.8',
            '--tw-prose-body':        theme('colors.dark-brown'),
            '--tw-prose-headings':    theme('colors.dark-brown'),
            '--tw-prose-lead':        theme('colors.warm-brown'),
            '--tw-prose-links':       theme('colors.gold'),
            '--tw-prose-bold':        theme('colors.dark-brown'),
            '--tw-prose-counters':    theme('colors.warm-gray'),
            '--tw-prose-bullets':     theme('colors.gold'),
            '--tw-prose-hr':          theme('colors.card-bg'),
            '--tw-prose-quotes':      theme('colors.warm-brown'),
            '--tw-prose-quote-borders': theme('colors.gold'),
            '--tw-prose-captions':    theme('colors.warm-gray'),
            '--tw-prose-code':        theme('colors.warm-brown'),
            '--tw-prose-pre-code':    theme('colors.cream'),
            '--tw-prose-pre-bg':      theme('colors.dark-brown'),
            '--tw-prose-th-borders':  theme('colors.card-bg'),
            '--tw-prose-td-borders':  theme('colors.card-bg'),
            'h2': { color: theme('colors.warm-brown'), marginTop: '1.75em', marginBottom: '0.5em' },
            'h3': { color: theme('colors.gold'), marginTop: '1.4em', marginBottom: '0.4em' },
            'hr': { marginTop: '1.25em', marginBottom: '0.75em' },
            'hr + h2': { marginTop: '0.75em' },
            'hr + h3': { marginTop: '0.65em' },
            'a': { textDecorationColor: theme('colors.gold') },
            'a:hover': { color: theme('colors.amber') },
            'blockquote': {
              borderLeftColor: theme('colors.gold'),
              fontStyle: 'italic',
              backgroundColor: theme('colors.card-bg'),
              borderRadius: '0 4px 4px 0',
              padding: '0.75rem 1rem',
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:last-of-type::after':   { content: 'none' },
            // Headings com scroll offset para header fixo
            'h2[id], h3[id]': { scrollMarginTop: '7rem' },
            // Tabelas estilizadas
            'table': {
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9375rem',
              boxShadow: '0 2px 8px rgba(44,24,16,0.06)',
              borderRadius: '6px',
              overflow: 'hidden',
            },
            'thead': {
              backgroundColor: theme('colors.dark-brown'),
            },
            'thead th': {
              color: theme('colors.cream'),
              fontFamily: theme('fontFamily.body'),
              fontWeight: '600',
              fontSize: '0.8125rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0.75rem 1rem',
            },
            'tbody tr': {
              borderBottom: `1px solid ${theme('colors.card-bg')}`,
              transition: 'background-color 0.15s',
            },
            'tbody tr:hover': {
              backgroundColor: theme('colors.card-bg'),
            },
            'tbody td': {
              padding: '0.65rem 1rem',
              color: theme('colors.warm-brown'),
              verticalAlign: 'top',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
