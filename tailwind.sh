#! avant tout projet faire : 

#! - npm create vite@latest
#! - nomDuProjet + Javascript
#! - cd nomDuProjet

#! puis bash tailwind.sh


echo "Adding tailwindcss, postcss and autoprefixer as a dependency"

npm install

npm add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

echo "Configuring valid files glob for tailwindcss.config.js"
cat <<EOT > tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
EOT

echo "Configuring src/index.css"
cat <<EOT > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOT

echo "Cleaning App.css"
cat <<EOT > src/App.css

EOT


echo "Cleaning App.jsx"
cat <<EOT > src/App.jsx
import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center'>
      <h1 className='text-white hover:text-red-600 text-4xl font-bold'>TRIBELHA ON TOP</h1>
    </div>
  )
}

export default App
EOT

rm src/assets/react.svg 

npm i -D daisyui@latest

npm run dev
