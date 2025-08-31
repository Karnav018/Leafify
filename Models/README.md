# 🌿 Leafify: AI-Powered Plant Disease Detection

![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg) ![FastAPI](https://img.shields.io/badge/FastAPI-0.103%2B-green.svg) ![Vite](https://img.shields.io/badge/Vite-5.0%2B-purple.svg) ![TensorFlow](https://img.shields.io/badge/TensorFlow-2.10%2B-orange.svg)

**A modern web application that uses deep learning to identify plant diseases from leaf images.**

Leafify provides an intuitive interface for users to upload an image of a plant leaf and receive an instant, accurate diagnosis powered by a state-of-the-art computer vision model.



---

## ## ✨ Key Features

* **High-Accuracy Predictions**: Leverages a fine-tuned `EfficientNetB4` model for state-of-the-art classification accuracy.
* **Modern Tech Stack**: Built with a fast and responsive Vite (React) frontend and a high-performance FastAPI backend.
* **Instant Analysis**: Delivers predictions in seconds, providing a confidence score for each diagnosis.
* **Simple & Responsive UI**: A clean, user-friendly interface that works seamlessly on both desktop and mobile devices.

---

## ## 🛠️ Technology Stack & Architecture

Leafify uses a decoupled frontend/backend architecture for modern development and scalability.

* **Frontend**: Vite, React, CSS3
* **Backend**: Python, FastAPI
* **Machine Learning**: TensorFlow (Keras), OpenCV, NumPy
* **Dataset**: [Plant Disease Classification - Merged Dataset](https://www.kaggle.com/datasets/alinedobrovsky/plant-disease-classification-merged-dataset)

### ### Architecture

The frontend (built with Vite) communicates with the backend (built with FastAPI) via a REST API. The backend handles image processing and runs the inference using the trained TensorFlow model.

---

## ## 🤖 Machine Learning Model

The core of Leafify is a deep learning model trained for multi-class image classification.

* **Model**: `EfficientNetB4`
* **Technique**: Transfer Learning and Fine-Tuning
* **Performance**: Achieved **[Your Accuracy]%** accuracy on the unseen test set.

For more details on the data preparation and training process, please see the `model/README.md` file.

---

## ## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### ### Prerequisites

Make sure you have the following installed:
* Python 3.9+
* Node.js and npm
* Git