// src/data/projects.js

// Featured projects (shown on main page)
export const featuredProjects = [
  {
    title: "Medicinal Leaf Classification with cDCGANs",
    description: "Reduced validation loss by 27.15% on imbalanced datasets using cDCGAN augmentation pipelines for medicinal leaf classification.",
    tags: ["PyTorch", "Deep Learning", "GANs", "OpenCV"],
    link: null,
    year: 2025,
    madeAt: "Manipal University",
    featured: true
  },
  {
    title: "CerConvNet: Cervical Cancer Detection",
    description: "Achieved 99.5% test accuracy on SIPKaMed dataset by fine-tuning SOTA deep learning models for cervical cell classification.",
    tags: ["TensorFlow", "Keras", "Deep Learning", "Transfer Learning"],
    link: "https://github.com/Mystique03/cervical_cancer_detection",
    year: 2024,
    madeAt: "Presidency University",
    featured: true
  },
  {
    title: "Object Dectection with YOLOv5",
    description: "Built and deployed an object detection model for vehicle detection using YOLOv5.",
    tags: ["Python", "yolov5", "CV", "Streamlit"],
    link: "https://github.com/Mystique03/yolov5_object_detection",
    year: 2024,
    madeAt: "Personal Project",
    featured: true
  },
  {
    title: "Iris - LLM Health Assistant",
    description: "Developed a disease prediction pipeline integrating Machine Learning classifiers with LLM reasoning for intelligent health recommendations.",
    tags: ["Python", "TensorFlow", "NLTK", "NLP"],
    link: "https://github.com/Mystique03/Iris_ws",
    year: 2023,
    madeAt: "Presidency University (Thesis Project)",
    featured: true
  }
];

// All projects (for archive page)
export const allProjects = [
  ...featuredProjects,
  {
    title: "Diablo Bot",
    description: "Built ROS2 workspace with custom URDFs and controllers enabling robot kinematics and motion planning for autonomous navigation.",
    tags: ["ROS2", "Python", "Gazebo", "MoveIt"],
    link: "https://github.com/Mystique03/diablo_ws",
    year: 2025,
    madeAt: "NTNU",
    featured: false
  },
  {
    title: "Tiny Shakespeare GPT",
    description: "Built mini GPT model from scratch to generate Shakespeare-like text using character-level language modeling.",
    tags: ["PyTorch", "Transformers", "NLP", "Generative AI"],
    link: "https://github.com/Mystique03/tinyShakespear-GPT",
    year: 2025,
    madeAt: "Personal Project",
    featured: false
  },
  {
    title: "Customer Satisfaction Prediction: Linear Regression Model",
    description: "Developed a linear regression model to predict customer's time spent on an ecommerce site.",
    tags: ["Python", "matplotlib", "Pandas", "Data Analysis"],
    link: "https://github.com/yourusername/style-transfer",
    year: 2023,
    madeAt: "Presidency University",
    featured: false
  },
  {
    title: "Sentiment Analysis",
    description: "Real-time sentiment analysis dashboard for social media data using BERT models.",
    tags: ["Transformers", "Python", "NLP"],
    link: null,
    year: 2023,
    madeAt: "Personal Project",
    featured: false
  },
  {
    title: "Crimes Against Women in India",
    description: "Data analysis and visualization of crimes against women in India using Python and Pandas.",
    tags: ["Python", "Pandas", "Data Visualization", "Matplotlib"],
    link: "https://github.com/Mystique03/Data-Visualization-Projects/tree/main/Crimes-Against-Women",
    year: 2022,
    madeAt: "Presidency University",
    featured: false
  },
  {
    title: "Multi-Client Chat",
    description: "Developed a multi-client chat application using socket programming in java.",
    tags: ["Java", "Socket Programming", "Networking"],
    link: "https://github.com/Mystique03/java-/tree/main/MultiClientChat",
    year: 2021,
    madeAt: "Presidency University",
    featured: false
  }
];