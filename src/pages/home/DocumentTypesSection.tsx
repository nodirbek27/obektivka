import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Bar } from './mockBars'

function Avatar() {
  return <div className="mx-auto rounded-sm bg-white/25" style={{ width: 40, height: 40 }} />
}

function Name() {
  return <div className="mx-auto h-2 w-[55%] rounded-[3px]" style={{ background: 'rgba(15, 23, 42, 0.75)' }} />
}

function LabelMark() {
  return <Bar width="55%" height={3} tone="brand" alpha={0.5} />
}

function ObektivkaPreview() {
  const pairs = [
    ['70%', '80%'],
    ['60%', '75%'],
    ['55%', '85%'],
    ['65%', '70%'],
  ]
  return (
    <div className="flex h-64 flex-col gap-3 overflow-hidden bg-linear-to-br from-[#f8faff] to-[#eef2ff] p-6">
      <div className="mx-auto mb-1 text-[9px] font-black tracking-widest text-slate-700 uppercase">
        Ma&rsquo;lumotnoma
      </div>
      <div className="flex items-start justify-center gap-3">
        <div className="flex-1 max-w-50">
          <Name />
          <div className="mt-1.5 flex justify-center">
            <Bar width="40%" height={3} tone="brand" alpha={0.6} />
          </div>
        </div>
        <Avatar />
      </div>
      <div className="mt-1 grid grid-cols-2 gap-x-4 gap-y-2.5">
        {pairs.map(([labelW, valueW], i) => (
          <div key={i}>
            <LabelMark />
            <Bar width={labelW} tone="dark" fade={0.7} mt={4} />
            <Bar width={valueW} tone="dark" fade={0.4} mt={3} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DocumentTypesSection() {
  const { t } = useTranslation()

  const features = [
    t('home.docs.point_official'),
    t('home.docs.point_photo'),
    t('home.docs.point_family'),
    t('home.docs.point_export'),
  ]

  return (
    <section className="pb-16">
      <div className="mb-10 text-center">
        <h2 className="m-0 mb-2 text-[1.65rem] font-extrabold tracking-[-0.01em] text-slate-900">
          {t('home.docs.title')}
        </h2>
        <p className="m-0 text-[0.95rem] text-slate-500">{t('home.docs.subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 items-center gap-10 rounded-3xl border border-[#e8edf3] bg-white p-8 shadow-[0_2px_16px_rgba(0,0,0,0.05)] max-[900px]:grid-cols-1 max-[900px]:p-6">
        <div className="overflow-hidden rounded-2xl border border-[#e8edf3]">
          <ObektivkaPreview />
        </div>

        <div className="flex flex-col items-start">
          <h3 className="m-0 mb-3 text-xl font-bold text-slate-900">{t('home.feature.obektivka_title')}</h3>
          <p className="m-0 mb-5 text-[0.92rem] leading-[1.7] text-slate-500">
            {t('home.feature.obektivka_desc')}
          </p>

          <ul className="m-0 mb-6 flex list-none flex-col gap-2.5 p-0">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[13.5px] font-medium text-slate-700">
                <CheckCircleIcon color="primary" sx={{ fontSize: 17 }} />
                {f}
              </li>
            ))}
          </ul>

          <Link
            to="/obektivka"
            className="inline-flex w-fit items-center gap-1.5 rounded-full bg-(--brand-primary) px-6 py-2.5 text-[13.5px] font-bold text-white no-underline transition-[gap] hover:gap-2.5"
          >
            {t('home.create_obektivka')}
            <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </div>
      </div>
    </section>
  )
}
