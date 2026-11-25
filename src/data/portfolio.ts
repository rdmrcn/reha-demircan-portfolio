import type { LocalizedText } from '../lib/locale-context'

export type ProjectCategory = 'frontend' | 'fullstack' | 'mobile'
export type ProjectFilter = 'all' | ProjectCategory

export type ProjectScreenshot = {
  src: string
  label: LocalizedText
  alt: LocalizedText
}

export type FlagshipCaseStudy = {
  id: string
  index: string
  year: string
  category: ProjectCategory
  domainLabel: LocalizedText
  title: string
  subtitle: LocalizedText
  role: LocalizedText
  summary: LocalizedText
  liveDemo: string
  github: string
  stack: string[]
  metrics: {
    value: string
    label: LocalizedText
  }[]
  highlights: LocalizedText[]
  views: ProjectScreenshot[]
  caseStudy: {
    problem: LocalizedText
    architecture: LocalizedText[]
    tradeoffs: LocalizedText[]
    verification: LocalizedText[]
  }
}

export type ProjectItem = {
  id: string
  title: string
  year: string
  category: ProjectCategory
  presentation: 'browser' | 'mobile' | 'desktop' | 'architecture'
  tagline: LocalizedText
  description: LocalizedText
  architectureNote: LocalizedText
  stack: string[]
  github: string
  liveDemo?: string
  images: ProjectScreenshot[]
}

export type ExperienceEntry = {
  id: string
  organization: string
  role: LocalizedText
  period: LocalizedText
  duration: LocalizedText
  location: LocalizedText
  summary: LocalizedText
  highlights: LocalizedText[]
  stack: string[]
}

export type CapabilityGroup = {
  id: string
  index: string
  title: LocalizedText
  summary: LocalizedText
  items: string[]
}

export const site = {
  name: 'Reha Demircan',
  email: 'rdemircan2006@gmail.com',
  github: 'https://github.com/rdmrcn',
  linkedin: 'https://www.linkedin.com/in/reha-demircan-9656961b9/',
  cvPath: '/Reha-Demircan-CV.pdf',
  portraitPath: '/reha-demircan.jpg',
  location: {
    en: 'Istanbul, Türkiye (UTC+3)',
    tr: 'İstanbul, Türkiye (UTC+3)',
  },
  availability: {
    en: 'Open to Software, Frontend & Mobile roles · TR / International Remote',
    tr: 'Yazılım, Frontend ve Mobil pozisyonlara açık · TR / Yurt Dışı Uzaktan',
  },
  heroTitleStart: {
    en: 'Software engineer building',
    tr: 'Üretim kalitesinde web ve mobil ürünler geliştiren',
  },
  heroTitleEmphasis: {
    en: 'production-minded',
    tr: 'yazılım mühendisi.',
  },
  heroTitleEnd: {
    en: 'web & mobile products.',
    tr: '',
  },
  heroSummary: {
    en: 'Final-year Software Engineering student at Istinye University with industry internships spanning React/TypeScript product UI (Software Persona) and C#/.NET SQL backend systems (TNC Group). I design and ship tested Next.js web applications, mobile flows, and relational backends.',
    tr: 'İstinye Üniversitesi Yazılım Mühendisliği son sınıf öğrencisiyim. Software Persona’da React/TypeScript ürün arayüzleri, TNC Group bünyesinde C#/.NET ve SQL Server bilgi sistemleri üzerine staj deneyimine sahibim. Test edilmiş Next.js web uygulamaları, mobil akışlar ve ilişkisel backend sistemleri geliştiriyorum.',
  },
  portraitCaption: {
    en: 'B.Sc. Software Engineering ’27',
    tr: 'Yazılım Mühendisliği Lisans ’27',
  },
  proofAnchors: [
    {
      label: { en: 'Flagship Live Products', tr: 'Öne Çıkan Canlı Projeler' },
      value: { en: 'FORGE Supplements · Bosfor Hotels', tr: 'FORGE Supplements · Bosfor Hotels' },
    },
    {
      label: { en: 'Industry Experience', tr: 'Sektör Deneyimi' },
      value: { en: 'Software Persona · TNC Group', tr: 'Software Persona · TNC Group' },
    },
    {
      label: { en: 'Primary Tracks', tr: 'Odak Alanları' },
      value: { en: 'Frontend · Full-Stack · Mobile', tr: 'Frontend · Full-Stack · Mobil' },
    },
    {
      label: { en: 'Working Languages', tr: 'Çalışma Dilleri' },
      value: { en: 'EN · RU · TR · DE', tr: 'EN · RU · TR · DE' },
    },
  ],
} as const

