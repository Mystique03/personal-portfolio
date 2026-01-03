// src/data/recommendations.js

export const categories = ["All", "Books", "Papers", "Anime", "Movies", "Podcasts"];

export const recommendations = [
  {
    id: 1,
    title: "The Worlds I See",
    type: "Books",
    creator: "Fei-Fei Li",
    year: 2023,
    image: "/TWIS-book.jpg",
    //rating: 5,
    //why: "A beautiful memoir that interweaves personal journey with the evolution of computer vision. Fei-Fei Li's story of curiosity, persistence, and humanity in AI is deeply inspiring.",
    link: "https://www.amazon.in/Worlds-See-Curiosity-Exploration-Discovery-ebook/dp/B0BPQSLVL6"
  },
  {
    id: 2,
    title: "Attention Is All You Need",
    type: "Papers",
    creator: "Vaswani et al.",
    year: 2017,
    image: "/attension-paper.png",
    //rating: 5,
    //why: "The paper that revolutionized NLP and gave birth to transformers. Elegant architecture that proved attention mechanisms alone are sufficient for sequence-to-sequence tasks.",
    link: "https://arxiv.org/abs/1706.03762"
  },
  {
    id: 3,
    title: "Death Note",
    type: "Anime",
    creator: "Madhouse",
    year: 2006,
    image: "https://cdn.myanimelist.net/images/anime/9/9453l.jpg",
    //rating: 4.5,
    //why: "A psychological thriller masterpiece. The cat-and-mouse game between Light and L is pure genius, exploring morality, justice, and the corruption of power.",
    link: "https://myanimelist.net/anime/1535/Death_Note"
  },
  {
    id: 4,
    title: "Attack on Titan",
    type: "Anime",
    creator: "Wit Studio / MAPPA",
    year: 2013,
    image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    //rating: 4.5,
    //why: "Epic storytelling with mind-bending plot twists. Perfectly blends action, mystery, and deep philosophical questions about freedom, war, and humanity.",
    link: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
  }
  
  // Add more recommendations as you discover them!
  // {
  //   id: 5,
  //   title: "Black Clover",
  //   type: "Anime",
  //   creator: "Studio Pierrot",
  //   year: 2017,
  //   image: "https://cdn.myanimelist.net/images/anime/2/88336l.jpg",
  //   rating: 4,
  //   why: "Classic shonen with heart. Asta's never-give-up attitude and the magic system are incredibly fun.",
  //   link: "https://myanimelist.net/anime/34572/Black_Clover"
  // }
];

// Helper function to filter by category
export const getRecommendationsByCategory = (category) => {
  if (category === "All") return recommendations;
  return recommendations.filter(item => item.type === category);
};