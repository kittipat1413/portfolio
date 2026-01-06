"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Award, Calendar, Building, ExternalLink } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const certificates = [
  {
    title: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "Feb 2025",
    link: "https://www.credly.com/badges/639f0772-d0c4-42e2-86d1-61ca0ac8754f",
    image: "/certification/terraform-associate-(003).png",
  },
  {
    title: "GitHub Actions",
    issuer: "GitHub",
    date: "Mar 2025",
    link: "https://www.credly.com/badges/0586d2f1-4a84-4931-93cc-28fe7274b3ec",
    image: "/certification/github-actions.png",
  },
  {
    title: "Google Cloud Cybersecurity Certificate",
    issuer: "Google",
    date: "Apr 2025",
    link: "https://www.credly.com/badges/05d15dfa-6d4f-41a7-bd63-5cc66dc09e55",
    image: "/certification/google-cloud-cybersecurity-certificate.png",
  },
  {
    title: "Associate Cloud Engineer Certification",
    issuer: "Google",
    date: "Jun 2025",
    link: "https://www.credly.com/badges/ec2043e2-1b55-429d-87cd-3fb08bda34ea",
    image: "/certification/google-cloud-associate-cloud-engineer.png",
  },
  {
    title: "Professional Cloud Architect Certificate",
    issuer: "Google",
    date: "Jan 2026",
    link: "https://www.credly.com/badges/393cd9ee-e4e0-4269-a084-5440e0aa62ad",
    image: "/certification/google-cloud-professional-cloud-architect.png",
  },
]

export function CertificateSection() {
  return (
    <section
      id="certificates"
      className="py-24 bg-gradient-to-br from-background to-secondary overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-primary"
          >
            <span className="inline-flex items-center gap-2">
              <Award className="h-8 w-8" />
              Professional Certifications
            </span>
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Validated expertise in cloud technologies, DevOps practices, and security implementations.
          </motion.p>
        </div>

        {/* Badge Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group p-4"
                >
                  {/* Clickable badge */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block relative"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={160}
                      height={160}
                      className="mx-auto w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-110"
                    />
                  </a>

                  {/* Text */}
                  <h3 className="mt-4 text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="mt-2 flex flex-col items-center text-xs md:text-sm text-muted-foreground space-y-1">
                    <span className="inline-flex items-center gap-1">
                      <Building className="h-3.5 w-3.5" />
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {cert.date}
                    </span>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="https://www.credly.com/users/username.60307ca9"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm md:text-base font-medium"
          >
            <ExternalLink className="h-4 w-4" />
            Explore All Badges
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}