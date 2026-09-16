import { Mail } from 'lucide-react'
import { site } from '../data/site'
import { GitHubIcon, LinkedInIcon } from './icons'

type SocialLinksProps = {
  size?: number
  className?: string
}

const links = [
  { href: site.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
  { href: site.github, label: 'GitHub', Icon: GitHubIcon },
  { href: `mailto:${site.email}`, label: 'Email', Icon: Mail },
] as const

export function SocialLinks({ size = 18, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
          aria-label={label}
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
        >
          <Icon size={size} strokeWidth={1.7} />
        </a>
      ))}
    </div>
  )
}
