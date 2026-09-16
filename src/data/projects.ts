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
  image: string
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
      'Desktop CRM for tracking bills, bank balances, and spending with Entity Framework and SQL Server.',
    category: 'backend',
    stack: ['C#', '.NET', 'WinForms', 'Entity Framework', 'SQL Server'],
    image: '/projects/financial-crm.png',
  },
  {
    id: 'bank-finance-mvc',
    title: 'Bank Finance Management',
    description:
      'ASP.NET MVC app for bank and finance operations: accounts, transactions, and admin views backed by SQL.',
    category: 'backend',
    stack: ['C#', 'ASP.NET Core MVC', 'SQL Server', 'Entity Framework'],
    github: 'https://github.com/rdmrcn/BANK-FINANCE-MANAGMENT-with-MVC-Proj',
    image: '/projects/bank-finance.png',
  },
  {
    id: 'novastore',
    title: 'NovaStore SQL Database',
    description:
      'E-commerce data model for products, customers, and orders, with relational design and reporting queries.',
    category: 'backend',
    stack: ['SQL Server', 'T-SQL', 'Relational Design'],
    github: 'https://github.com/rdmrcn/novastore-sql-database-project',
    image: '/projects/novastore.png',
  },
  {
    id: 'taskflow',
    title: 'Taskflow Daily',
    description:
      'Internship React CRUD app: add, edit, complete, and filter tasks. Data stays in LocalStorage.',
    category: 'frontend',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'LocalStorage'],
    github: 'https://github.com/rdmrcn/taskflow-daily-application',
    image: '/projects/taskflow.png',
  },
  {
    id: 'coffee-hawai',
    title: 'Coffee Hawai Catalog',
    description:
      'Flutter mini catalog of Hawaii-inspired coffee drinks, built to run as a mobile-style web app.',
    category: 'mobile',
    stack: ['Flutter', 'Dart', 'JSON'],
    github: 'https://github.com/rdmrcn/coffee-hawai-web',
    image: '/projects/coffee-hawai.png',
  },
]
