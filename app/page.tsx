import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectSection } from "@/components/sections/project"
import { CertificateSection } from "@/components/sections/certificates"
import { ExperienceSection } from "@/components/sections/experiences"
import { BlogSection } from "@/components/sections/blog"


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ProjectSection/>
      <CertificateSection /> 
      <ExperienceSection/>
      <BlogSection />
    </div>
  )
}
