export const projectCategories = ['backend', 'frontend', 'mobile'] as const

export type ProjectCategory = (typeof projectCategories)[number]

export type ProjectFilter = 'all' | ProjectCategory

export type Project = {
  id: string
  title: string
  description: string
  category: ProjectCategory
  stack: string[]
  github: string
  liveDemo?: string
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
      'Desktop CRM for tracking bills, bank balances, and spending. Built with WinForms, Entity Framework, and SQL Server for day-to-day financial operations.',
    category: 'backend',
    stack: ['C#', '.NET', 'WinForms', 'Entity Framework', 'SQL Server'],
    github: '#',
  },
  {
    id: 'novastore',
    title: 'NovaStore SQL Database',
    description:
      'E-commerce data model covering products, customers, orders, and order details. Includes relational design, sample data, and query work in SQL Server.',
    category: 'backend',
    stack: ['SQL Server', 'T-SQL', 'Relational Design'],
    github: '#',
  },
  {
    id: 'mvc-catalog',
    title: 'ASP.NET Core MVC Catalog',
    description:
      'MVC web app for listing and managing catalog records with server-rendered views, form validation, and SQL-backed CRUD through Entity Framework.',
    category: 'backend',
    stack: ['C#', 'ASP.NET Core MVC', 'Entity Framework', 'SQL Server'],
    github: '#',
  },
  {
    id: 'react-todo',
    title: 'React CRUD Task Manager',
    description:
      'Internship frontend project: create, edit, complete, filter, and delete tasks. Data persists in LocalStorage. Built with React and Tailwind CSS and prepared for Netlify.',
    category: 'frontend',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    github: '#',
    liveDemo: 'https://your-app-name.netlify.app',
  },
  {
    id: 'coffee-hawai',
    title: 'Coffee Hawai Catalog',
    description:
      'Flutter catalog app with a Hawaii-inspired coffee menu. Products load from local JSON and are presented in a clean mobile layout.',
    category: 'mobile',
    stack: ['Flutter', 'Dart', 'JSON'],
    github: '#',
  },
]
