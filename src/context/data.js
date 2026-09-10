//Store House
const greetings = [
  "• Bonjour",
  "• ようこそ",
  "• Willkommen",
  "• Benvenuto",
  "• أهلاً وسهلاً",
  "• Welcome",
  "• 환영합니다",
  "• Hola",
  "• مرحباً",
  "• 欢迎",
  "• Bienvenido",
  "• आपका स्वागत है",
];
 const data = [
   {
       name:'Home',
       link:'/'
   },
   {
       name:'Works',
       link:'/works',
   },
   {
       name:'About',
       link:'/about',
   },
   {
       name:'Contact',
       link:'/contact'
   }
]

const socials = [
  {
    name:'Github',
    link:"https://github.com/Dhruv-rathod01"
  },
  {
    name:'Linkdin',
    link:'https://www.linkedin.com/in/dhruv-rathod-0a1b4b1b9/'
  },
  {
    name:"Instagram",
    link:'https://www.instagram.com/itz_dhruvrathod_/',
  },
  {
    name:'Youtube',
    link:'https://www.youtube.com/@Rathod_Dhruv'
  },
]
const expertise = [
  {
    title: "Java Development",
    content:
      "I build reliable applications using Java with a strong focus on object-oriented programming, clean code, and efficient problem-solving.",
  },
  {
    title: "Data Structures & Algorithms",
    content:
      "I continuously strengthen my problem-solving skills by solving DSA problems in Java and developing efficient solutions for complex programming challenges.",
  },
  {
    title: "Full-Stack Web Development",
    content:
      "I build responsive and database-driven web applications using HTML, CSS, JavaScript, Java, JSP, Servlets, REST APIs, and MySQL, focusing on clean functionality and user-friendly experiences.",
  },
  {
    title: "Database Management",
    content:
      "I work with MySQL to design and manage databases, integrate applications with data, and develop reliable database-driven systems.",
  },
  {
    title: "Software Development",
    content:
      "I enjoy solving real-world problems through software development, combining programming, web technologies, and problem-solving skills to build practical applications.",
  },
  {
    title: "Problem Solving",
    content:
      "I have solved 500+ DSA problems across coding platforms, continuously improving my algorithmic thinking and ability to develop efficient solutions.",
  },
];

