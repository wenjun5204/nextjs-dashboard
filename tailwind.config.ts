/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        bg: '#F2F4F6', // 背景色
        main: '#6157FF', // 主色
        grey: '#AFAFAF', // 灰色字体
        disable: '#CCC', // 置灰色
        highlight: '#FF1A6C', // 高亮色
        super: '#FF694A', // 超神色
        king: '#F25CCD', // 欧皇色
        hide: '#678FFF', // 隐藏款色
        normal: '#58CCCD', // 普通款色
      },
      gradientColorStops: () => ({
        'base-g-start': '#7A68FD', // 主渐变色起始值
        'base-g-end': '#BD2AFA', // 主渐变色截止值
        'highlight-g-start': '#FF277C', // 高亮渐变色起始值
        'highlight-g-end': '#FF8055', // 高亮渐变色截止值
        'super-g-start': '#FF694A', // 超神渐变色起始值
        'super-g-end': '#FFA54A', // 超神渐变色截止值
        'king-g-start': '#F25CCD', // 欧皇渐变色起始值
        'king-g-end': '#F686FD', // 欧皇渐变色截止值
        'hide-g-start': '#678FFF', // 隐藏款渐变色起始值
        'hide-g-end': '#78BCFF', // 隐藏款渐变色截止值
        'normal-g-start': '#58CCCD', // 普通款渐变色起始值
        'normal-g-end': '#58CDB1', // 普通款渐变色截止值
      }),
      backgroundImage: {
        jianbian:
          'linear-gradient(90deg,rgba(247,149,51,.1),rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
