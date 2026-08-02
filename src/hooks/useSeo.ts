import { useEffect } from 'react'
import type { RouteMeta } from '@/router/routes'
import i18n from '@/i18n'

const OG_IMAGE = 'https://obektivka.uz/og-image.svg'
const LOCALE_MAP: Record<string, string> = { uz: 'uz_UZ', uzcyrl: 'uz_UZ' }
const JSONLD_ID = 'seo-jsonld-page'

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setPageJsonLd(meta: RouteMeta) {
  let el = document.getElementById(JSONLD_ID) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = JSONLD_ID
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: meta.seoTitle,
    ...(meta.alternateNames?.length ? { alternateName: meta.alternateNames } : {}),
    description: meta.description,
    url: meta.canonical,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  })
}

export function useSeo(meta: RouteMeta) {
  useEffect(() => {
    const title = meta.seoTitle || 'Obektivka.uz'
    const description = meta.description || ''
    const canonical = meta.canonical || 'https://obektivka.uz'

    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', 'index, follow')

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Obektivka.uz')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:image', OG_IMAGE)
    setMeta('property', 'og:locale', LOCALE_MAP[i18n.language] || 'uz_UZ')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', OG_IMAGE)

    setCanonical(canonical)
    setPageJsonLd(meta)
  }, [meta])
}