export default expertise;


  const latest = [
   {
    id:1,
    Title: "AI Powered Image Search Engine ",
    img: "/images/gf.jpg",
    video: "/videos/image search engine.mp4",
    imges: [
      { img: "/images/imagesearch1.png",},
      { img: "/images/imagesearch1.png",},
      { img: "/images/imagesearch2.png",}
    ],
    stack: ['Java', 'JSP', 'Servlet', 'HTML', 'CSS', 'JS', 'Apache Tomcat'],
    link:null,
    status: "Not active",
    github: "https://github.com/Dhruv-rathod01/AI-Image-SearchEngine",
    para:
      " A dynamic image search engine using JSP and Servlets with live image fetching through external APIs.",
    content:
      "AI Powered Image Search Engine is a dynamic web-based image search platform designed to help users discover relevant images quickly and efficiently through real-time API integration. I developed the application using Java, JSP, Servlets, HTML, CSS, and JavaScript, implementing live image fetching through external APIs to provide users with up-to-date search results. The system follows a structured request-response architecture using Servlets for backend processing and JSP for dynamic content rendering, while JavaScript enhances the user experience with interactive and real-time search functionality. I designed a modern, responsive interface that adapts seamlessly across different screen sizes, ensuring a smooth experience on both desktop and mobile devices. The application was deployed and tested on Apache Tomcat, strengthening my understanding of Java web application deployment and server-side development. This project helped me improve my skills in API integration, backend request handling, dynamic web content generation, and responsive UI design. More importantly, it allowed me to understand how external data sources can be efficiently integrated into web applications to deliver fast and practical solutions. The impact of the project lies in making image discovery faster and more convenient by providing users with an intuitive platform for searching and accessing images in real time.",
    Date:'2026'
  },
  {
    id:2,
    Title: "Easymart",
    img: "/images/Easymart.png",
    Date:'2026',
    video: "/videos/EasyMart.mp4",
    imges: [
      { img: "/images/EasyMart1.png",},
      { img: "/images/EasyMart2.png",},
      { img: "/images/EasyMart2.png",},
      { img: "/images/EasyMart3.png",},
      { img: "/images/EasyMart5.png",},
      { img: "/images/EasyMart6.png",},
      { img: "/images/EasyMart7.png",},
      { img: "/images/EasyMart8.png",},
      { img: "/images/EasyMart9.png",},
      { img: "/images/EasyMart1.png",},
      { img: "/images/EasyMart6.png",},
      { img: "/images/EasyMart4.png",},
    ],
    stack: ['html','css','javascript','git','vercel'],
    link: "https://easy-mart-online-store.vercel.app/",
    status: "Live",
    github: "https://github.com/Dhruv-rathod01/EasyMart-Online-Store",
    para:
      "A premium e-commerce experience crafted to make everyday shopping feel effortless, elegant, and exceptional.",
    content:
      "EasyMart is a modern e-commerce platform designed to deliver a smooth, convenient, and engaging online shopping experience. The platform features intuitive product discovery, category-based browsing, search functionality, product details, cart management, user authentication, and order management, creating a seamless shopping journey from product discovery to checkout. I focused on building a clean, responsive, and user-friendly interface that adapts seamlessly across desktop and mobile devices while keeping navigation simple and intuitive. The application uses persistent data handling for cart and order information, allowing users to maintain their shopping activity and easily track their purchases. Building EasyMart gave me practical experience in developing real-world e-commerce functionality, managing user interactions, structuring application flows, and creating interfaces centered around usability and convenience. I also learned how to improve the overall UI/UX by organizing product information, simplifying navigation, and creating consistent interactions throughout the platform. The impact of EasyMart lies in how it combines essential e-commerce functionality with a polished and approachable design, showcasing my ability to create complete digital experiences that prioritize simplicity, accessibility, customer engagement, and a seamless shopping experience",
  },
 {
    id:4,
    Title: "VoteX",
    img: "/images/Votex1.png",
    Date:'2026',
    video: "/videos/VoteX.mp4",
    imges: [{img:"/images/VoteX4.png"},{img:"/images/VoteX2.png"},{img:"/images/VoteX3.png"},{img:"/images/VoteX6.png"},{img:"/images/VoteX5.png"},{img:"/images/VoteX7.png"},],
    stack: ['Html','tailwind css','Javascript','Rest Api','FireBase','git','vercel'],
    link: "https://online-voting-system-liard-theta.vercel.app/",
    status: "Live",
    github: "https://github.com/Dhruv-rathod01/VoteX",
    para:
      "A secure online voting platform with digital vote submission, duplicate-vote prevention, and real-time Firebase data management.",
    content:
      "VoteX is a modern and interactive online voting platform designed with a clean, accessible UI/UX and powered by Firebase as its backend for reliable data management. The platform allows users to securely enter their details, select their preferred party, and submit their vote through a simple and responsive interface. To provide a smooth voting experience, I implemented client-side validation, mobile number verification, duplicate-vote detection, and dynamic feedback for successful or failed submissions. The platform is fully responsive and optimized for efficient data processing, reliable database operations, and accessibility across devices. While building VoteX, I gained hands-on experience with Firebase integration, Firestore database operations, asynchronous JavaScript, and backend data management. I also learned how to configure Firebase security rules and handle user input validation to maintain data integrity. The impact of VoteX lies in making digital voting simple, accessible, and efficient for college elections, organizational polls, and small-scale community voting. This project demonstrates my ability to build practical web applications while combining backend functionality, reliable data management, and an engaging user-friendly interface.",
  },
  
    {
    id:3,
    Title: "KrashiMitra",
    img: "/images/KrashiMitra.jpeg",
    Date:'2026',
    video: "/videos/KrashiMitra.mp4",
    imges: [{img:"/images/KrashiMitra5.png"},
      {img:"/images/KrashiMitra1.png"},
      {img:"/images/KrashiMitra2.png"},
      {img:"/images/KrashiMitra3.png"},
      {img:"/images/KrashiMitra4.png"},
      {img:"/images/KrashiMitra.jpeg  "},
      {img:"/images/KrashiMitra2.png"},
    ],
    stack: ['Html','tailwind css',' Javascript','git','vercel'],
    link: "https://krashi-m-itra.vercel.app/",
    status: "Live",
    github: "https://github.com/Dhruv-rathod01/KrashiMItra",
    para:
      "A modern agriculture assistance platform featuring interactive JavaScript animations, responsive design, and real-time crop, weather, scheme, and pest-control insights.",
    content:
      "Krishi Mitra is a fully responsive agriculture assistance platform developed to make essential farming information easily accessible to farmers. The platform provides crop advisory, real-time weather insights, government scheme updates, and pest control guidance through a clean and intuitive interface. Built using HTML, CSS, and JavaScript, I focused on creating a user-friendly experience with responsive layouts that work seamlessly across desktops, tablets, and mobile devices. The project emphasizes easy navigation and clear presentation of important agricultural information, helping farmers access useful resources and make better farming decisions. Developing Krishi Mitra strengthened my skills in frontend development, responsive design, JavaScript interactions, and user-centered problem solving while allowing me to build a practical solution with real-world impact.",
  },
 
];

