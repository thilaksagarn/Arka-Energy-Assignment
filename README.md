 # **Three.js Assignment: Interactive 2D Scene**

## **Overview**
This project is an interactive 2D scene built using **Three.js**, **vanilla JavaScript**, **HTML**, and **CSS**. It allows users to create polygons by clicking on a grid, copy them, and reset the scene. The project adheres to object-oriented programming principles and demonstrates dynamic interactions with the Three.js library.

---

## **Features**
1. **Ground Plane**:
   - A white plane that faces the camera.
   - Dynamic grid lines generated using `THREE.GridHelper`.

2. **Polygon Creation**:
   - Users can click on the grid to add vertices.
   - After adding vertices, press the "Complete" button to create a polygon.
   - Polygons are rendered in green with red edge lines.

3. **Copy Functionality**:
   - Press the "Copy" button to create a replica of the last polygon.
   - The replica moves with the cursor and can be placed by clicking.

4. **Reset Functionality**:
   - Press the "Reset" button to clear all polygons and start over.

5. **Object-Oriented Design**:
   - A separate `Polygon` class encapsulates all polygon-related logic.
   - Each polygon (original or replica) is treated as an independent object.

6. **Dynamic Effects**:
   - Buttons have hover and click animations for better interactivity.
   - Grid lines highlight dynamically when hovered over.

7. **Vanilla JavaScript**:
   - The project uses only vanilla JavaScript, HTML, CSS, and the Three.js library.

---

## **Directory Structure**
The project directory contains the following files:

![Screenshot 2025-02-07 180951](https://github.com/user-attachments/assets/93004985-df5e-4b65-899d-332cc4cb9d53)


---

## **Setup Instructions**

### **Step 1: Clone the Project**
Download or clone the project files from the repository.

### **Step 2: Open the Project**
1. Open the `index.html` file in your preferred web browser.
2. The Three.js scene will load automatically.

---

## **How to Use**

### **1. Ground Plane**
- The white plane with blue grid lines is the interactive area.
- Hover over the grid to see dynamic highlighting.

### **2. Polygon Creation**
1. Click on the grid to add vertices.
2. After adding the desired number of vertices, press the **"Complete"** button at the bottom of the screen.
3. A green polygon with red edge lines will be created.

### **3. Copy Functionality**
1. Press the **"Copy"** button to create a replica of the last polygon.
2. Move the replica with the cursor and place it by clicking.

### **4. Reset Functionality**
- Press the **"Reset"** button to clear all polygons and start over.

---

## **Code Structure**

### **1. HTML (`index.html`)**
- Contains the UI buttons (`Complete`, `Copy`, `Reset`) and links to the Three.js library and JavaScript file.

### **2. JavaScript (`main.js`)**
- **Scene Setup**: Initializes the Three.js scene, camera, renderer, and ground plane.
- **Polygon Class**: Encapsulates polygon creation, rendering, and manipulation.
- **Mouse Interaction**: Handles vertex placement, polygon creation, and replica movement.
- **Reset Logic**: Clears all polygons and resets the state.

### **3. CSS**
- Styles the buttons with hover and click effects for better interactivity.

---

## **Dependencies**
- **Three.js Library**: Loaded via CDN (`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`).

---

## **Screenshots**
![Screenshot 2025-02-07 180809](https://github.com/user-attachments/assets/2d2a28b5-6de9-45e6-8750-0a23aea4c786)


---

## **Contributing**
If you'd like to contribute to this project:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## **License**
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

---
