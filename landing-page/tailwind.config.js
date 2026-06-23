tailwind.config = {
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        fg: 'var(--fg)',
        'fg-muted': 'var(--fg-muted)',
        'fg-dim': 'var(--fg-dim)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        'gold-1': 'var(--gold-1)',
        'gold-2': 'var(--gold-2)',
        'gold-3': 'var(--gold-3)',
        blue: 'var(--blue)',
        'blue-soft': 'var(--blue-soft)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'flip-in': {
          '0%': { transform: 'translateY(108%)', opacity: '0' },
          '60%': { opacity: '1' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(18px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'marquee-y': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'aurora-drift': {
          '0%, 100%': { transform: 'translate(-50%, 0) scale(1)', opacity: '0.85' },
          '50%': { transform: 'translate(-46%, -4%) scale(1.12)', opacity: '1' },
        },
      },
      animation: {
        'flip-in': 'flip-in 0.62s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'marquee-y': 'marquee-y 32s linear infinite',
        'aurora-drift': 'aurora-drift 12s ease-in-out infinite',
      },
    },
  },
};