export const uiCopy = {
  skipToContent: { en: 'Skip to content', tr: 'İçeriğe geç' },
  nav: {
    work: { en: 'Case Studies', tr: 'Projeler' },
    projects: { en: 'Archive', tr: 'Arşiv' },
    experience: { en: 'Experience', tr: 'Deneyim' },
    stack: { en: 'Capabilities', tr: 'Yetkinlikler' },
    contact: { en: 'Contact', tr: 'İletişim' },
    cv: { en: 'Resume', tr: 'CV' },
  },
  hero: {
    ctaWork: { en: 'Explore case studies', tr: 'Öne çıkan projeleri incele' },
    ctaCv: { en: 'Download CV (PDF)', tr: 'CV İndir (PDF)' },
    copyEmail: { en: 'Copy email', tr: 'E-postayı kopyala' },
    copied: { en: 'Copied to clipboard', tr: 'Panoya kopyalandı' },
    portraitAlt: {
      en: 'Portrait of Reha Demircan, Software Engineer',
      tr: 'Yazılım Mühendisi Reha Demircan portre fotoğrafı',
    },
  },
  flagship: {
    eyebrow: { en: '01 · Flagship Case Studies', tr: '01 · Öne Çıkan Vaka Çalışmaları' },
    title: {
      en: 'End-to-end systems built to production standards.',
      tr: 'Üretim standartlarında kurgulanan uçtan uca sistemler.',
    },
    description: {
      en: 'Both applications are deployed live and built from scratch with strict TypeScript, domain-level validation, bilingual UX, and automated test coverage rather than template boilerplate.',
      tr: 'Her iki uygulama da canlı ortamda yayınlanmakta olup; hazır şablonlar yerine strict TypeScript, domain doğrulama katmanları, çift dilli deneyim ve otomatik test kapsamıyla sıfırdan geliştirildi.',
    },
    liveDemo: { en: 'Live site', tr: 'Canlı site' },
    sourceCode: { en: 'Source code', tr: 'Kaynak kod' },
    architectureNotes: { en: 'Architecture notes', tr: 'Mimari notlar' },
    inspectScreen: { en: 'Inspect full screen', tr: 'Tam ekran incele' },
  },
  archive: {
    eyebrow: { en: '02 · Selected Engineering Work', tr: '02 · Seçili Mühendislik Çalışmaları' },
    title: {
      en: 'Full-stack, mobile, and database engineering.',
      tr: 'Full-stack, mobil ve veri tabanı projeleri.',
    },
    description: {
      en: 'Additional systems across React, Node/Express, SQL Server, Flutter, C#/.NET, and Unity. Select any project to inspect screens and architectural notes.',
      tr: 'React, Node/Express, SQL Server, Flutter, C#/.NET ve Unity ile geliştirilmiş diğer projeler. Ekran görüntüleri ve mimari detaylar için herhangi bir projeyi açabilirsiniz.',
    },
    filters: [
      { id: 'all' as ProjectFilter, label: { en: 'All work', tr: 'Tümü' } },
      { id: 'frontend' as ProjectFilter, label: { en: 'Frontend & Web', tr: 'Frontend & Web' } },
      { id: 'fullstack' as ProjectFilter, label: { en: 'Full-Stack & SQL', tr: 'Full-Stack & SQL' } },
      { id: 'mobile' as ProjectFilter, label: { en: 'Mobile', tr: 'Mobil' } },
    ],
    details: { en: 'Details', tr: 'Detaylar' },
    blueprintBadge: { en: 'System Architecture', tr: 'Sistem Mimarisi' },
  },
  experience: {
    eyebrow: { en: '03 · Experience & Education', tr: '03 · Deneyim ve Eğitim' },
    title: {
      en: 'Industry internships backed by a Software Engineering degree.',
      tr: 'Yazılım Mühendisliği eğitimi ve sektör stajı deneyimi.',
    },
    educationLabel: { en: 'Education', tr: 'Eğitim' },
    certificationsLabel: { en: 'Verified Certifications', tr: 'Sertifikalar' },
    languagesLabel: { en: 'Spoken Languages', tr: 'Yabancı Diller' },
  },
  capabilities: {
    eyebrow: { en: '04 · Technical Capabilities', tr: '04 · Teknik Yetkinlikler' },
    title: {
      en: 'Pragmatic stack across web, mobile, and relational data.',
      tr: 'Web, mobil ve ilişkisel veri tabanı katmanlarında pratik yetkinlik.',
    },
    description: {
      en: 'Grouped by engineering discipline and backed by repositories you can audit directly.',
      tr: 'Mühendislik disiplinlerine göre gruplandırılmış ve doğrudan GitHub repolarında doğrulanabilir teknoloji yığını.',
    },
  },
  contact: {
    eyebrow: { en: '05 · Contact', tr: '05 · İletişim' },
    title: {
      en: 'Hiring for a software, frontend, or mobile role?',
      tr: 'Yazılım, frontend veya mobil ekibiniz için mühendis mi arıyorsunuz?',
    },
    description: {
      en: 'Available for full-time, new-grad, and remote engineering positions in Türkiye, Europe, and international teams. Reach out directly by email or compose a note below.',
      tr: 'Türkiye, Avrupa ve uluslararası uzaktan/hibrit ekiplerde tam zamanlı yazılım mühendisi, frontend veya mobil geliştirici rolleri için görüşmeye hazırım.',
    },
    directTitle: { en: 'Direct channels', tr: 'Doğrudan iletişim' },
    topicLabel: { en: 'Topic', tr: 'Konu' },
    topics: [
      { id: 'role', label: { en: 'Software / Frontend Role', tr: 'Yazılım / Frontend Pozisyonu' } },
      { id: 'mobile', label: { en: 'Mobile App Role', tr: 'Mobil Uygulama Pozisyonu' } },
      { id: 'project', label: { en: 'Project Collaboration', tr: 'Proje İş Birliği' } },
    ],
    nameLabel: { en: 'Your name', tr: 'Adınız' },
    namePlaceholder: { en: 'Hiring manager or engineer name', tr: 'Ad Soyad' },
    emailLabel: { en: 'Work email', tr: 'E-posta adresiniz' },
    emailPlaceholder: { en: 'name@company.com', tr: 'ad@sirket.com' },
    messageLabel: { en: 'Message', tr: 'Mesajınız' },
    messagePlaceholder: {
      en: 'Share the role, team, tech stack, or interview details...',
      tr: 'Pozisyon, ekip, teknoloji yığını veya görüşme detaylarını paylaşabilirsiniz...',
    },
    openMailClient: { en: 'Open in email client', tr: 'E-posta uygulamasında aç' },
    copyMessage: { en: 'Copy message & email', tr: 'Mesajı ve e-postayı kopyala' },
    draftOpened: {
      en: 'Email draft opened. If no mail app launched, use "Copy message & email" next to it.',
      tr: 'E-posta taslağı açıldı. Mail uygulamanız açılmadıysa yanındaki kopyala düğmesini kullanabilirsiniz.',
    },
    copiedDraft: {
      en: 'Message and recipient email copied — paste directly into Gmail, Outlook, or LinkedIn.',
      tr: 'Mesaj ve e-posta adresi kopyalandı — doğrudan Gmail, Outlook veya LinkedIn’e yapıştırabilirsiniz.',
    },
  },
  modal: {
    problem: { en: 'Context & Problem', tr: 'Bağlam ve Problem' },
    architecture: { en: 'Architecture & Implementation', tr: 'Mimari ve Uygulama' },
    tradeoffs: { en: 'Key Engineering Trade-offs', tr: 'Mühendislik Kararları' },
    verification: { en: 'Testing & Verification', tr: 'Test ve Doğrulama' },
    close: { en: 'Close modal', tr: 'Pencereyi kapat' },
    prev: { en: 'Previous screen', tr: 'Önceki ekran' },
    next: { en: 'Next screen', tr: 'Sonraki ekran' },
  },
  footer: {
    backToTop: { en: 'Back to top', tr: 'Yukarı dön' },
    builtWith: {
      en: 'Istanbul · React, TypeScript & Tailwind CSS',
      tr: 'İstanbul · React, TypeScript & Tailwind CSS',
    },
  },
} as const

