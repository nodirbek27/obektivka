import HomePage from '@/pages/HomePage'
import ObektivkaPage from '@/pages/ObektivkaPage'

const SITE_URL = 'https://obektivka.uz'

export interface RouteMeta {
  titleKey: string
  seoTitle: string
  description: string
  canonical: string
  alternateNames?: string[]
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
      seoTitle: "Obektivka (Obyektivka) — Rasmiy Ma'lumotnoma Tuzish Xizmati | Obektivka.uz",
      description:
        "Obektivka.uz orqali rasmiy ma'lumotnoma — obektivka (obyektivka, ob'ektivka) hujjatini bepul, tez va rasmiy standartga mos tarzda tuzing. Real vaqtda ko'rish, Word yoki PDF formatida yuklab olish.",
      canonical: `${SITE_URL}/`,
      alternateNames: ['Obyektivka.uz', 'Obyektivka', "Ob'ektivka"],
    },
  },
  {
    name: 'obektivka',
    path: 'obektivka',
    element: <ObektivkaPage />,
    meta: {
      titleKey: 'menu.obektivka',
      seoTitle: "Obektivka (Obyektivka) Tuzish — Rasmiy Ma'lumotnoma Blanki | Obektivka.uz",
      description:
        "O'zbekiston davlat va nodavlat tashkilotlari uchun rasmiy obektivka — obyektivka, ob'ektivka (ma'lumotnoma) hujjatini onlayn yarating. A4 format, rasmiy standart. Word yoki PDF formatida bepul yuklab oling.",
      canonical: `${SITE_URL}/obektivka`,
      alternateNames: ['Obyektivka', "Ob'ektivka"],
    },
  },
]

export const navMenus = routeDefs.filter((r) => r.meta.titleKey)
