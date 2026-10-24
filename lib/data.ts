export const profile = {
  name: "Mehedi Hasan Shuvo",
  short: "Shuvo",
  email: "mehedihasanshuvo164@gmail.com",
  phone: "01751645237",
  phoneLink: "+8801751645237",
  github: "https://github.com/shuvo37",
  linkedin: "https://www.linkedin.com/in/mehedi-hasan-shuvo-37617a2a0/",
  resume: "/Mehedi_Hasan_Shuvo_Resume.pdf",
  intro:
    "Computer Science and Engineering graduate from Ahsanullah University of Science and Technology. I build full-stack apps with ASP.NET Core, React and Next.js, and I like solving problems the hard way first.",
  typing: [
    "I build REST APIs with ASP.NET Core",
    "I design full-stack web apps",
    "I solve problems in C++ and C#",
  ],
};

export const skillGroups = [
  { title: "Languages", items: ["C#", "C", "C++", "Java", "Python", "JavaScript", "TypeScript", "HTML", "OOP"] },
  {
    title: "Backend",
    items: [
      ".NET",
      "ASP.NET Core Web API",
      "RESTful APIs",
      "Entity Framework Core",
      "LINQ",
      "JWT Authentication",
      "Dependency Injection",
      "Middleware",
      "Async/Await",
    ],
  },
  { title: "Frontend", items: ["React.js", "Next.js", "Tailwind CSS", "CSS"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "EF Core Migrations"] },
  { title: "Integrations", items: ["Cloudinary API", "SMTP", "OTP verification"] },
  { title: "DevOps and Tools", items: ["Docker", "Git", "GitHub", "Postman"] },
  {
    title: "System Design",
    items: [
      "Scalability",
      "Load balancing",
      "Caching",
      "Replication and sharding",
      "CDN",
      "Consistent hashing",
      "Rate limiting",
      "Unique ID generation",
      "Message queues",
    ],
  },
];

// Skill name -> logo file in public/icons (skills without a logo show text only)
export const skillIcons: Record<string, string> = {
  "C#": "csharp",
  C: "c",
  "C++": "cplusplus",
  Java: "java",
  Python: "python",
  JavaScript: "javascript",
  TypeScript: "typescript",
  HTML: "html5",
  CSS: "css3",
  ".NET": "dotnetcore",
  "React.js": "react",
  "Next.js": "nextjs",
  "Tailwind CSS": "tailwindcss",
  PostgreSQL: "postgresql",
  MySQL: "mysql",
  Docker: "docker",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  links: { label: string; href: string }[];
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "TradeHub",
    subtitle: "Social-Commerce Platform",
    description:
      "Users create storefronts, organize products, promote them through social posts, and trade with other users. Buyers order with cash-on-delivery or prepaid payment, and sellers accept or reject incoming orders.",
    highlights: [
      "JWT authentication with rotating refresh tokens in httpOnly cookies",
      "Email verification with wrong-attempt limits and Cloudinary image uploads",
      "Personal stores, social timeline, news feed and notifications",
      "Order management with all, pending, accepted and rejected views",
    ],
    tags: ["ASP.NET Core", "EF Core", "PostgreSQL", "Next.js", "TypeScript", "Tailwind CSS", "Cloudinary"],
    links: [
      { label: "Frontend", href: "https://github.com/shuvo37/TradeHub" },
      { label: "Backend", href: "https://github.com/shuvo37/TradeHub_Backend" },
    ],
    gradient: "from-sky-500/50 via-indigo-500/30 to-transparent",
  },
  {
    title: "DriveX",
    subtitle: "Multi-Company Car Rental Platform",
    description:
      "Multiple rental companies manage and rent out vehicles on one platform. The rental timer starts when staff hand over the car, not when the user books it, so users pay only for the hours they use. Emails at start and return keep both sides accountable.",
    highlights: [
      "Role-based access (user, company staff, admin) with JWT and Google OAuth2",
      "Handover-based rental timer with automated emails and late-return fine",
      "Car filtering, active orders and booking history in the user profile",
      "Admin management of cars and companies",
    ],
    tags: ["React", "ASP.NET Core", "EF Core", "MySQL", "JWT", "Google OAuth2", "Cloudinary", "SMTP"],
    links: [
      { label: "Frontend", href: "https://github.com/shuvo37/DriveX_frontend" },
      { label: "Backend", href: "https://github.com/shuvo37/DriveX" },
    ],
    gradient: "from-cyan-500/50 via-sky-500/30 to-transparent",
  },
];

export const judges = [
  { label: "Codeforces (Pupil)", href: "https://codeforces.com/profile/shuvo37" },
  { label: "CodeChef (3-star)", href: "https://www.codechef.com/users/mehedi5237" },
  { label: "LightOJ", href: "https://lightoj.com/user/shuvo5237_" },
  { label: "LeetCode", href: "https://leetcode.com/u/Svo/" },
  { label: "Codeforces (practice ID)", href: "https://codeforces.com/profile/Shuvo." },
];

export const contests = [
  {
    label: "ICPC Asia Dhaka Regional Contest 2025",
    href: "https://drive.google.com/file/d/1Bojt1cWN1zQ7_RR08sLqFJ7NFRirgFXA/view",
  },
  {
    label: "MTB presents AUST Inter University Programming Contest 2025",
    href: "https://drive.google.com/file/d/1JkF88CKcBfkXFP6ZIH2hUWpJezgNpcmW/view",
  },
  {
    label: "BUBT Inter University Collaborative Programming Contest 2025",
    href: "https://drive.google.com/file/d/1SXXcDGMZekNSd0KaeHg5XXih0C-ILqUG/view",
  },
];

export const education = [
  { school: "Ahsanullah University of Science and Technology", detail: "Computer Science and Engineering, CGPA 2.831" },
  { school: "Sayed Afsar Ali Degree College", detail: "GPA 5.00" },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];
