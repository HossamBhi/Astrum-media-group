/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "SpaceGrotesk-Light": "SpaceGrotesk-Light",
        "SpaceGrotesk-Regular": "SpaceGrotesk-Regular",
        "SpaceGrotesk-Medium": "SpaceGrotesk-Medium",
        "SpaceGrotesk-Bold": "SpaceGrotesk-Bold",
        "SpaceGrotesk-SemiBold": "SpaceGrotesk-SemiBold",
      },
    },
  },
  plugins: [],
};
