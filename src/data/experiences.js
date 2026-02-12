// src/data/experiences.js
export const experiences = [
  {
    period: "May 2024 — Present",
    title: "Research Intern",
    company: "Manipal University",
    location: "Bengaluru, India",
    description: [
      "Designed and implemented a class-conditional GAN–based data augmentation pipeline in PyTorch to mitigate severe class imbalance in small-scale (<1.5K samples) medicinal leaf datasets, reducing manual data collection efforts by ~80%",
      "Spearheaded 3-member team to benchmark and optimize deep learning architectures including EfficientNet, ResNet, VGG, and Vision Transformers (ViT-S, ViT-B) using transfer learning and systematic hyperparameter tuning.",
      "Developing lightweight hybrid CNN–Transformer models for efficient image classification with integrated explainable AI (XAI) evaluation metrics to enhance model interpretability",
      "First-author contributor on a journal manuscript currently under peer review"
    ],
    tags: ["GANs", "TensorFlow", "Computer Vision", "Deep Learning"]
  },
  {
    period: "Oct 2024 — Mar 2025",
    title: "Robotics Intern",
    company: "National Taiwan Normal University",
    location: "Taipei, Taiwan",
    description: [
      "Conducted literature review on deep reinforcement learning techniques for humanoid robot control, identifying key challenges and solutions",
      "Built custom URDF models and developed inverse kinematics controllers for humanoid robot simulation in Gazebo",
      "Implemented motion-planning pipelines using ROS2 and MoveIt2 for complex manipulation tasks",
      "Conducted weekly research progress reviews with PI, presenting experimental results and iterating on robot behavior optimization"
    ],
    tags: ["ROS2", "Gazebo", "Deep RL", "Humanoid Robotics", "Python"]
  },
  {
    period: "Jan 2023 — Apr 2024",
    title: "Research Assistant",
    company: "Presidency University",
    location: "Bengaluru, India",
    description: [
      "Developed deep learning pipelines for cervical cell classification, achieving 99.5% test accuracy on SIPKaMed dataset, surpassing existing benchmarks",
      "Evaluated 8+ segmentation and classification architectures (VGG16, ResNet, EfficientNet) for medical imaging workflows",
      "Conducted psychological survey study on undergraduate mental health post-COVID, presented findings at IEEE International conference",
      "Co-authored multiple journal publications and performed experimental reproducibility testing on trained models"
    ],
    tags: ["Medical Imaging", "Deep Learning", "TensorFlow", "Keras"]
  }
];
