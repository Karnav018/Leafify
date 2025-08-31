# 🌿 Leafify: AI-Powered Plant Disease Detection

![Python](https://img.shields.io/badge/Python-3.9%2B-blue.svg) ![FastAPI](https://img.shields.io/badge/FastAPI-0.103%2B-green.svg) ![Vite](https://img.shields.io/badge/Vite-5.0%2B-purple.svg) ![TensorFlow](https://img.shields.io/badge/TensorFlow-2.10%2B-orange.svg)

**A modern web application that uses an ensemble of deep learning models to deliver highly accurate plant disease diagnoses.**

Leafify provides an intuitive interface for users to upload an image of a plant leaf and receive an instant diagnosis based on the consensus of multiple "expert" AI models.



---

## ## ✨ Key Features

* **State-of-the-Art Accuracy**: Employs an **Ensemble Learning** approach, combining predictions from multiple models to achieve superior accuracy and reliability.
* **Modern Tech Stack**: Built with a fast and responsive Vite (React) frontend and a high-performance FastAPI backend.
* **Robust Analysis**: Delivers a final prediction based on the averaged confidence scores from all models in the ensemble.
* **Simple & Responsive UI**: A clean, user-friendly interface that works seamlessly on both desktop and mobile devices.

---

## ## 🤖 Machine Learning Model: Ensemble Approach

To maximize predictive performance, Leafify uses an ensemble of deep learning models. This "wisdom of the crowd" approach ensures that the final diagnosis is more robust and accurate than what any single model could provide.

* **Base Models**: The ensemble is composed of several powerful, pre-trained architectures:
    * **EfficientNetB4**
    * **ResNet50**
    * **(Optional) DenseNet121**

* **Ensemble Method**: We use **Averaging Probabilities (Soft Voting)**. Each model in the ensemble makes a prediction and outputs a list of confidence scores for all possible classes. These scores are then averaged, and the class with the highest average score is chosen as the final prediction.

* **Dataset**: [Plant Disease Classification - Merged Dataset](https://www.kaggle.com/datasets/alinedobrovsky/plant-disease-classification-merged-dataset)

* **Performance**: The ensemble model achieved **[Your Final Accuracy]%** accuracy on the unseen test set.

---

## ## 🛠️ Technology Stack & Architecture

Leafify uses a decoupled frontend/backend architecture for modern development and scalability.

* **Frontend**: Vite, React, CSS3
* **Backend**: Python, FastAPI
* **Machine Learning**: TensorFlow (Keras), OpenCV, NumPy
* **Ensemble Models**: EfficientNet, ResNet, DenseNet

---

## ## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### ### Prerequisites

Make sure you have the following installed:
* Python 3.9+
* Node.js and npm
* Git

### ### 1. Backend Setup

```bash
# Clone the repository
git clone [https://github.com/](https://github.com/)<YOUR_USERNAME>/Leafify.git
cd Leafify

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt