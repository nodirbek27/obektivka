import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Collapse } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const JSONLD_ID = 'seo-jsonld-faq'

export default function FaqSection() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    { q: t('home.faq.q1'), a: t('home.faq.a1') },
    { q: t('home.faq.q2'), a: t('home.faq.a2') },
    { q: t('home.faq.q3'), a: t('home.faq.a3') },
    { q: t('home.faq.q4'), a: t('home.faq.a4') },
  ]

  useEffect(() => {
    let el = document.getElementById(JSONLD_ID) as HTMLScriptElement | null
    if (!el) {
      el = document.createElement('script')
      el.type = 'application/ld+json'
      el.id = JSONLD_ID
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })

    return () => {
      document.getElementById(JSONLD_ID)?.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  return (
    <section className="pb-16">
      <div className="mb-10 text-center">
        <h2 className="m-0 mb-2 text-[1.65rem] font-extrabold tracking-[-0.01em] text-slate-900">
          {t('home.faq.title')}
        </h2>
        <p className="m-0 text-[0.95rem] text-slate-500">{t('home.faq.subtitle')}</p>
      </div>

      <div className="mx-auto flex max-w-175 flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          const panelId = `faq-panel-${i}`
          const buttonId = `faq-button-${i}`

          return (
            <div
              key={item.q}
              className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                isOpen ? 'border-(--brand-primary)/30 shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : 'border-[#e8edf3]'
              }`}
            >
              <h3 className="m-0">
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent px-6 py-5 text-left"
                >
                  <span
                    className={`text-[0.98rem] font-bold transition-colors duration-300 ${
                      isOpen ? 'text-(--brand-primary)' : 'text-slate-900'
                    }`}
                  >
                    {item.q}
                  </span>
                  <ExpandMoreIcon
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    sx={{ color: isOpen ? 'var(--brand-primary)' : '#94a3b8', fontSize: 22 }}
                  />
                </button>
              </h3>
              <Collapse in={isOpen} timeout={250} unmountOnExit={false}>
                <p
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="m-0 px-6 pb-5 text-[0.88rem] leading-[1.7] text-slate-500"
                >
                  {item.a}
                </p>
              </Collapse>
            </div>
          )
        })}
      </div>
    </section>
  )
}