export const flagshipCaseStudies: FlagshipCaseStudy[] = [
  {
    id: 'forge-supplements',
    index: '01',
    year: '2026',
    category: 'frontend',
    domainLabel: {
      en: 'Full-Stack E-Commerce Storefront',
      tr: 'Full-Stack E-Ticaret Platformu',
    },
    title: 'FORGE Supplements',
    subtitle: {
      en: 'Sports nutrition commerce engine with zero-trust server pricing, country-aware checkout, and a bilingual AI help desk.',
      tr: 'Sunucu taraflı sıfır-güven fiyat doğrulama, ülkeye göre adres/kargo kuralları ve çift dilli AI destek asistanına sahip sporcu besinleri e-ticaret uygulaması.',
    },
    role: {
      en: 'Architecture, Frontend & API Design',
      tr: 'Mimari, Frontend ve API Tasarımı',
    },
    summary: {
      en: 'Designed and engineered a 14-SKU e-commerce storefront from scratch in Next.js 16 and React 19. Features multi-facet URL-synced filtering, variant inventory limits, deterministic server-side order re-pricing, and 126 automated unit & E2E tests.',
      tr: 'Next.js 16 ve React 19 ile 14 ürünlü kapsamlı bir e-ticaret mağazasını sıfırdan tasarlayıp geliştirdim. URL senkronize çoklu filtreleme, varyant bazlı stok kontrolü, sunucu taraflı sepet fiyat doğrulaması ve 126 otomatik test içerir.',
    },
    liveDemo: 'https://forge-supplement-store.vercel.app',
    github: 'https://github.com/rdmrcn/ForgeSuplements_WebPublic',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Zustand',
      'React Hook Form',
      'Zod',
      'Vitest',
      'Playwright',
    ],
    metrics: [
      { value: '77 + 49', label: { en: 'Vitest unit + Playwright E2E tests', tr: 'Vitest birim + Playwright E2E testi' } },
      { value: '6 Countries', label: { en: 'TR, US, CA, DE, AT & GB checkout', tr: 'TR, US, CA, DE, AT & GB teslimat' } },
      { value: '41 Routes', label: { en: 'Static & dynamic App Router pages', tr: 'Statik ve dinamik App Router rotası' } },
    ],
    highlights: [
      {
        en: 'Zero-trust checkout API: client sends variant IDs and quantities only; server re-runs pure priceCart() and returns 409 price_mismatch or cart_changed on stale totals behind swappable PaymentProvider and OrderRepository seams.',
        tr: 'Sıfır-güven ödeme API’si: istemci yalnızca varyant ID ve adet gönderir; sunucu saf priceCart() motorunu yeniden çalıştırır ve uyuşmazlıkta 409 price_mismatch / cart_changed döner.',
      },
      {
        en: 'Multi-facet catalog discovery by training goal, product type, flavour, size, availability, and price with URL-synced state, weighted search scoring, persisted cart, favourites, and recently viewed items.',
        tr: 'Hedef, ürün tipi, aroma, gramaj, stok ve fiyat kriterlerine göre URL senkronize filtreleme, ağırlıklı arama sıralaması, kalıcı sepet, favoriler ve son görüntülenenler.',
      },
      {
        en: 'Rate-limited bilingual (EN/TR) help desk endpoint (/api/assistant) answering shipping, goal recommendations, and order-ETA questions from live store data, with optional OpenAI-compatible phrasing fallback.',
        tr: 'IP hız sınırlamalı çift dilli (EN/TR) destek asistanı (/api/assistant); canlı mağaza verisinden kargo, hedefe göre ürün önerisi ve tahmini teslimat yanıtları üretir.',
      },
    ],
    views: [
      {
        src: '/projects/forge-home.jpg',
        label: { en: 'Storefront Hero', tr: 'Ana Sayfa' },
        alt: {
          en: 'FORGE Supplements dark editorial hero featuring protein and creatine tubs',
          tr: 'FORGE Supplements protein ve kreatin ürünlerini gösteren ana sayfa görünümü',
        },
      },
      {
        src: '/projects/forge-shop.jpg',
        label: { en: 'Goal & Catalog Filters', tr: 'Hedef ve Filtreleme' },
        alt: {
          en: 'FORGE Supplements shop catalog with goal cards and product type filters',
          tr: 'FORGE Supplements hedef kartları ve ürün filtreleme ekranı',
        },
      },
      {
        src: '/projects/forge-product.jpg',
        label: { en: 'Product & Variants', tr: 'Ürün ve Varyantlar' },
        alt: {
          en: 'FORGE Supplements Standard Whey Protein detail page with flavour and size selectors',
          tr: 'FORGE Supplements Standard Whey Protein aroma ve gramaj seçim ekranı',
        },
      },
    ],
    caseStudy: {
      problem: {
        en: 'Most portfolio e-commerce demos stop at a static grid and client-only cart total. FORGE was built to exercise real commerce engineering: strict variant/SKU modeling, server-verified totals, country-specific address validation, accessible drawers, and full automated test coverage.',
        tr: 'Çoğu portfolyo e-ticaret demosu statik ürün kartları ve istemci taraflı sepet toplamında kalır. FORGE; gerçek SKU/varyant modellemesi, sunucu doğrulamalı sepet hesaplaması, ülkeye göre adres kuralları ve kapsamlı otomatik test pratiği için geliştirildi.',
      },
      architecture: [
        {
          en: 'Domain-first catalog layer (src/domain/) separates pure pricing (priceCart), shipping tables, discount rules (FORGE10, WELCOME5, FREESHIP), and goal taxonomy from React components.',
          tr: 'Domain katmanı (src/domain/) saf fiyatlandırma (priceCart), kargo kuralları, indirim kodları ve hedef taksonomisini UI bileşenlerinden izole eder.',
        },
        {
          en: 'Server boundary (src/server/orders/service.ts) abstracts PaymentProvider, OrderRepository, and CarrierAdapter interfaces so a real processor and database plug in without rewriting checkout UI.',
          tr: 'Sunucu katmanı (src/server/orders/service.ts) PaymentProvider, OrderRepository ve CarrierAdapter arayüzleriyle gerçek ödeme sağlayıcı ve veri tabanı geçişine hazır tasarlandı.',
        },
        {
          en: 'Original catalog-driven SVG packaging renders, Product JSON-LD, sitemap/robots metadata, native <dialog> drawers, and PBKDF2-SHA256 client demo accounts.',
          tr: 'Katalog verisinden üretilen özgün SVG ambalaj görselleri, Product JSON-LD, sitemap/robots, native <dialog> çekmeceleri ve PBKDF2-SHA256 demo hesap akışı.',
        },
      ],
      tradeoffs: [
        {
          en: 'Demo checkout intentionally charges €0 and persists demo orders to a local JSON file with memory fallback on serverless hosts, clearly communicating non-transactional demo boundaries.',
          tr: 'Demo ödeme kasıtlı olarak gerçek tahsilat yapmaz ve sunucusuz ortamlarda bellek yedekli yerel JSON deposu kullanır; demo sınırları kullanıcıya şeffaf biçimde belirtilir.',
        },
        {
          en: 'The help desk uses deterministic rule-based grounding first and optional LLM phrasing second, preventing hallucinated health claims or fabricated shipping prices.',
          tr: 'Destek asistanı önce kural tabanlı deterministik mağaza verisini kullanır, ardından isteğe bağlı LLM ifade katmanını uygular; böylece uydurma sağlık iddiaları ve yanlış kargo fiyatları engellenir.',
        },
      ],
      verification: [
        {
          en: '77 Vitest unit tests covering pricing math, discount edge cases, inventory caps, assistant intents, and validation schemas.',
          tr: 'Fiyatlandırma matematiği, indirim kodları, stok limitleri, asistan yanıtları ve şema doğrulamalarını kapsayan 77 Vitest birim testi.',
        },
        {
          en: '49 Playwright E2E tests executed against the production build across both desktop and mobile viewports, plus strict tsc --noEmit and ESLint.',
          tr: 'Production build üzerinde hem masaüstü hem mobil görünümde çalışan 49 Playwright E2E testi, strict tsc --noEmit ve ESLint doğrulaması.',
        },
      ],
    },
  },
  {
    id: 'bosfor-hotels',
    index: '02',
    year: '2026',
    category: 'frontend',
    domainLabel: {
      en: 'Hospitality Booking Engine & Static Web App',
      tr: 'Otel Rezervasyon Motoru ve Web Uygulaması',
    },
    title: 'Bosfor Hotels',
    subtitle: {
      en: 'Bilingual boutique hotel platform in Bebek, Istanbul with deterministic 60-day room availability, demo card checkout, and 93–100 Lighthouse performance.',
      tr: 'İstanbul Bebek konseptli çift dilli butik otel rezervasyon platformu: deterministik 60 günlük oda müsaitlik motoru, demo kart doğrulama ve 93–100 Lighthouse performansı.',
    },
    role: {
      en: 'Product Design, State Architecture & Performance',
      tr: 'Ürün Tasarımı, State Mimarisi ve Performans',
    },
    summary: {
      en: 'Static-exported Next.js 16 hospitality site featuring eight room types across Bosphorus and city orientations, live date-range inventory checks, hydration-safe local auth/bookings via useSyncExternalStore, printable vouchers, and an on-site bilingual concierge.',
      tr: 'Boğaz ve şehir manzaralı sekiz oda tipi, tarih aralığına göre anlık stok hesaplama, useSyncExternalStore ile hydration güvenli oturum/rezervasyon yönetimi, yazdırılabilir rezervasyon fişi ve çift dilli konsiyerj içeren statik Next.js 16 uygulaması.',
    },
    liveDemo: 'https://bosfor-hotel-tr.vercel.app',
    github: 'https://github.com/rdmrcn/HotelManagment-WebAPI',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'shadcn/ui',
      'Base UI',
      'Vitest',
      'GitHub Actions',
    ],
    metrics: [
      { value: '93–100', label: { en: 'Lighthouse Performance, 100 A11y/SEO', tr: 'Lighthouse Performans, 100 Erişilebilirlik/SEO' } },
      { value: '60-Day', label: { en: 'Deterministic seeded availability engine', tr: 'Deterministik müsaitlik simülasyon motoru' } },
      { value: 'EN / TR', label: { en: 'Persisted bilingual UI & concierge', tr: 'Kalıcı çift dilli arayüz ve konsiyerj' } },
    ],
    highlights: [
      {
        en: 'Seeded availability engine (FNV-1a + mulberry32 PRNG) generates consistent 60-day occupancy accounting for weekends, seasonality, and Turkish public holidays, dynamically subtracting user bookings across every night of a stay.',
        tr: 'FNV-1a + mulberry32 PRNG tabanlı müsaitlik motoru; hafta sonları, sezon ve Türkiye resmi tatillerine göre 60 günlük tutarlı doluluk üretir ve kullanıcının kendi rezervasyonlarını gecelik bazda düşer.',
      },
      {
        en: 'Zero hydration mismatches on static export: auth and bookings flow through a single useSyncExternalStore storage layer with explicit server snapshots and client-evaluated current date (useToday).',
        tr: 'Statik export üzerinde sıfır hydration hatası: oturum ve rezervasyonlar tek bir useSyncExternalStore depolama katmanından ve istemci taraflı tarih kancasından (useToday) yönetilir.',
      },
      {
        en: 'End-to-end reservation flow with keyboard-accessible date-range picker, Luhn + expiry test card validation (success/decline states), printable reservation voucher (/receipt), and pre-generated WebP image variants via a custom next/image loader.',
        tr: 'Klavye erişilebilir tarih seçici, Luhn + son kullanma tarihli demo kart doğrulaması, yazdırılabilir rezervasyon fişi (/receipt) ve özel next/image WebP yükleyicisi.',
      },
    ],
    views: [
      {
        src: '/projects/bosfor-hotels.jpg',
        label: { en: 'Editorial Landing', tr: 'Ana Sayfa' },
        alt: {
          en: 'Bosfor Hotels Bebek Istanbul hero section with date availability search bar',
          tr: 'Bosfor Hotels Bebek İstanbul ana sayfa ve müsaitlik arama çubuğu',
        },
      },
      {
        src: '/projects/bosfor-rooms.jpg',
        label: { en: 'Rooms & Filtering', tr: 'Odalar ve Filtreleme' },
        alt: {
          en: 'Bosfor Hotels rooms catalog with Bosphorus and City view filters and nightly rates',
          tr: 'Bosfor Hotels Boğaz ve Şehir manzaralı oda listesi ve filtreleme ekranı',
        },
      },
      {
        src: '/projects/bosfor-book.jpg',
        label: { en: 'Booking & Stay Summary', tr: 'Rezervasyon Akışı' },
        alt: {
          en: 'Bosfor Hotels booking flow with date inputs, live rooms-left badges, and sticky stay summary',
          tr: 'Bosfor Hotels kalan oda rozetleri ve sabit konaklama özetli rezervasyon sayfası',
        },
      },
    ],
    caseStudy: {
      problem: {
        en: 'Built as a realistic hospitality showcase for boutique hotels without requiring paid server hosting. The challenge was delivering authentic multi-night availability, user sessions, payment validation, and instant page speed purely on a static export.',
        tr: 'Ücretli sunucu barındırma gerektirmeden butik oteller için gerçekçi bir rezervasyon deneyimi sunmak amaçlandı. Asıl mühendislik zorluğu; çok geceli müsaitlik, kullanıcı oturumu, kart doğrulaması ve yüksek performansı tamamen statik export üzerinde sağlamaktı.',
      },
      architecture: [
        {
          en: 'Single storage boundary (src/lib/storage.ts) + useSyncExternalStore auth provider prevents cross-tab drift and server/client hydration mismatches.',
          tr: 'Tek depolama modülü (src/lib/storage.ts) ve useSyncExternalStore tabanlı kimlik sağlayıcısı, sekmeler arası tutarlılık ve hatasız hydration sağlar.',
        },
        {
          en: 'Salted SHA-256 hashing via Web Crypto API (with pure-JS fallback), Stripe test-card Luhn verification storing brand + last four digits only, and account-scoped confirmation/receipt views.',
          tr: 'Web Crypto API ile tuzlanmış SHA-256 özetleme, yalnızca kart markası ve son dört haneyi saklayan Luhn doğrulaması ve hesaba özel onay/makbuz ekranları.',
        },
        {
          en: 'Pre-sized responsive WebP variants generated at build time and served through a custom next/image loader, paired with click-to-load OpenStreetMap to keep initial payloads lean.',
          tr: 'Önceden ölçeklenmiş WebP görsellerini seçen özel next/image yükleyicisi ve tıklama ile yüklenen OpenStreetMap haritası sayesinde düşük başlangıç boyutu.',
        },
      ],
      tradeoffs: [
        {
          en: 'No backend database means accounts and bookings are scoped to each visitor’s browser; this keeps deployment free and instantaneous while demonstrating full stateful workflows.',
          tr: 'Backend veri tabanı olmadığı için hesap ve rezervasyonlar tarayıcı yerelinde tutulur; bu tercih sıfır maliyetli dağıtım sağlarken tam rezervasyon akışını canlı olarak deneyimletir.',
        },
        {
          en: 'Date-dependent UI defers "today" computation until hydration so pre-rendered static HTML never freezes the build timestamp.',
          tr: 'Tarih bağımlı arayüz öğeleri bugünün tarihini hydration sonrasında hesaplayarak statik HTML’in build gününde donmasını önler.',
        },
      ],
      verification: [
        {
          en: 'Automated CI pipeline runs ESLint (with React Compiler rules), next typegen + tsc --noEmit, Vitest unit suites (auth, availability, payment, i18n, concierge), and scripted concierge regression checks.',
          tr: 'CI hattı; React Compiler kurallı ESLint, next typegen + tsc --noEmit, Vitest birim testleri (kimlik, müsaitlik, ödeme, i18n, konsiyerj) ve konsiyerj regresyon scriptini çalıştırır.',
        },
        {
          en: 'Audited across all 8 routes in Lighthouse: 93–99 Mobile Performance, 100 Desktop Performance, and 100 across Accessibility, Best Practices, and SEO.',
          tr: '8 rotanın tamamında Lighthouse denetimi: Mobil Performans 93–99, Masaüstü Performans 100; Erişilebilirlik, En İyi Uygulamalar ve SEO 100.',
        },
      ],
    },
  },
]

