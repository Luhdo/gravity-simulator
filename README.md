# Gravity Simulator 🌌

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![GitHub Issues](https://img.shields.io/github/issues/luhdo/gravity-simulator)](https://github.com/luhdo/gravity-simulator/issues)
[![GitHub Stars](https://img.shields.io/github/stars/luhdo/gravity-simulator)](https://github.com/luhdo/gravity-simulator/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/luhdo/gravity-simulator)](https://github.com/luhdo/gravity-simulator/network)

A simple 2D gravity simulation built with HTML5 Canvas and JavaScript. This project allows you to create and interact with objects that simulate gravitational forces in real-time. Perfect for learning about physics, JavaScript, and canvas animations.

👉 **Live Preview:** [https://ludho.ir/projects/gravity-simulator/](https://ludho.ir/projects/gravity-simulator/)

---

## Table of Contents

- [Gravity Simulator 🌌](#gravity-simulator-)
  - [Table of Contents](#table-of-contents)
  - [Features ✨](#features-)
  - [Installation 🛠️](#installation-️)
  - [Usage 🎮](#usage-)
  - [How It Works 🧠](#how-it-works-)
  - [Technologies Used 💻](#technologies-used-)
  - [License 📜](#license-)
  - [Contributing 🤝](#contributing-)

---

## Features ✨

- **Interactive Gravity Simulation:** Click anywhere on the canvas to create objects with customizable size, density, and color.
- **Real-Time Physics:** Objects interact with each other based on gravitational forces.
- **Customizable Parameters:** Adjust the size, density, and color of objects using the control panel.
- **Responsive Design:** The canvas dynamically adjusts to the size of your browser window.

---

## Installation 🛠️

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/luhdo/gravity-simulator.git
   cd gravity-simulator
   ```

2. **Install dependencies:**

   This project uses [Vite](https://vitejs.dev/) for development. Install the required dependencies by running:

   ```bash
   npm install
   ```

3. **Run the development server:**

   Start the local development server with:

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to view the simulation.

4. **Build for production:**

   To build the project for production, run:

   ```bash
   npm run build
   ```

   The output will be in the `dist` folder.

---

## Usage 🎮

- **Create Objects:** Click anywhere on the canvas to create a new object. You can adjust its size, density, and color using the control panel in the top-left corner.
- **Adjust Parameters:**
  - **Size:** Controls the radius of the object.
  - **Density:** Affects the mass of the object (mass = density * radius²).
  - **Color:** Changes the color of the object.
- **Watch the Simulation:** Objects will interact with each other based on gravitational forces. Larger and denser objects will exert stronger gravitational pulls.

---

## How It Works 🧠

The simulation is based on Newton's law of universal gravitation. Here's a breakdown of the key components:

- **Gravity Calculation:** The gravitational force between two objects is calculated using the formula:
  
  $$F=G\frac{m_1 m_2}{r^2}$$
  
  Where:
  - $F$ is the gravitational force.
  - $G$ is the gravitational constant (set to 0.1 in this simulation).
  - $m_1$ and $m_2$ are the masses of the two objects.
  - $r$ is the distance between the centers of the two objects.

- **Object Movement:** Each object's velocity is updated based on the gravitational forces acting on it. The position is then updated using the velocity.

- **Rendering:** The canvas is cleared and redrawn every frame using `requestAnimationFrame`, ensuring smooth animations.

---

## Technologies Used 💻

- **HTML5 Canvas:** For rendering the simulation.
- **JavaScript:** For the physics logic and interactivity.
- **Vite:** For fast development and production builds.
- **CSS:** For styling the control panel and overall layout.

---

## License 📜

This project is licensed under the **Apache License 2.0**. See the [LICENSE](LICENSE) file for details.

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

Please ensure your code follows the project's style and doesn't break anything.

---

Enjoy the simulation! If you have any questions or feedback, feel free to open an issue or reach out.
