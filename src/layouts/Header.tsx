import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu } from '@mui/material'
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined'
import { THEME_COLORS } from '@/theme/themeColors'
import ThemeColorSwatches from './ThemeColorSwatches'

interface Props {
  isScrolled: boolean
  themeColor: string
  onThemeColorChange: (color: string) => void
}

export default function Header({ isScrolled, themeColor, onThemeColorChange }: Props) {
  const { t } = useTranslation()
  const [colorMenuAnchor, setColorMenuAnchor] = useState<HTMLElement | null>(null)

  return (
    <header
      className={
        'sticky top-0 z-[1100] border-b transition-colors duration-300 ' +
        (isScrolled
          ? 'border-black/8 bg-white/95 shadow-[0_1px_16px_rgba(0,0,0,0.07)] backdrop-blur-lg'
          : 'border-black/6 bg-white/85 backdrop-blur-md')
      }
    >
      <div className="mx-auto flex min-h-16 max-w-275 items-center px-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-slate-800 no-underline"
        >
          <span className="flex size-7.5 shrink-0 items-center justify-center rounded-lg bg-(--brand-primary) text-[15px] font-black text-white">
            O
          </span>
          Obektivka.uz
        </Link>

        <div className="flex-1" />

        <button
          type="button"
          aria-label={t('layout.choose_color')}
          onClick={(e) => setColorMenuAnchor(e.currentTarget)}
          className="mr-2 flex size-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition-colors hover:bg-slate-50 max-[600px]:hidden"
        >
          <PaletteOutlinedIcon sx={{ fontSize: 16 }} />
        </button>
        <Menu anchorEl={colorMenuAnchor} open={Boolean(colorMenuAnchor)} onClose={() => setColorMenuAnchor(null)}>
          <div className="px-3 pt-2 pb-1 text-[11px] font-bold tracking-wide text-slate-400 uppercase">
            {t('layout.choose_color')}
          </div>
          <ThemeColorSwatches
            colors={THEME_COLORS}
            active={themeColor}
            onSelect={(color) => {
              onThemeColorChange(color)
              setColorMenuAnchor(null)
            }}
            className="flex min-w-[180px] justify-evenly gap-2 px-3 py-2"
          />
        </Menu>
      </div>
    </header>
  )
}
