// src/data/experiences.js
export const experiences = [
  {
    period: "April 2025 — Present",
    title: "Research Assistant",
    company: "Manipal Institute of Technology",
    location: "Bengaluru, India",
    description: [
      "Designed and implemented a class-conditional GAN–based data augmentation pipeline in PyTorch to mitigate severe class imbalance in small-scale (<1.5K samples) medicinal leaf datasets, reducing manual data collection efforts by ~80%",
      "Spearheaded 3-member team to benchmark and optimize deep learning architectures including EfficientNet, ResNet, VGG, and Vision Transformers (ViT-S, ViT-B) using transfer learning and systematic hyperparameter tuning.",
      "Developing lightweight hybrid CNN–Transformer models for efficient image classification with integrated explainable AI (XAI) evaluation metrics to enhance model interpretability",
      "First-author contributor on a journal manuscript currently under peer review"
    ],
    tags: ["Transformers", "PyTorch", "Computer Vision", "GANs", "CNNs", "XAI"]
  },
  {
    period: "Oct 2024 — Mar 2025",
    title: "Robotics Intern",
    company: "National Taiwan Normal University",
    location: "Taipei, Taiwan",
    description: [
      "Developed and tested manipulation policies in Gazebo simulation for a bipedal robot, focusing on stable object grasping and handling tasks",
      "Ran iterative Gazebo simulation experiments with weekly ablations to optimize bipedal locomotion stability and training efficiency",
      "Engineered custom URDF robot models with accurate inertial tensors and developed full ROS2 pipelines including inverse kinematics solvers, MoveIt motion planners, and joint-space controllers",
    ],
    tags: ["ROS2", "Gazebo", "Deep RL", "Robotics", "CV"]
  },
  {
    period: "Jan 2023 — Apr 2024",
    title: "Research Assistant",
    company: "Presidency University",
    location: "Bengaluru, India",
    description: [
      "Engineered end-to-end deep learning pipelines using TensorFlow for cervical cell classification on 4,000+ scans, achieving 99.5% test accuracy on the SIPKaMed dataset, surpassing existing benchmarks",
      "Co-authored multiple publications for peer-reviewed journals and performed experimental reproducibility testing on trained models "
    ],
    tags: ["Medical Imaging", "Deep Learning", "TensorFlow", "Keras"]
  }
];
