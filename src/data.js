import { 
  FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaTerminal, FaRobot, FaBrain, FaSearch, FaFlask, FaCode
} from 'react-icons/fa';
import { 
  SiDjango, SiMysql, SiPostgresql
} from 'react-icons/si';

export const personalInfo = {
  name: "P. Moneesh Raj",
  title: "Full Stack Developer & AI Enthusiast",
  description: "M.Sc Computer Science student passionate about building scalable web applications and AI-powered solutions.",
  about: "I am an M.Sc Computer Science student with hands-on experience in developing real-world web applications and machine learning solutions. I have contributed to projects like a Hospital Management System, where I built patient and appointment modules using Python, Django, and PostgreSQL. I am skilled in Python, SQL, and AI tools like Antigravity, with a strong interest in Artificial Intelligence and scalable software development. I focus on building impactful, efficient, and user-friendly applications.",
  email: "moneesh2808@gmail.com",
  phone: "+91 8124567215",
  location: "Kancheepuram, Tamil Nadu",
  github: "https://github.com/Moneesh2808",
  linkedin: "#", // Add if available
  resumeUrl: "/resume.pdf", // Placeholder
};

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" }
    ]
  },
  {
    category: "Web",
    items: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "REST APIs", icon: FaTerminal, color: "#4DB33D" }
    ]
  },
  {
    category: "Frameworks",
    items: [
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Flask", icon: FaFlask, color: "#000000" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" }
    ]
  },
  {
    category: "AI Tools",
    items: [
      { name: "Antigravity", icon: FaBrain, color: "#6366F1" },
      { name: "Claude", icon: FaRobot, color: "#D97706" },
      { name: "Cursor", icon: FaSearch, color: "#22D3EE" }
    ]
  }
];

export const projects = [
  {
    id: "moniverse-ai",
    title: "MoniVerse AI",
    description: "Developed a ChatGPT-like AI chatbot using React and Flask. Features real-time conversational responses, PDF and image understanding.",
    longDescription: "MoniVerse AI is a sophisticated conversational platform that leverages Mistral via Ollama for intelligent interactions. It supports multi-modal capabilities including document analysis (PDF) and image recognition, providing users with a comprehensive AI assistant experience.",
    features: [
      "Real-time conversational responses",
      "PDF document understanding and querying",
      "Image processing and analysis",
      "Responsive React-based UI",
      "High-performance Flask backend"
    ],
    techStack: ["React", "Flask", "Mistral (Ollama)", "Antigravity AI"],
    github: "https://github.com/Moneesh2808/MoniVerse-AI.git",
    image: "/projects/moniverse.jpg"
  },
  {
    id: "lms",
    title: "Learning Management System",
    description: "Full-stack LMS using Django and MySQL with user authentication and course management.",
    longDescription: "A robust learning platform designed to streamline educational content delivery. It features a complete user authentication system, role-based dashboards for instructors and students, and dynamic course management capabilities.",
    features: [
      "Secure user login & authentication",
      "Comprehensive course management system",
      "Interactive student and instructor dashboards",
      "Progress tracking",
      "Resource management"
    ],
    techStack: ["Django", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/projects/lms.jpg"
  },
  {
    id: "plant-disease",
    title: "Plant Disease Detection",
    description: "Developed a machine learning model to classify plant diseases using image datasets.",
    longDescription: "An AI-powered diagnostic tool for agriculture. It uses advanced image classification techniques to identify various plant diseases from photos, helping farmers take timely action to protect their crops.",
    features: [
      "High-accuracy image classification",
      "Support for multiple plant species",
      "Clean Streamlit interface for easy use",
      "Optimized model performance",
      "Detailed disease information and prevention tips"
    ],
    techStack: ["Python", "Machine Learning", "Streamlit"],
    image: "/projects/plant.jpg"
  },
  {
    id: "hospital-mgmt",
    title: "Hospital Management System",
    description: "Developed a full-stack system using Django, PostgreSQL, and JWT authentication.",
    longDescription: "An enterprise-grade hospital management solution. It handles the entire patient lifecycle from registration to appointment scheduling and billing, using a role-based access control system.",
    features: [
      "Role-based access (Admin, Doctor, Patient)",
      "Dynamic appointment scheduling and management",
      "Secure payment workflows",
      "Comprehensive patient medical history",
      "JWT-based secure authentication"
    ],
    techStack: ["Django", "PostgreSQL", "JWT", "Antigravity AI"],
    github: "https://github.com/Moneesh2808/Hospital-Management.git",
    image: "/projects/hospital.jpg"
  }
];

export const education = [
  {
    degree: "M.Sc Computer Science",
    institution: "University of Madras",
    duration: "2024 – 2026",
    percentage: "75%",
    status: "Ongoing"
  },
  {
    degree: "B.Sc Computer Science",
    institution: "Pachaiyappas College for Men, Kancheepuram",
    duration: "2021 – 2024",
    percentage: "78%",
    status: "Completed"
  },
  {
    degree: "12th Standard",
    institution: "Bharathidasan Matriculation School",
    duration: "2020 – 2021",
    percentage: "83%",
    status: "Completed"
  },
  {
    degree: "10th Standard",
    institution: "Bharathidasan Matriculation School",
    duration: "2018 – 2019",
    percentage: "83%",
    status: "Completed"
  }
];

export const achievements = [
  {
    title: "Best Student of the Year",
    year: "2022",
    description: "Recognized for outstanding academic performance and leadership."
  },
  {
    title: "Rank 1 in Academics",
    year: "2023",
    description: "Achieved top rank in the Computer Science department."
  },
  {
    title: "Badminton Winner",
    year: "2018",
    description: "School level winner in Badminton singles."
  }
];

export const certifications = [
  {
    title: "Full Stack Developer Internship",
    provider: "Inspire Softtech Solutions",
    duration: "April 2025 - May 2025"
  },
  {
    title: "AI & Full Stack Developer Internship",
    provider: "Hybrid Softech Solutions",
    duration: "Jan 2026 - June 2026"
  },
  {
    title: "Data Analytics with AI",
    provider: "Sololearn"
  },
  {
    title: "SQL Certification",
    provider: "Scalar, Simplilearn"
  },
  {
    title: "English Typewriting (Junior & Senior)",
    provider: "Technical Board"
  }
];

export const softSkills = [
  "Communication",
  "Team Collaboration",
  "Quick Learner",
  "Time Management"
];
