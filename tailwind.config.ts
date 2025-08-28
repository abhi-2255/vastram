import { Config } from "tailwindcss";


const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",  // adjust paths for your project
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                prata: ["Prata", "serif"],
            },
        },
    },
    plugins: [],
}

export default config;