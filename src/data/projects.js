 
  const projects = [
    {
      id: 1,
      title: 'Lab 1: HTML & CSS Fundamentals',
      description: 'A comprehensive introduction to web development fundamentals covering HTML structure, CSS styling, selectors, and responsive design. Includes Palestine information card, Gaza documentation page, and CSS styling exercises with various selector types.',
      tech: ['HTML5', 'CSS3', 'Web Design', 'DOM Manipulation'],
      github: 'https://github.com/abdelhakimbkz/caw-labs/tree/Lab7/Lab1',
      demo: null,
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Lab 2: Git & GitHub Version Control',
      description: 'Introduction to Version Control Systems using Git and GitHub. Learn repository initialization, commits, branching, staging, and pushing code to remote repositories. Covers essential Git commands and workflows for collaborative development.',
      tech: ['Git', 'GitHub', 'Version Control', 'Command Line', 'Branching'],
      github: 'https://github.com/abdelhakimbkz/caw-labs/tree/lab2-setup/Lab2',
      demo: null,
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Lab 3: Node.js & NPM Fundamentals',
      description: 'Introduction to server-side JavaScript with Node.js and NPM. Learn file system operations, module imports/exports, command-line arguments, and package management. Build CLI applications that read/write files and work with external packages.',
      tech: ['Node.js', 'JavaScript', 'NPM', 'File System', 'CLI'],
      github: 'https://github.com/abdelhakimbkz/caw-labs/tree/Lab7/Lab3',
      demo: null,
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Lab 4: Unit Testing with Jest',
      description: 'Introduction to automated testing with Jest framework. Learn to write comprehensive test cases, understand test-driven development, and ensure code quality. Covers array manipulation functions, module testing, and Jest assertions with mock implementations.',
      tech: ['JavaScript', 'Jest', 'Unit Testing', 'TDD', 'NPM'],
      github: 'https://github.com/abdelhakimbkz/caw-labs/tree/Lab7/Lab4_Jest',
      demo: null,
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Lab 5: React Components & State Management',
      description: 'Introduction to React functional components, hooks, and state management. Build interactive components including toggle buttons, counters, dynamic lists with click-to-remove functionality, authentication forms with user management, and a dynamic div creator with custom styling.',
      tech: ['React', 'JavaScript', 'Hooks', 'useState', 'Component Props'],
      github: 'https://github.com/abdelhakimbkz/caw-labs/tree/Lab7/Lab5',
      demo: null,
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Lab 6: Vite & React Components',
      description: 'Professional React development environment setup using Vite build tool. Learn ES Modules, component architecture, import/export syntax, props usage, and component reusability. Build profile cards with dynamic data and understand modern frontend tooling conventions.',
      tech: ['React', 'Vite', 'ES Modules', 'JSX', 'Component Props'],
      github: null,
      demo: null,
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop'
    },
    {
      id: 7,
      title: 'Lab 7: Kanban Board (Trello Clone)',
      description: 'Full-featured Kanban board application for task management with drag-and-drop functionality, multiple columns (To Do, In Progress, Done), dynamic task creation, label system, checklist support, and column customization. Implements complex state management and modern React patterns.',
      tech: ['React', 'Vite', 'CSS3', 'UUID', 'State Management'],
      github: 'https://github.com/abdelhakimbkz/caw-labs/tree/Lab7/Lab7',
      demo: 'https://kanbann-board.netlify.app',
      category: 'frontend',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop'
    },
    {
      id: 8,
      title: ' MedScan - AI Medical Imaging Platform',
      description: 'Full-stack medical laboratory web application with AI-powered pneumonia detection from chest X-rays using CNN deep learning. Features secure patient authentication (JWT), appointment booking with Stripe payment, scan upload/analysis, doctor-patient consultations, premium membership system, and comprehensive admin dashboard with real-time statistics.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'TensorFlow', 'CNN', 'JWT', 'Stripe'],
      github: 'https://github.com/abdelhakimbkz/laboratoire-m-dical',
      demo: null,
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop'
    },
    {
      id: 9,
      title: 'DAW Project - Web Application Development',
      description: 'A comprehensive web development project showcasing modern web application architecture and full-stack development skills. Built with contemporary technologies and best practices for scalable, maintainable code.',
      tech: ['React', 'JavaScript', 'Web Development', 'Full Stack'],
      github: 'https://github.com/77bib/projet_daw',
      demo: null,
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop'
    },
    {
      id: 10,
      title: 'Local Algerian Restaurants - Flutter Mobile App',
      description: 'Cross-platform mobile application for discovering local Algerian restaurants across different regions (Algiers, Oran, Constantine, Annaba). Features region-based browsing, category filtering (Pizza, Restaurants, Desserts, Cafeteria), restaurant search, detailed restaurant profiles with images and contact information, admin panel for management, and user authentication system.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Mobile Development', 'SharedPreferences'],
      github: null,
      demo: null,
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop'
    }
  ];

export default projects;