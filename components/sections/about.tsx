"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaDownload, FaGithub, FaLinkedin, FaMedium, FaDev } from 'react-icons/fa'
import { SiCredly } from "react-icons/si";
import Image from "next/image"

const skillGroups = [
  {
    title: "Languages",
    skills: ["Golang", "Python", "TypeScript", "JavaScript", "C++", "C"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firestore"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Terraform", "Ansible", "Docker", "Kubernetes", "ArgoCD", "Rancher", "GitHub Actions", "GitLab CI"],
  },
  {
    title: "Cloud Platforms",
    skills: ["GCP", "AWS", "DigitalOcean", "Linode", "Huawei Cloud"],
  },
]

const interests = [
  { icon: "🧠", label: "System Design" },
  { icon: "📘", label: "Writing Technical Blogs" },
  { icon: "🎮", label: "Gaming" },
  { icon: "🌍", label: "Traveling" },
]

const floatingAnimation = {
  y: ["-10%", "10%"],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
}

export function AboutSection() {
  const [showBio, setShowBio] = useState(false)

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-secondary/30 overflow-hidden">
      <div className="container px-4 mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2 items-center"
        >
          {/* Image Column */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src="/profile.jpg"
                alt="Kittipat Poonyakariyakorn"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary rounded-full"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full"
              animate={floatingAnimation}
            />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">About Me</h2>
              <AnimatePresence mode="wait">
                {showBio ? (
                  <motion.p
                    key="full-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    I’m a software engineer with a strong focus on backend architecture, system design, and developer experience. Over the years, I’ve worked across the stack — from designing clean APIs and distributed systems to deploying infrastructure in the cloud.
                    My toolbox includes Go, Python, TypeScript, PostgreSQL, Redis, Docker, Kubernetes, and cloud platforms like GCP, AWS, and DigitalOcean. I care deeply about clean architecture, automation, and writing code that’s both readable and resilient.
                    Outside of coding, I enjoy writing technical blogs to share what I’ve learned, exploring system design concepts, and occasionally losing myself in games or travel. I’m always curious, always learning, and always building.
                  </motion.p>
                ) : (
                  <motion.p
                    key="short-bio"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    I’m a software engineer passionate about building reliable, scalable systems and crafting clean, maintainable code. I love turning complex problems into simple, elegant solutions.
                  </motion.p>
                )}
              </AnimatePresence>
              <Button
                variant="link"
                onClick={() => setShowBio(!showBio)}
                className="mt-2 p-0 h-auto font-semibold text-primary hover:text-primary/80"
              >
                {showBio ? "Read Less" : "Read More"}
              </Button>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold">Core Skills</h3>

              <div className="space-y-4">
                {skillGroups.map((group, groupIndex) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">{group.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-2 p-2 bg-secondary/30 rounded-md"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-sm text-secondary-foreground">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4"
            >
              {/* CV Button */}
              <div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <FaDownload className="mr-2 h-4 w-4" />
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" download>Download CV</a>
                </Button>
              </div>

              {/* Socials */}
              <div className="flex gap-4 sm:ml-4">
                <Button variant="ghost" size="icon" className="hover:bg-muted/10 hover:scale-110 transition-transform">
                  <a href="https://github.com/kittipat1413" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-muted/10 hover:scale-110 transition-transform">
                  <a href="https://th.linkedin.com/in/kittipat-poonyakariyakorn-795389187" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-muted/10 hover:scale-110 transition-transform">
                  <a href="https://www.credly.com/users/username.60307ca9" target="_blank" rel="noopener noreferrer">
                    <SiCredly className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-muted/10 hover:scale-110 transition-transform">
                  <a href="https://medium.com/@kittipat_1413" target="_blank" rel="noopener noreferrer">
                    <FaMedium className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-muted/10 hover:scale-110 transition-transform">
                  <a href="https://dev.to/kittipat1413" target="_blank" rel="noopener noreferrer">
                    <FaDev className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
