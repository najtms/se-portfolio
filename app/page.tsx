import { Nav }               from '@/components/nav';
import { Footer }            from '@/components/footer';
import { SectionDivider }    from '@/components/section-divider';
import { HeroSection }       from '@/components/sections/hero';
import { IntroSection }      from '@/components/sections/intro';
import { DoxSection }        from '@/components/sections/dox';
import { ExperienceSection } from '@/components/sections/experience';
import { CommunitySection }  from '@/components/sections/community';
import { WorkSection }       from '@/components/sections/work';
import { ApproachSection }   from '@/components/sections/approach';
import { ContactSection }    from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Nav />

      <main id="main-content">
        <HeroSection />
        <SectionDivider />
        <IntroSection />
        <SectionDivider ecg />
        <DoxSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <CommunitySection />
        <SectionDivider />
        <WorkSection />
        <SectionDivider />
        <ApproachSection />
        <SectionDivider />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}