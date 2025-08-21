const repositories = [
  {
    name: "LLM-Verified-Synthetic-Data-Generation",
    desc: "Generates realistic synthetic data with privacy guarantees.",
    link: "https://github.com/talhanadeem7860/LLM-Verified-Synthetic-Data-Generation",
    img: "images/LLMverfified.png"
  },
  {
    name: "Production-Ready-RAG-System-with-Automated-Evaluation",
    desc: "MLOps RAG system with CI/CD and LLM-as-a-Judge evaluation.",
    link: "https://github.com/talhanadeem7860/Production-Ready-RAG-System-with-Automated-Evaluation",
    img: "images/transformer.jpg"
  },
  {
    name: "Real-Time-Fraud-Detection-System-with-Model-Monitoring",
    desc: "Fraud detection with live monitoring & statistical tests.",
    link: "https://github.com/talhanadeem7860/Real-Time-Fraud-Detection-System-with-Model-Monitoring",
    img: "images/frauddetection.png"
  },
  {
    name: "Real-Time-Zero-Shot-Voice-Cloning",
    desc: "Zero-shot voice cloning using TTS models.",
    link: "https://github.com/talhanadeem7860/Real-Time-Zero-Shot-Voice-Cloning",
    img: "images/voicecloning.jpg"
  },
  {
    name: "Molecular-Property-Prediction-with-Graph-Neural-Networks",
    desc: "Drug discovery using GNNs on molecular graphs.",
    link: "https://github.com/talhanadeem7860/Molecular-Property-Prediction-with-Graph-Neural-Networks",
    img: "images/molecular.png"
  },
  {
    name: "Semantic-Image-Search-Engine-with-CLIP",
    desc: "Zero-shot semantic search with CLIP.",
    link: "https://github.com/talhanadeem7860/Semantic-Image-Search-Engine-with-CLIP",
    img: "images/clip.jpg"
  },
  {
    name: "Image-Classification-with-a-Vision-Transformer-ViT",
    desc: "Image classification with ViT on CIFAR-10.",
    link: "https://github.com/talhanadeem7860/Image-Classification-with-a-Vision-Transformer-ViT",
    img: "images/imageclassification.jpeg"
  },
  {
    name: "The-Codebase-Companion-An-AI-Powered-Code-Explainer",
    desc: "Chat with your source code using RAG & LLM.",
    link: "https://github.com/talhanadeem7860/The-Codebase-Companion-An-AI-Powered-Code-Explainer",
    img: "images/codebase.png"
  },
  {
    name: "Chat-with-Your-Docs-A-Personal-Knowledge-Base-Q-A-System",
    desc: "RAG-powered chatbot for querying documents.",
    link: "https://github.com/talhanadeem7860/Chat-with-Your-Docs-A-Personal-Knowledge-Base-Q-A-System",
    img: "images/docschat.png"
  },
  {
    name: "Gender-Speaker-Recognition-with-Different-Machine-Learning-Models",
    desc: "Speaker recognition with multiple ML models.",
    link: "https://github.com/talhanadeem7860/Gender-Speaker-Recognition-with-Different-Machine-Learning-Models",
    img: "images/gender.jpg"
  },
  {
    name: "Gender-and-Speaker-Recognition-using-Multinomial-Logistic-Regression",
    desc: "Logistic regression for gender & speaker recognition.",
    link: "https://github.com/talhanadeem7860/Gender-and-Speaker-Recognition-using-Multinomial-Logistic-Regression",
    img: "images/gender2.jpg"
  },
  {
    name: "Real-Time-Hand-Gesture-Recognition-for-Media-Control",
    desc: "Hand gesture recognition using OpenCV & MediaPipe.",
    link: "https://github.com/talhanadeem7860/Real-Time-Hand-Gesture-Recognition-for-Media-Control",
    img: "images/handgesture.png"
  },
  {
    name: "Retail-Sales-Forecasting-Using-Time-Series-Data",
    desc: "Time series forecasting for retail sales.",
    link: "https://github.com/talhanadeem7860/Retail-Sales-Forecasting-Using-Time-Series-Data",
    img: "images/retailsales.jpeg"
  },
  {
    name: "A-Custom-Wake-Word-Detector-using-Learning-Approach",
    desc: "Wake word detection using CNNs.",
    link: "https://github.com/talhanadeem7860/A-Custom-Wake-Word-Detector-using-Learning-Approach",
    img: "images/wakeword.jpg"
  },
  {
    name: "A-Transformer-Powered-Reading-Engine",
    desc: "Reading comprehension with transformer models.",
    link: "https://github.com/talhanadeem7860/A-Transformer-Powered-Reading-Engine",
    img: "images/transformer.jpg"
  },
  {
    name: "Naive-Bayes-for-Sentiment-Analysis-on-Movie-Reviews",
    desc: "Naive Bayes classifier for movie sentiment.",
    link: "https://github.com/talhanadeem7860/Naive-Bayes-for-Sentiment-Analysis-on-Movie-Reviews",
    img: "images/sentiment.jpg"
  },
  {
    name: "k-Nearest-Neighbors-kNN-Classification-for-Tweet-Sentiment-Analysis",
    desc: "KNN classifier for tweet sentiment analysis.",
    link: "https://github.com/talhanadeem7860/k-Nearest-Neighbors-kNN-Classification-for-Tweet-Sentiment-Analysis",
    img: "images/knn.jpg"
  },
  {
    name: "NIR-EKF-Normalized-Innovation-Ratio-Based-EKF-for-Robust-State-Estimation",
    desc: "NIR-EKF implementation for robust state estimation.",
    link: "https://github.com/talhanadeem7860/NIR-EKF-Normalized-Innovation-Ratio-Based-EKF-for-Robust-State-Estimation",
    img: "images/stateestimation.jpg"
  },
  {
    name: "AI-Powered-Image-Colorization",
    desc: "Deep learning model to colorize grayscale images.",
    link: "https://github.com/talhanadeem7860/AI-Powered-Image-Colorization",
    img: "images/imagerestoration.jpg"
  },
  {
    name: "Real-Time-Face-Mask-Detection",
    desc: "Face mask detection using deep learning.",
    link: "https://github.com/talhanadeem7860/Real-Time-Face-Mask-Detection",
    img: "images/facemask.jpg"
  },
  {
    name: "AQI-Forecasting-for-Lahore-using-LSTM",
    desc: "LSTM-based PM2.5 forecasting for Lahore.",
    link: "https://github.com/talhanadeem7860/AQI-Forecasting-for-Lahore-using-LSTM",
    img: "images/lstm.png"
  },
  {
    name: "Real-Time-3D-Brain-Visualization-Depicting-Source-localized-Activity",
    desc: "EEG-based 3D brain visualization system.",
    link: "https://github.com/talhanadeem7860/Real-Time-3D-Brain-Visualization-Depicting-Source-localized-Activity",
    img: "images/eeg.png"
  },
  {
    name: "Hybrid-Reinforcement-Guided-Deep-Unfolded-Estimation-for-Preterm-Birth-Prediction",
    desc: "Hybrid RL & Deep Unfolding for preterm birth prediction.",
    link: "https://github.com/talhanadeem7860/Hybrid-Reinforcement-Guided-Deep-Unfolded-Estimation-for-Preterm-Birth-Prediction",
    img: "images/preterm.jpg"
  },
  {
    name: "Multi-Degradation-Image-Restoration-Network-Based-on-Deep-Unfolding-Neural-Network",
    desc: "Deep unfolding for multi-degradation image restoration.",
    link: "https://github.com/talhanadeem7860/Multi-Degradation-Image-Restoration-Network-Based-on-Deep-Unfolding-Neural-Network",
    img: "images/imagerestoration.jpg"
  }
];

let currentIndex = 0;
const itemsPerPage = 8;

function renderRepos() {
  const carousel = document.getElementById("repo-carousel");
  carousel.innerHTML = "";

  const visibleRepos = repositories.slice(currentIndex, currentIndex + itemsPerPage);
  visibleRepos.forEach(repo => {
    const card = document.createElement("div");
    card.className = "repo-card";
    card.innerHTML = `
      <a href="${repo.link}" target="_blank">
        <img src="${repo.img}" alt="${repo.name}">
        <h3>${repo.name}</h3>
      </a>
      <p>${repo.desc}</p>
    `;
    carousel.appendChild(card);
  });
}

document.querySelector(".next").addEventListener("click", () => {
  if (currentIndex + itemsPerPage < repositories.length) {
    currentIndex += itemsPerPage;
    renderRepos();
  }
});

document.querySelector(".prev").addEventListener("click", () => {
  if (currentIndex - itemsPerPage >= 0) {
    currentIndex -= itemsPerPage;
    renderRepos();
  }
});

renderRepos();