export const archiveProjects: ProjectItem[] = [
  {
    id: 'fathom-ops',
    title: 'Fathom Operations System',
    year: '2026',
    category: 'fullstack',
    presentation: 'architecture',
    tagline: {
      en: 'Full-stack project ops platform backed by SQL Server 2022, rotating JWTs, RBAC, and a tool-using AI assistant.',
      tr: 'SQL Server 2022, rotasyonlu JWT, rol tabanlı yetkilendirme ve araç kullanan AI asistanlı operasyon yönetim sistemi.',
    },
    description: {
      en: 'Monorepo (React 19 + Vite, Express 5, shared Zod DTOs, Microsoft SQL Server 2022) featuring drag-and-drop Kanban boards, command palette (⌘K), RBAC (Admin/Manager/Member), refresh-token family revocation, and an AI assistant querying least-privilege SQL reporting views.',
      tr: 'React 19 + Vite, Express 5, ortak Zod şemaları ve Microsoft SQL Server 2022 üzerine kurulu monorepo; sürükle-bırak Kanban panosu, komut paleti (⌘K), RBAC, yenileme token iptali ve en az yetkili SQL raporlama view’larını sorgulayan AI asistan içerir.',
    },
    architectureNote: {
      en: 'Task keys allocate atomically via SQL OUTPUT clauses; reporting queries pass both an AST/SQL guard and a restricted reporting_reader SQL Server login that can only SELECT safe views.',
      tr: 'Görev anahtarları SQL OUTPUT ifadesiyle çakışmasız üretilir; rapor sorguları hem SQL koruma katmanından hem de yalnızca güvenli view’ları okuyabilen kısıtlı reporting_reader oturumundan geçer.',
    },
    stack: ['React 19', 'TypeScript', 'TanStack Query', 'Express 5', 'SQL Server 2022', 'JWT / RBAC', 'Zod', 'Vitest'],
    github: 'https://github.com/rdmrcn/Fathom_OperationSystem',
    images: [],
  },
  {
    id: 'coffee-hawai',
    title: 'Coffee Hawai',
    year: '2026',
    category: 'mobile',
    presentation: 'mobile',
    tagline: {
      en: 'Mobile-first coffee shop catalog with category filtering, product detail flows, search, and interactive cart.',
      tr: 'Kategori filtreleme, ürün detay ekranları, arama ve etkileşimli sepet akışına sahip mobil kahve kataloğu.',
    },
    description: {
      en: 'Mobile commerce catalog built during Flutter weekly mobile training. Structured around JSON product modeling, multi-screen mobile navigation (Home → Menu → Product Detail → Cart), live search, and responsive mobile viewport ergonomics.',
      tr: 'Flutter haftalık mobil eğitimi kapsamında geliştirilen mobil katalog uygulaması. JSON ürün modellemesi, çok ekranlı mobil gezinme akışı (Ana Ekran → Menü → Detay → Sepet) ve canlı arama sunar.',
    },
    architectureNote: {
      en: 'Decoupled JSON catalog dataset with modular view state for filtering, detail inspection, and cart line updates in a touch-friendly 390px mobile layout.',
      tr: 'Dokunmatik 390px mobil düzen için ayrıştırılmış JSON katalog verisi ve modüler ekran/sepet durum yönetimi.',
    },
    stack: ['Flutter', 'Dart', 'Mobile UI', 'JSON', 'State Management'],
    github: 'https://github.com/rdmrcn/coffee-hawai-web',
    images: [
      {
        src: '/projects/coffee-hawai.png',
        label: { en: 'Home Screen', tr: 'Ana Ekran' },
        alt: { en: 'Coffee Hawai mobile home screen', tr: 'Coffee Hawai mobil ana ekran' },
      },
      {
        src: '/projects/coffee-hawai-menu.png',
        label: { en: 'Menu Catalog', tr: 'Menü Kataloğu' },
        alt: { en: 'Coffee Hawai mobile coffee catalog menu', tr: 'Coffee Hawai kahve menüsü ekranı' },
      },
      {
        src: '/projects/coffee-hawai-menu-2.png',
        label: { en: 'Category View', tr: 'Kategori Görünümü' },
        alt: { en: 'Coffee Hawai filtered category view', tr: 'Coffee Hawai filtrelenmiş menü görünümü' },
      },
      {
        src: '/projects/coffee-hawai-cart.png',
        label: { en: 'Cart & Order', tr: 'Sepet ve Sipariş' },
        alt: { en: 'Coffee Hawai mobile cart screen', tr: 'Coffee Hawai mobil sepet ekranı' },
      },
    ],
  },
  {
    id: 'financial-crm',
    title: 'Financial CRM',
    year: '2026',
    category: 'fullstack',
    presentation: 'desktop',
    tagline: {
      en: '3-tier C# / .NET finance management desktop system with Entity Framework, SQL Server, and live chart analytics.',
      tr: '3 katmanlı C# / .NET finans yönetim masaüstü uygulaması: Entity Framework, SQL Server ve grafikli kontrol paneli.',
    },
    description: {
      en: 'End-to-end personal finance CRM built with C#, .NET Framework, Windows Forms, Entity Framework, and Microsoft SQL Server. Manages bank accounts, incoming/outgoing transfers, categorized expenses, and recurring bills alongside multi-chart dashboards.',
      tr: 'C#, .NET Framework, Windows Forms, Entity Framework ve SQL Server ile uçtan uca geliştirilen finans CRM uygulaması. Banka hesapları, havaleler, kategorize harcamalar, faturalar ve çoklu grafik dashboard’u içerir.',
    },
    architectureNote: {
      en: 'Structured into modular forms backed by FinancialCrmDbEntities (Banks, BankProcesses, Categories, Spendings, Bills, Users) using LINQ aggregations for live chart series.',
      tr: 'FinancialCrmDbEntities veri modeli (Banks, BankProcesses, Categories, Spendings, Bills, Users) ve canlı grafik serileri için LINQ toplulaştırmalarıyla katmanlı yapı.',
    },
    stack: ['C#', '.NET', 'Entity Framework', 'SQL Server', 'LINQ', 'WinForms'],
    github: 'https://github.com/rdmrcn/BANK-FINANCE-MANAGMENT-with-MVC-Proj',
    images: [
      {
        src: '/projects/financial-crm.png',
        label: { en: 'Analytics Dashboard', tr: 'Finans Dashboard' },
        alt: { en: 'Financial CRM desktop dashboard with balance charts and spending breakdown', tr: 'Financial CRM bakiye ve harcama grafikli masaüstü paneli' },
      },
      {
        src: '/projects/financial-crm-menu.png',
        label: { en: 'Module Navigation', tr: 'Ana Menü' },
        alt: { en: 'Financial CRM main menu view', tr: 'Financial CRM ana menü görünümü' },
      },
      {
        src: '/projects/financial-crm-login.png',
        label: { en: 'Authentication', tr: 'Giriş Ekranı' },
        alt: { en: 'Financial CRM user login screen', tr: 'Financial CRM kullanıcı giriş ekranı' },
      },
    ],
  },
  {
    id: 'legendary-gears',
    title: 'Legendary Gears',
    year: '2026',
    category: 'frontend',
    presentation: 'browser',
    tagline: {
      en: 'Responsive motorcycle catalog storefront with category tabs, live search, and spec cards built in React.',
      tr: 'Kategori sekmeleri, canlı arama ve teknik özellik kartlarına sahip React motosiklet katalog vitrini.',
    },
    description: {
      en: 'Built during my Software Persona internship as a component-driven React storefront. Includes segment filtering (Supersport, Naked, Adventure, Scooter), grid/list layout toggles, search, and authentication views.',
      tr: 'Software Persona stajı kapsamında bileşen tabanlı React mimarisiyle geliştirilen motosiklet katalog uygulaması. Segment filtreleri, ızgara/liste görünüm geçişi, arama ve giriş ekranları içerir.',
    },
    architectureNote: {
      en: 'Reusable React catalog cards and filter state combining text search, category counters, and toggleable grid/list presentation.',
      tr: 'Metin araması, kategori sayaçları ve ızgara/liste geçişini birleştiren yeniden kullanılabilir React bileşen mimarisi.',
    },
    stack: ['React', 'JavaScript', 'CSS3', 'Responsive UI'],
    github: 'https://github.com/rdmrcn/Legendary-Gears---Web-Motorcycle-Shop',
    images: [
      {
        src: '/projects/motor-legends-catalog.png',
        label: { en: 'Catalog & Filters', tr: 'Katalog ve Filtreler' },
        alt: { en: 'Legendary Gears motorcycle catalog interface', tr: 'Legendary Gears motosiklet katalog arayüzü' },
      },
      {
        src: '/projects/motor-legends.png',
        label: { en: 'Brand Landing', tr: 'Giriş Görünümü' },
        alt: { en: 'Legendary Gears landing view', tr: 'Legendary Gears ana görünüm' },
      },
    ],
  },
  {
    id: 'novastore-sql',
    title: 'NovaStore SQL',
    year: '2026',
    category: 'fullstack',
    presentation: 'desktop',
    tagline: {
      en: 'Relational e-commerce SQL Server schema with normalized PK/FK constraints, analytical views, and backup scripts.',
      tr: 'Normalize PK/FK ilişkileri, analitik view’lar ve yedekleme senaryoları içeren SQL Server e-ticaret veri tabanı.',
    },
    description: {
      en: 'Designed and implemented NovaStoreDB in Microsoft SQL Server (Categories, Products, Customers, Orders, OrderDetails) with T-SQL reporting queries for low-stock alerts, customer lifetime revenue, category aggregates, and dated order tracking.',
      tr: 'Microsoft SQL Server üzerinde tasarlanan NovaStoreDB e-ticaret veri tabanı (Categories, Products, Customers, Orders, OrderDetails). Kritik stok, müşteri cirosu, kategori bazlı toplulaştırma ve tarih analizi sorgularını kapsar.',
    },
    architectureNote: {
      en: 'Normalized 5-table relational design enforced with PK/FK keys, INNER/LEFT JOIN reporting views, GROUP BY aggregates, DATEDIFF metrics, and BACKUP DATABASE procedures.',
      tr: 'PK/FK bütünlüğü, INNER/LEFT JOIN raporlama view’ları, GROUP BY toplulaştırmaları, DATEDIFF analizleri ve BACKUP DATABASE prosedürleriyle 5 tablolu ilişkisel tasarım.',
    },
    stack: ['SQL Server', 'T-SQL', 'SSMS', 'Data Modeling'],
    github: 'https://github.com/rdmrcn/novastore-sql-database-project',
    images: [
      {
        src: '/projects/novastore.png',
        label: { en: 'SSMS Schema & Query', tr: 'SSMS Şema ve Sorgu' },
        alt: { en: 'NovaStore SQL Server Management Studio query and results table', tr: 'NovaStore SQL Server Management Studio sorgu ve sonuç tablosu' },
      },
    ],
  },
  {
    id: 'taskflow',
    title: 'TaskFlow',
    year: '2026',
    category: 'frontend',
    presentation: 'browser',
    tagline: {
      en: 'React CRUD daily task manager with priority tags, completion progress bar, live search, and local persistence.',
      tr: 'Öncelik etiketleri, ilerleme çubuğu, canlı arama ve yerel depolama sunan React CRUD görev yöneticisi.',
    },
    description: {
      en: 'Clean single-page productivity app built with React and Tailwind CSS during internship. Supports full task CRUD, optional descriptions/priorities/due dates, status filtering, sorting, bulk actions, and localStorage sync.',
      tr: 'Staj sürecinde React ve Tailwind CSS ile geliştirilen günlük görev yöneticisi. Tam CRUD akışı, öncelik/tarih alanları, durum filtreleme, sıralama ve localStorage kalıcılığı içerir.',
    },
    architectureNote: {
      en: 'Derived state selectors drive live completion percentages, status counters, and search/sort pipelines without duplicated state.',
      tr: 'Türetilmiş state seçicileri ile veri tekrarı olmadan canlı tamamlanma yüzdesi, sayaçlar ve arama/sıralama akışı.',
    },
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'localStorage'],
    github: 'https://github.com/rdmrcn/taskflow-daily-application',
    images: [
      {
        src: '/projects/taskflow.png',
        label: { en: 'Task Workspace', tr: 'Görev Ekranı' },
        alt: { en: 'TaskFlow React CRUD daily task manager interface', tr: 'TaskFlow React CRUD görev yöneticisi arayüzü' },
      },
    ],
  },
  {
    id: 'match-blast',
    title: 'Match Blast',
    year: '2026',
    category: 'mobile',
    presentation: 'mobile',
    tagline: {
      en: 'Mobile collapse/blast puzzle game prototype built in Unity & C# as a studio technical case study.',
      tr: 'Bir oyun stüdyosu teknik case çalışması olarak Unity ve C# ile geliştirilen mobil puzzle oyunu prototipi.',
    },
    description: {
      en: 'Designed and implemented a mobile grid-based collapse/blast mechanic in Unity and C#: connected same-color cluster detection, board refill cascade, move/timer HUD, and responsive touch input.',
      tr: 'Unity ve C# ile geliştirilen mobil grid tabanlı collapse/blast oyun mekaniği: bağlı aynı renk blok grubu tespiti, tahta doldurma akışı, hamle/süre göstergeleri ve mobil dokunmatik kontroller.',
    },
    architectureNote: {
      en: 'Grid flood-fill cluster detection, deterministic gravity refill loop, and decoupled score/move state controllers in C#.',
      tr: 'C# ile flood-fill grup tespiti, deterministik yerçekimi doldurma döngüsü ve ayrıştırılmış skor/hamle durum yöneticisi.',
    },
    stack: ['Unity', 'C#', 'Mobile', 'Algorithms'],
    github: 'https://github.com/rdmrcn/Match-Game-Unity-Project',
    images: [
      {
        src: '/projects/match-blast.png',
        label: { en: 'Mobile Gameplay', tr: 'Mobil Oynanış' },
        alt: { en: 'Match Blast mobile puzzle grid built in Unity', tr: 'Unity ile geliştirilen Match Blast mobil bulmaca tahtası' },
      },
    ],
  },
]

