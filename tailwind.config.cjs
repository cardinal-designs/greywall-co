/** @type {import('tailwindcss').Config} */

const path = require('path');
let plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
		'./**/*.liquid',
    './frontend/**/*.{js,ts,jsx,tsx}'
	],
  safelist: [
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        spin: 'spin 0.5s linear infinite',
        rotator: 'rotator 1.4s linear infinite',
        dash: 'dash 1.4s ease-in-out infinite'
      },
      aria: {
        unhidden: 'hidden="false"',
      },
      aspectRatio: {
        tall: '3 / 4',
        wide: '4 / 3',
        product: '3 / 4',
      },
      borderWidth: {
        '1': '1px',
      },
      boxShadow: {
        dropdown: '0px 2px 2px 0px #00000026'
      },
      colors: {
        brown: '#472715',
        gold: '#8B6536',
        taupe: '#CDC4B0',
        'darker-beige': '#E3D7C5',
        beige: '#EFEAE3',
        cream: '#F7F4EF',
        error: '#FF0000',
        background: 'var(--background)',
        text: 'var(--text)'
      },
      fontFamily: {
        serif: '"dejanire-text", sans-serif',
        italic: '"fraunces", sans-serif',
        sans: '"monotype-grotesque", sans-serif'
      },
      fontSize: {
        'h1': ['40px', { lineHeight: '1.2', letterSpacing: '0.13em', }],
        'h2': ['32px', { lineHeight: '1.2', letterSpacing: '0.13em', }],
        'h3': ['30px', { lineHeight: '1.2', letterSpacing: '0.13em', }],
        'h4': ['22px', { lineHeight: '1.1', letterSpacing: '0.13em', }],
        'h5': ['16px', { lineHeight: '1.2', letterSpacing: '0.13em', }],
        'sh1': ['14px', { lineHeight: '1.4', letterSpacing: '0.1em', }],
        'sh2': ['11px', { lineHeight: '1.5', letterSpacing: '0.1em', }],
        'sh3': ['14px', { lineHeight: '1', letterSpacing: '0', }],
        'sh4': ['12px', { lineHeight: '1.8', letterSpacing: '0.08em', }],
        'sh5': ['13px', { lineHeight: '1.2', letterSpacing: '0.08em', }],
        'pt': ['15px', { lineHeight: '1.2', letterSpacing: '0.17em', }],
        'body-1': ['18px', { lineHeight: '1', letterSpacing: '0', }],
        'body-2': ['13px', { lineHeight: '1.8', letterSpacing: '0.04em', }],
        'body-3': ['12px', { lineHeight: '1.8', letterSpacing: '0.04em', }],
        'body-4': ['11px', { lineHeight: '1.8', letterSpacing: '0.04em', }],
        'cta': ['11px', { lineHeight: '1.2', letterSpacing: '0.1em', }],
        'caption': ['14px', { lineHeight: '1', letterSpacing: '0.11em', }],
        'tag': ['14px', { lineHeight: '1', letterSpacing: '0', }],
        'link-sm': ['11px', { lineHeight: '1.2', letterSpacing: '0.04em', }],
        'link-md': ['15px', { lineHeight: '1', letterSpacing: '0.13em', }],
        'm-h1': ['20px', { lineHeight: '1.2', letterSpacing: '0.13em', }],
        'm-h2': ['19px', { lineHeight: '1.2', letterSpacing: '0.13em', }],
        'm-h3': ['18px', { lineHeight: '1.2', letterSpacing: '0.13em', }],
        'm-h4': ['14px', { lineHeight: '1.2', letterSpacing: '0.13em', }],
        'm-sh1': ['12px', { lineHeight: '1.4', letterSpacing: '0.1em', }],
        'm-sh2': ['12px', { lineHeight: '1.5', letterSpacing: '0.1em', }],
        'm-sh4': ['16px', { lineHeight: '1.25', letterSpacing: '0.13em', }],
        'm-body-1': ['14px', { lineHeight: '1', letterSpacing: '0', }],
        'm-body-2': ['12px', { lineHeight: '1.8', letterSpacing: '0.04em', }],
        'm-body-3': ['12px', { lineHeight: '1.8', letterSpacing: '0.04em', }],
        'm-caption': ['11px', { lineHeight: '1.8', letterSpacing: '0.04em', }],
        'm-link': ['13px', { lineHeight: '1', letterSpacing: '0', }],
      },
      gridTemplateColumns: {
        thirds: '1fr auto 1fr',
      },
      height: {
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotator: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(270deg)' },
        },
        dash: {
          '0%': { strokeDashoffset: 280 },
          '50%': { strokeDashoffset: 75, transform: 'rotate(135deg)' },
          '100%': { strokeDashoffset: 280, transform: 'rotate(450deg)' }
        }
      },
      maxWidth: {
        'custom': 'var(--width)',
        '1440': '1440px',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
        xxxl: '1600px'
      },
      spacing: {
        '0': '0px',
        '5': '5px',
        '10': '10px',
        '13': '13px',
        '15': '15px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',
        '125': '125px',
        '150': '150px',
        'half': '50%',
        'full': '100%',
      },
      transitionDuration: {
        DEFAULT: '300ms',
        0: '0s',
        slow: '700ms',
      },
      transitionProperty: {
        none: 'none',
        all: 'all',
        DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
        color: 'color',
        colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
        opacity: 'opacity',
        position: 'top, right, bottom, left',
        size: 'height, width',
        transform: 'transform',
        visibility: 'opacity, visibility',
      },
      width: {

      },
      zIndex: {
        bottom: '-1',
        top: '999999',
      }
    }
  },
  plugins: [

  ]
}