const stacks = [
  {
    id:0,
    name:'Html',
    img:'/images/html.svg',
    col:'#FE6D00'
  },
  {
    id:1,
    name:'Css',
    img:'/images/css.svg',
    col:''
  },
  {
    id:2,
    name:'Js',
    img:'images/js.svg',
    col:''
  },
  {
    id:3,
    name:'tailwindcss',
    img:'images/tailwind.svg',
    col:''
  },
  { id: 4, name: "Express", img: "images/express-js.png",
    col:''
   },
  {
    id:5,
    name:'Node',
    img:'/images/node.png',
    col:'#78CB65'
  },
    {
    id:1,
    name:'Css',
    img:'/images/css.svg',
    col:''
  },
  { id: 7, name: "Mongoose", img: "images/MongoDB.svg",
    col:''
   },
  { id: 8, name: "Java", img: "images/java.svg",
    col:''
   },
  { id: 9, name: "Python", img: "images/Python.svg" ,
    col:''
  },
  {
    id:6,
    name:'React',
    img:'images/react.png',
    col:'#78CB65'
  },
  { id: 11, name: "GSAP", img: "images/gsap.svg",
    col:''
   },
  { id: 12, name: "Git", img: "images/git.svg",
    col:''
   },
   {
    id:13,
    name:'Html',
    img:'/images/html.svg',
    col:'#FE6D00'
  },
  {
    id:14,
    name:'Css',
    img:'/images/css.svg',
    col:''
  },
  {
    id:15,
    name:'Js',
    img:'images/js.svg',
    col:''
  },
  {
    id:16,
    name:'tailwindcss',
    img:'images/tailwind.svg',
    col:''
  },
  { id: 17, name: "Express", img: "images/express-js.png",
    col:''
   },
  {
    id:18,
    name:'Node',
    img:'/images/node.png',
    col:'#78CB65'
  },
    {
    id:19,
    name:'React',
    img:'images/react.png',
    col:'#78CB65'
  },
  { id: 20, name: "Mongoose", img: "images/MongoDB.svg",
    col:''
   },
  { id: 21, name: "Java", img: "images/java.svg",
    col:''
   },
  { id: 22, name: "Python", img: "images/Python.svg" ,
    col:''
  },
  { id: 23, name: "C", img: "images/C2.svg",
    col:''
   },
  { id: 24, name: "GSAP", img: "images/gsap.svg",
    col:''
   },
  { id: 25, name: "Git", img: "images/git.svg",
    col:''
   },
  { id: 26, name: "Java", img: "images/java.svg",
  }

];