export const experiences: ExperienceEntry[] = [
  {
    id: 'software-persona',
    organization: 'Software Persona · TNC Group',
    role: {
      en: 'Software Development Intern',
      tr: 'Yazılım Geliştirme Stajyeri',
    },
    period: {
      en: 'May 2026 – Jul 2026',
      tr: 'Mayıs 2026 – Temmuz 2026',
    },
    duration: { en: '3 months', tr: '3 ay' },
    location: { en: 'Istanbul, Türkiye', tr: 'İstanbul, Türkiye' },
    summary: {
      en: 'Delivered frontend React applications alongside MVC/API integrations and relational SQL Server reporting databases.',
      tr: 'React tabanlı web arayüzlerinin yanı sıra MVC/API entegrasyonları ve ilişkisel SQL Server raporlama veri tabanları geliştirdim.',
    },
    highlights: [
      {
        en: 'Built component-driven React & JavaScript web apps (Legendary Gears catalog, TaskFlow CRUD workspace) with responsive layouts and client state management.',
        tr: 'Responsive tasarım ve bileşen tabanlı React & JavaScript mimarisiyle ürün katalog ve CRUD görev yönetim uygulamaları (Legendary Gears, TaskFlow) geliştirdim.',
      },
      {
        en: 'Connected frontend views to backend MVC and REST API layers while modeling NovaStoreDB in Microsoft SQL Server with PK/FK constraints, JOIN views, and aggregate reporting.',
        tr: 'Ön yüz ekranlarını MVC ve REST API katmanlarına bağladım; Microsoft SQL Server üzerinde PK/FK ilişkili NovaStoreDB veri modeli, view’lar ve toplulaştırma raporları oluşturdum.',
      },
    ],
    stack: ['React', 'TypeScript', 'JavaScript', 'ASP.NET MVC', 'REST API', 'SQL Server'],
  },
  {
    id: 'tnc-group',
    organization: 'TNC Group · Arch of Sigma',
    role: {
      en: 'Information Systems / IT Intern',
      tr: 'Bilgi Sistemleri / IT Stajyeri',
    },
    period: {
      en: 'Dec 2025 – Feb 2026',
      tr: 'Aralık 2025 – Şubat 2026',
    },
    duration: { en: '2 months', tr: '2 ay' },
    location: { en: 'Istanbul, Türkiye', tr: 'İstanbul, Türkiye' },
    summary: {
      en: 'Supported internal information systems with a backend focus on C#, .NET, SQL Server, Entity Framework, and technical analysis.',
      tr: 'Kurum içi bilgi sistemlerinde C#, .NET, SQL Server, Entity Framework ve teknik analiz odaklı çalışmalar yürüttüm.',
    },
    highlights: [
      {
        en: 'Contributed to backend workflows and internal data tooling using C#, .NET, Entity Framework, and SQL Server API layers.',
        tr: 'C#, .NET, Entity Framework ve SQL Server API katmanlarıyla kurum içi iş akışlarına ve veri araçlarına katkı sağladım.',
      },
      {
        en: 'Performed technical analysis, structured spreadsheet reporting, and cross-functional IT support across engineering workflows.',
        tr: 'Teknik analiz, yapısal Excel raporlamaları ve ekip içi bilgi teknolojileri süreçlerinde görev aldım.',
      },
    ],
    stack: ['C#', '.NET', 'Entity Framework', 'SQL Server', 'REST API'],
  },
]

