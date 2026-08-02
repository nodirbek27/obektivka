import Reveal from '@/components/Reveal'
import HeroSection from './home/HeroSection'
import StatsBar from './home/StatsBar'
import DocumentTypesSection from './home/DocumentTypesSection'
import StepsSection from './home/StepsSection'
import BenefitsSection from './home/BenefitsSection'
import FaqSection from './home/FaqSection'
import FinalCtaSection from './home/FinalCtaSection'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-275 px-5 pb-20 max-[768px]:px-4">
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal delay={80}>
        <StatsBar />
      </Reveal>
      <Reveal>
        <DocumentTypesSection />
      </Reveal>
      <Reveal>
        <StepsSection />
      </Reveal>
      <Reveal>
        <BenefitsSection />
      </Reveal>
      <Reveal>
        <FaqSection />
      </Reveal>
      <Reveal>
        <FinalCtaSection />
      </Reveal>
    </div>
  )
}
