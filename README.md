# Background Color Changer Project

## Project Overview

This is a simple React project that allows users to change the background color of the entire screen by clicking on buttons. Each button is associated with a color, and clicking it updates the background accordingly.

This project demonstrates fundamental concepts of React such as state management (`useState`), event handling, conditional rendering, and styling using Tailwind CSS.

## Features

- Change background color by selecting from predefined color buttons
- Buttons are styled using Tailwind CSS classes
- Responsive design for mobile and desktop screens

## Installation and Usage

### Prerequisites

- Node.js and npm installed
- Tailwind CSS installed and configured

### Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/itspriyambhattaacharya/background-color-changer.git
   cd background-color-changer
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the App:**

   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser to view the application.

## Project Structure

```
background-color-changer/
│
├── App.jsx          # Main React component
├── main.jsx         # Entry point for React rendering
├── index.css        # Tailwind CSS import
└── README.md        # Project documentation
```

## Code Explanation

### App.jsx

```jsx
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  function addRed() {
    setColor("red");
  }

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap justify-center gap-5 fixed bottom-12 inset-x-0 py-6 bg-white">
          <button
            onClick={addRed}
            className="cursor-pointer bg-red-700 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="cursor-pointer bg-blue-700 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="cursor-pointer bg-green-700 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="cursor-pointer bg-yellow-300 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="cursor-pointer bg-pink-400 px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("black")}
            className="cursor-pointer bg-black px-4 py-2 w-[90px] rounded-4xl text-white"
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
```

### main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

### index.css

```css
@import "tailwindcss";
```

## Contributing

Contributions are welcome! If you find a bug or want to suggest a new feature, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
