# 🌿 Leafify

**Leafify: Your plant health, simplified.**

A web-based application that uses deep learning to detect and identify diseases in plant leaves from uploaded images.



---

## ## About The Project

This project is designed to help farmers and gardeners identify plant diseases early, allowing for timely intervention and potentially saving crops. The application leverages computer vision and a trained convolutional neural network (CNN) to first detect and crop the leaf from an image and then classify its health status, identifying specific diseases if present.

The core of Leafify is built with Python, using **TensorFlow** for the deep learning model and **OpenCV** for image processing tasks. The model is served through a simple and intuitive web interface created with the **Flask** web framework.

---

## ## Key Features

* **Image Upload**: Simple interface to upload an image of a plant leaf.
* **Automatic Leaf Detection**: The model automatically identifies and isolates the leaf from the background.
* **Disease Classification**: The AI model classifies the leaf's condition (e.g., healthy, rust, powdery mildew).
* **Instant Results**: Get a clear diagnosis within seconds.

---

## ## Technology Stack

* **Backend**: Python, Flask
* **Machine Learning**: TensorFlow, Keras
* **Image Processing**: OpenCV, NumPy
* **Frontend**: HTML, CSS (basic)

---

## ## Getting Started

To get a local copy up and running, follow these simple steps.

### ### Prerequisites

Make sure you have Python 3.8+ and Git installed on your system.

### ### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/](https://github.com/)<YOUR_USERNAME>/Leafify.git
    cd Leafify
    ```
2.  **Create and activate a virtual environment:**
    ```sh
    # For macOS/Linux
    python3 -m venv venv
    source venv/bin/activate

    # For Windows
    python -m venv venv
    venv\Scripts\activate
    ```
3.  **Install the required packages:**
    ```sh
    pip install -r requirements.txt
    ```
    *(Note: You will need to create a `requirements.txt` file by running `pip freeze > requirements.txt`)*

---

## ## Usage

1.  **Run the Flask application:**
    ```sh
    python app.py
    ```
2.  **Open your web browser** and navigate to `http://127.0.0.1:5000`.
3.  **Upload an image** of a plant leaf and see the diagnosis.

---

## ## Project Status

This project is currently in active development. The next steps include improving model accuracy and refining the user interface.
