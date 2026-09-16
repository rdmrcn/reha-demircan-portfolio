export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    items: ['C#', '.NET', 'ASP.NET Core MVC', 'SQL Server', 'Entity Framework'],
  },
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    items: ['Flutter'],
  },
  {
    title: 'Other',
    items: ['MongoDB', 'Git / GitHub'],
  },
]
