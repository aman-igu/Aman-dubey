import { Project, Education, SkillCategory, Achievement, Certification, Position } from './types';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/aman-igu",
    icon: Github,
    label: "github.com/aman-igu"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/aman-dubey-7163b1275",
    icon: Linkedin,
    label: "aman-dubey-7163b1275"
  },
  {
    name: "Email",
    url: "mailto:2024uee0152@iitjammu.ac.in",
    icon: Mail,
    label: "2024uee0152@iitjammu.ac.in"
  },
  {
    name: "Phone",
    url: "tel:+917303896771",
    icon: Phone,
    label: "+91-7303896771"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech (Electrical Engineering)",
    institution: "Indian Institute of Technology, Jammu",
    year: "2021 - 2025",
    score: "CGPA: 7.82 (Current)"
  },
  {
    degree: "12th Standard (ISC)",
    institution: "ISC Board",
    year: "2023",
    score: "91%"
  },
  {
    degree: "10th Standard (ICSE)",
    institution: "ICSE Board",
    year: "2021",
    score: "96%"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Heart Stroke Prediction using Supervised ML",
    date: "June 2025",
    description: "Developed a supervised machine learning model to predict the likelihood of a heart stroke based on health parameters.",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas", "NumPy"],
    points: [
      "Implemented a Streamlit-based user interface (UI) to allow users to input parameters and receive real-time stroke prediction results.",
      "Preprocessed and analyzed health data to train, validate, and test the machine learning model (e.g., Logistic Regression, Random Forest)."
    ],
    link: "https://github.com/aman-igu"
  },
  {
    title: "Bengaluru House Price Prediction",
    date: "June 2025",
    description: "Built a supervised machine learning model for predicting house prices in Bengaluru, deployed via a web application.",
    technologies: ["Python", "Scikit-learn", "Flask", "Pandas", "HTML", "CSS", "JavaScript"],
    points: [
      "Developed a Flask-based web application to serve the trained model, enabling users to get price estimates based on input features.",
      "Performed extensive data cleaning and feature engineering on a real-world dataset, handling outliers and categorical variables."
    ],
    link: "https://github.com/aman-igu"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C/C++", "Java"]
  },
  {
    category: "Machine Learning & Data Science",
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"]
  },
  {
    category: "Web Development",
    skills: ["Flask", "Streamlit", "HTML", "CSS"]
  },
  {
    category: "Tools & Version Control",
    skills: ["Git", "Jupyter Notebook", "Google Colab", "Windows"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "ATF Round-2 Candidate by Algo University",
    year: "2025"
  },
  {
    title: "200+ Questions Solved on LeetCode",
    year: "2025"
  }
];

export const POSITIONS: Position[] = [
  {
    role: "Event Management",
    organization: "E-Cell, IIT Jammu",
    period: "Present"
  },
  {
    role: "Member",
    organization: "MESH Club, IIT Jammu",
    period: "Present"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Certification on Machine Learning",
    provider: "Consulting and Analytics Club, IIT Guwahati"
  },
  {
    name: "MLOPS Certification",
    provider: "Udemy (Krish Naik)"
  }
];

export const KEY_COURSES = [
  "Data Structures",
  "Algorithms",
  "Operating Systems",
  "Linear Algebra"
];