export const education = {
  institution: {
    en: 'Istinye University',
    tr: 'İstinye Üniversitesi',
  },
  degree: {
    en: 'B.Sc. in Software Engineering',
    tr: 'Yazılım Mühendisliği (Lisans)',
  },
  period: {
    en: '2023 – 2027 · Final Year (Senior)',
    tr: '2023 – 2027 · 4. Sınıf (Son Sınıf)',
  },
  summary: {
    en: 'Core coursework in data structures, relational database systems, web & mobile application architecture, and end-to-end software delivery.',
    tr: 'Veri yapıları, ilişkisel veri tabanı sistemleri, web ve mobil uygulama mimarisi ile uçtan uca yazılım geliştirme süreçleri odaklı mühendislik eğitimi.',
  },
} as const

export const certifications = [
  {
    title: 'Foundational C# with Microsoft',
    issuer: 'freeCodeCamp',
    date: 'Dec 2024',
  },
  {
    title: 'ASP.NET Core MVC',
    issuer: 'Turkcell Geleceği Yazanlar',
    date: 'Nov 2025',
  },
  {
    title: 'Google IT Support',
    issuer: 'Google',
    date: 'Dec 2025',
  },
  {
    title: 'HTML, CSS & JavaScript Certification',
    issuer: 'Udemy',
    date: 'Nov 2025',
  },
  {
    title: 'Unity Game Development',
    issuer: 'BTK Akademi',
    date: 'Jul 2024',
  },
] as const

