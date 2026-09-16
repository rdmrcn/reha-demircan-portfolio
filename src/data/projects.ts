export const projectCategories = ['backend', 'frontend', 'mobile'] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type ProjectFilter = 'all' | ProjectCategory

export type Project = {
  id: string
  title: string
  description: string
  category: ProjectCategory
  stack: string[]
  github?: string
  liveDemo?: string
  images: string[]
}

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend & SQL' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'mobile', label: 'Mobile' },
]

export const projects: Project[] = [
  {
    id: 'financial-crm',
    title: 'Financial CRM',
    description:
      'Desktop CRM for bills, bank balances, and spending with dashboards and SQL-backed records.',
    category: 'backend',
    stack: ['C#', '.NET', 'WinForms', 'Entity Framework', 'SQL Server'],
    github: 'https://github.com/rdmrcn/BANK-FINANCE-MANAGMENT-with-MVC-Proj',
    images: [
      '/projects/financial-crm.png',
      '/projects/financial-crm-menu.png',
      '/projects/financial-crm-login.png',
      '/projects/financial-crm-copyright.png',
    ],
  },
  {
    id: 'motor-legends',
    title: 'Legendary Gears',
    description:
      'Motorcycle catalog web app with auth, catalog browsing, and a dark branded storefront.',
    category: 'frontend',
    stack: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/rdmrcn/Legendary-Gears---Web-Motorcycle-Shop',
    images: ['/projects/motor-legends-catalog.png', '/projects/motor-legends.png'],
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description:
      'Internship React CRUD task manager with filters, progress, and LocalStorage persistence.',
    category: 'frontend',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    github: 'https://github.com/rdmrcn/taskflow-daily-application',
    images: ['/projects/taskflow.png'],
  },
  {
    id: 'coffee-hawai',
    title: 'Coffee Hawai',
    description:
      'Flutter coffee catalog with menu, cart, and order flow in a mobile-first layout.',
    category: 'mobile',
    stack: ['Flutter', 'Dart', 'JSON'],
    github: 'https://github.com/rdmrcn/coffee-hawai-web',
    images: [
      '/projects/coffee-hawai.png',
      '/projects/coffee-hawai-menu.png',
      '/projects/coffee-hawai-menu-2.png',
      '/projects/coffee-hawai-cart.png',
    ],
  },
  {
    id: 'novastore',
    title: 'NovaStore SQL',
    description:
      'E-commerce SQL Server project with sales reporting, category analysis, and query-driven dashboards.',
    category: 'backend',
    stack: ['SQL Server', 'T-SQL', 'Excel'],
    github: 'https://github.com/rdmrcn/novastore-sql-database-project',
    images: ['/projects/novastore.jpg'],
  },
  {
    id: 'weather',
    title: 'Simple Weather App',
    description: 'Lightweight weather client that fetches and displays current conditions.',
    category: 'frontend',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/rdmrcn/Simple-Weather-App-',
    images: ['/projects/weather.png'],
  },
  {
    id: 'flask-website',
    title: 'Flask Website',
    description:
      'Beginner Flask site with routing, templates, and static files for learning web backends.',
    category: 'backend',
    stack: ['Python', 'Flask', 'HTML', 'CSS'],
    github: 'https://github.com/rdmrcn/Flask-Website-Tutorial-Beginner-Level-',
    images: ['/projects/flask-website.jpg'],
  },
  {
    id: 'match-blast',
    title: 'Match Blast',
    description: 'Mobile match-style puzzle game built in Unity.',
    category: 'mobile',
    stack: ['Unity', 'C#', 'Mobile'],
    github: 'https://github.com/rdmrcn/Match-Game-Unity-Project',
    images: ['/projects/match-blast.png'],
  },
]
