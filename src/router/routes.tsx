import HomePage from '@/pages/HomePage'
import ObektivkaPage from '@/pages/ObektivkaPage'

const SITE_URL = 'https://obektivka.uz'

export interface RouteMeta {
  titleKey: string
  seoTitle: string
  description: string
  canonical: string
}

export interface RouteDef {
  name: string
  path: string
  element: React.ReactElement
  meta: RouteMeta
}

export const routeDefs: RouteDef[] = [
  {
    name: 'home',
    path: '',
    element: <HomePage />,
    meta: {
      titleKey: '',
      seoTitle: "Obektivka.uz — Rasmiy Ma'lumotnoma Tuzish Xizmati",
      description:
        "Obektivka.uz orqali rasmiy ma'lumotnoma (obektivka) hujjatini bepul, tez va rasmiy standartga mos tarzda tuzing. Real vaqtda ko'rish, Word yoki PDF formatida yuklab olish.",
      canonical: `${SITE_URL}/`,
    },
  },
  {
    name: 'obektivka',
    path: 'obektivka',
    element: <ObektivkaPage />,
    meta: {
      titleKey: 'menu.obektivka',
      seoTitle: "Obektivka (Rasmiy Ma'lumotnoma) Tuzish — Obektivka.uz",
      description:
        "O'zbekiston davlat va nodavlat tashkilotlari uchun rasmiy obektivka (ma'lumotnoma) hujjatini yarating. A4 format, rasmiy standart. Word yoki PDF formatida bepul yuklab oling.",
      canonical: `${SITE_URL}/obektivka`,
    },
  },
]

export const navMenus = routeDefs.filter((r) => r.meta.titleKey)