export const spokenLanguages = [
  {
    name: { en: 'Turkish', tr: 'Türkçe' },
    level: { en: 'Native', tr: 'Ana dil' },
  },
  {
    name: { en: 'Russian', tr: 'Rusça' },
    level: { en: 'Native / Bilingual', tr: 'Ana dil / İki dilli' },
  },
  {
    name: { en: 'English', tr: 'İngilizce' },
    level: { en: 'Full professional', tr: 'İleri düzey profesyonel' },
  },
  {
    name: { en: 'German', tr: 'Almanca' },
    level: { en: 'Limited working', tr: 'Temel çalışma düzeyi' },
  },
] as const

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'frontend',
    index: '01',
    title: { en: 'Frontend Engineering', tr: 'Frontend Mühendisliği' },
    summary: {
      en: 'Component architecture, strict TypeScript state modeling, accessible UI primitives, and Core Web Vitals optimization.',
      tr: 'Bileşen mimarisi, strict TypeScript state modellemesi, erişilebilir arayüz bileşenleri ve Core Web Vitals optimizasyonu.',
    },
    items: [
      'React 19',
      'Next.js (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Zustand',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'shadcn/ui & Base UI',
    ],
  },
  {
    id: 'mobile',
    index: '02',
    title: { en: 'Mobile Development', tr: 'Mobil Uygulama Geliştirme' },
    summary: {
      en: 'Cross-platform mobile UI architecture, touch-first navigation flows, catalog/cart state, and interactive mobile prototypes.',
      tr: 'Çapraz platform mobil arayüz mimarisi, dokunmatik gezinme akışları, katalog/sepet durum yönetimi ve mobil prototipler.',
    },
    items: [
      'Flutter',
      'Dart',
      'Swift',
      'Unity (C#)',
      'Mobile-First Responsive UX',
      'JSON Data Modeling',
    ],
  },
  {
    id: 'backend',
    index: '03',
    title: { en: 'Backend & Relational Data', tr: 'Backend ve Veri Tabanı' },
    summary: {
      en: 'RESTful API design, server-side pricing and validation boundaries, JWT auth/RBAC, and normalized SQL Server schemas.',
      tr: 'REST API tasarımı, sunucu taraflı doğrulama sınırları, JWT/RBAC yetkilendirme ve normalize SQL Server şemaları.',
    },
    items: [
      'C#',
      '.NET / ASP.NET Core MVC',
      'Node.js & Express',
      'REST APIs',
      'Microsoft SQL Server',
      'T-SQL & Reporting Views',
      'Entity Framework',
      'LINQ',
      'MongoDB',
    ],
  },
  {
    id: 'delivery',
    index: '04',
    title: { en: 'Testing & Delivery', tr: 'Test ve Yayınlama' },
    summary: {
      en: 'Unit and end-to-end test automation, static analysis, CI workflows, and production deployments on Vercel and GitHub Actions.',
      tr: 'Birim ve uçtan uca test otomasyonu, statik kod analizi, CI iş akışları ve Vercel / GitHub Actions dağıtımları.',
    },
    items: [
      'Vitest',
      'Playwright E2E',
      'ESLint & Oxlint',
      'Git & GitHub Actions',
      'Vercel',
      'Lighthouse Audits',
      'SEO & Structured Data',
    ],
  },
]
