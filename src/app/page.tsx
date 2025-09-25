import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Education } from '@/components/education';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
import { Skills } from '@/components/skills';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Services />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
