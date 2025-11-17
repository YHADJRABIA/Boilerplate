/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        sm: '768px',
        md: '1024px',
        lg: '1200px',
      },
      spacing: {
        'header': 'var(--header-height)',
        'footer': 'var(--footer-height)',
        'page': 'var(--page-padding)',
      },
      maxWidth: {
        'page': 'var(--page-max-width)',
        'container': 'var(--container-max-width)',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        neutral: {
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          400: 'var(--neutral-400)',
          600: 'var(--neutral-600)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          inverse: 'var(--text-inverse)',
        },
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          'header-footer': 'var(--bg-header-footer)',
        },
        border: 'var(--border-color)',
      },
      fontFamily: {
        body: 'var(--font-body)',
      },
      animation: {
        'icon-switch': 'iconSwitch 0.3s ease-in-out',
      },
      keyframes: {
        iconSwitch: {
          '0%': {
            opacity: '0',
            transform: 'rotate(-90deg) scale(0.8)',
          },
          '100%': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