const allProjects = [
  {
    id:1,
    Title: "AI Powered Image Search Engine ",
    img: "/images/gf.jpg",
    video: "/videos/image search engine.mp4",
    imges: [
      { img: "/images/imagesearch1.png",},
      { img: "/images/imagesearch1.png",},
      { img: "/images/imagesearch2.png",}
    ],
    stack: ['Java', 'JSP', 'Servlet', 'HTML', 'CSS', 'JS', 'Apache Tomcat'],
    link:null,
    status: "Not active",
    github: "https://github.com/Dhruv-rathod01/AI-Image-SearchEngine",
    para:
      " A dynamic image search engine using JSP and Servlets with live image fetching through external APIs.",
    content:
      "AI Powered Image Search Engine is a dynamic web-based image search platform designed to help users discover relevant images quickly and efficiently through real-time API integration. I developed the application using Java, JSP, Servlets, HTML, CSS, and JavaScript, implementing live image fetching through external APIs to provide users with up-to-date search results. The system follows a structured request-response architecture using Servlets for backend processing and JSP for dynamic content rendering, while JavaScript enhances the user experience with interactive and real-time search functionality. I designed a modern, responsive interface that adapts seamlessly across different screen sizes, ensuring a smooth experience on both desktop and mobile devices. The application was deployed and tested on Apache Tomcat, strengthening my understanding of Java web application deployment and server-side development. This project helped me improve my skills in API integration, backend request handling, dynamic web content generation, and responsive UI design. More importantly, it allowed me to understand how external data sources can be efficiently integrated into web applications to deliver fast and practical solutions. The impact of the project lies in making image discovery faster and more convenient by providing users with an intuitive platform for searching and accessing images in real time.",
    Date:'2026'
  },
  {
    id:2,
    Title: "Easymart",
    img: "/images/Easymart.png",
    Date:'2026',
    video: "/videos/EasyMart.mp4",
    imges: [
      { img: "/images/EasyMart1.png",},
      { img: "/images/EasyMart2.png",},
      { img: "/images/EasyMart2.png",},
      { img: "/images/EasyMart3.png",},
      { img: "/images/EasyMart5.png",},
      { img: "/images/EasyMart6.png",},
      { img: "/images/EasyMart7.png",},
      { img: "/images/EasyMart8.png",},
      { img: "/images/EasyMart9.png",},
      { img: "/images/EasyMart1.png",},
      { img: "/images/EasyMart6.png",},
      { img: "/images/EasyMart4.png",},
    ],
    stack: ['html','css','javascript','git','vercel'],
    link: "https://easy-mart-online-store.vercel.app/",
    status: "Live",
    github: "https://github.com/Dhruv-rathod01/EasyMart-Online-Store",
    para:
      "A premium e-commerce experience crafted to make everyday shopping feel effortless, elegant, and exceptional.",
    content:
      "EasyMart is a modern e-commerce platform designed to deliver a smooth, convenient, and engaging online shopping experience. The platform features intuitive product discovery, category-based browsing, search functionality, product details, cart management, user authentication, and order management, creating a seamless shopping journey from product discovery to checkout. I focused on building a clean, responsive, and user-friendly interface that adapts seamlessly across desktop and mobile devices while keeping navigation simple and intuitive. The application uses persistent data handling for cart and order information, allowing users to maintain their shopping activity and easily track their purchases. Building EasyMart gave me practical experience in developing real-world e-commerce functionality, managing user interactions, structuring application flows, and creating interfaces centered around usability and convenience. I also learned how to improve the overall UI/UX by organizing product information, simplifying navigation, and creating consistent interactions throughout the platform. The impact of EasyMart lies in how it combines essential e-commerce functionality with a polished and approachable design, showcasing my ability to create complete digital experiences that prioritize simplicity, accessibility, customer engagement, and a seamless shopping experience",
  },
  {
    id:3,
    Title: "KrashiMitra",
    img: "/images/KrashiMitra.jpeg",
    Date:'2026',
    video: "/videos/KrashiMitra.mp4",
    imges: [{img:"/images/KrashiMitra5.png"},
      {img:"/images/KrashiMitra1.png"},
      {img:"/images/KrashiMitra2.png"},
      {img:"/images/KrashiMitra3.png"},
      {img:"/images/KrashiMitra4.png"},
      {img:"/images/KrashiMitra.jpeg  "},
      {img:"/images/KrashiMitra2.png"},
    ],
    stack: ['Html','tailwind css',' Javascript','git','vercel'],
    link: "https://krashi-m-itra.vercel.app/",
    status: "Live",
    github: "https://github.com/Dhruv-rathod01/KrashiMItra",
    para:
      "A modern agriculture assistance platform featuring interactive JavaScript animations, responsive design, and real-time crop, weather, scheme, and pest-control insights.",
    content:
      "Krishi Mitra is a fully responsive agriculture assistance platform developed to make essential farming information easily accessible to farmers. The platform provides crop advisory, real-time weather insights, government scheme updates, and pest control guidance through a clean and intuitive interface. Built using HTML, CSS, and JavaScript, I focused on creating a user-friendly experience with responsive layouts that work seamlessly across desktops, tablets, and mobile devices. The project emphasizes easy navigation and clear presentation of important agricultural information, helping farmers access useful resources and make better farming decisions. Developing Krishi Mitra strengthened my skills in frontend development, responsive design, JavaScript interactions, and user-centered problem solving while allowing me to build a practical solution with real-world impact.",
  },
  {
    id:4,
    Title: "VoteX",
    img: "/images/Votex1.png",
    Date:'2026',
    video: "/videos/VoteX.mp4",
    imges: [{img:"/images/VoteX4.png"},{img:"/images/VoteX2.png"},{img:"/images/VoteX3.png"},{img:"/images/VoteX6.png"},{img:"/images/VoteX5.png"},{img:"/images/VoteX7.png"},],
    stack: ['Html','tailwind css','Javascript','Rest Api','FireBase','git','vercel'],
    link: "https://online-voting-system-liard-theta.vercel.app/",
    status: "Live",
    github: "https://github.com/Dhruv-rathod01/VoteX",
    para:
      "A secure online voting platform with digital vote submission, duplicate-vote prevention, and real-time Firebase data management.",
    content:
      "VoteX is a modern and interactive online voting platform designed with a clean, accessible UI/UX and powered by Firebase as its backend for reliable data management. The platform allows users to securely enter their details, select their preferred party, and submit their vote through a simple and responsive interface. To provide a smooth voting experience, I implemented client-side validation, mobile number verification, duplicate-vote detection, and dynamic feedback for successful or failed submissions. The platform is fully responsive and optimized for efficient data processing, reliable database operations, and accessibility across devices. While building VoteX, I gained hands-on experience with Firebase integration, Firestore database operations, asynchronous JavaScript, and backend data management. I also learned how to configure Firebase security rules and handle user input validation to maintain data integrity. The impact of VoteX lies in making digital voting simple, accessible, and efficient for college elections, organizational polls, and small-scale community voting. This project demonstrates my ability to build practical web applications while combining backend functionality, reliable data management, and an engaging user-friendly interface.",
  },
  

];

const works = [
  {
    id: '1-0',
    video: '/videos/image search engine.mp4',
    previewImg: '/images/gf.jpg',
    name: 'AI Powered Image Search Engine',
    routes: 1,
  },

  {
    id: '1-1',
    video: '/videos/EasyMart.mp4',
    previewImg: '/images/Easymart.png',
    name: 'Easymart',
    routes: 2,
  },

  {
    id: '1-2',
    video: '/videos/KrashiMitra.mp4',
    previewImg: '/images/KrashiMitra.jpeg',
    name: 'Krashi Mitra',
    routes: 3,
  },

  {
    id: '2-0',
    video: '/videos/VoteX.mp4',
    previewImg: '/images/Votex1.png',
    name: 'VoteX',
    routes: 4,
  },
];


const MyImages = [
  '/images/my1.jpg',
  '/images/my2.jpg',
  '/images/my1.jpg',
  '/images/my2.jpg',
  '/images/my1.jpg',
  '/images/my2.jpg',
]

export {greetings,data,socials,expertise,latest,stacks,allProjects,works,MyImages};