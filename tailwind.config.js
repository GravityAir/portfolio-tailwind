module.exports = {
  // Aktifkan dark mode menggunakan class di <html>
  darkMode: 'class', 
  theme: {
    extend: {
      // Menambahkan font Inter sebagai font default
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Anda bisa menambahkan warna kustom di sini jika perlu
      colors: {
        cyan: {
          500: '#06b6d4',
          600: '#0891b2',
        },
        slate: {
          100: '#f1f5f9',
          300: '#cbd5e1',
          400: '#94a3b8',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      }
    },
  },
  variants: {
    // Anda dapat menyimpan varian kustom Anda
    backgroundColor: ['responsive', 'hover', 'focus','active', 'visited '],
	  opacity: ['responsive', 'hover', 'focus', 'disabled'],
    textColor: ['responsive', 'hover', 'focus', 'visited','group-hover'],
	  
  },
  plugins: [],
}