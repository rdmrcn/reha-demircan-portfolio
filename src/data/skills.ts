export type SkillGroup = {
  title: string
  summary: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    summary:
      'Building APIs, MVC apps, and SQL-backed services with C# and .NET.',
    items: [
      'C#',
      '.NET',
      'ASP.NET Core MVC',
      'REST API',
      'ASP.NET Web API',
      'SQL Server',
      'Entity Framework',
      'LINQ',
      'JSON',
    ],
  },
  {
    title: 'Frontend',
    summary: 'Interfaces with React, TypeScript, and modern CSS tooling.',
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Vite',
      'Responsive UI',
    ],
  },
  {
    title: 'Mobile',
    summary: 'Cross-platform and native mobile work for catalogs and games.',
    items: ['Flutter', 'Dart', 'Swift', 'Unity'],
  },
  {
    title: 'Other',
    summary: 'Version control, extra databases, and day-to-day developer tools.',
    items: ['MongoDB', 'Git / GitHub', 'Visual Studio', 'VS Code'],
  },
]
