"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Software Engineer",
    company: "Kiatnakin Phatra Securities PCL",
    duration: "Sep 2024 – Present",
    highlights: [
      "Developing internal APIs with validation, retry, and structured error handling for onboarding & profile services.",
      "Built standardized internal error code framework for structured debugging and traceability.",
      "Contributed to reusable Go library including logger, validator, retry handler, and middleware.",
      "Mentoring team, increasing test coverage, and improving internal dev tooling."
    ],
    technologies: ["Go", "MySQL", "RabbitMQ"]
  },
  {
    role: "Software Engineer",
    company: "Senestia Co., Ltd.",
    duration: "Apr 2023 – Aug 2024",
    highlights: [
      "Improved uptime monitoring and proactive error detection.",
      "Migrated to GKE with ArgoCD and Rancher, improving deployment speed and reliability.",
      "Introduced IaC framework to streamline infrastructure provisioning.",
      "Implemented full observability using Datadog and OpenTelemetry.",
      "Led HIS (Hospital Information Systems) system design using FHIR and backend for Line-based survey project."
    ],
    technologies: ["Go", "Next.js", "MongoDB", "ArgoCD", "Datadog", "Kubernetes", "Terraform", "Ansible", "GCP"]
  },
  {
    role: "Software Engineer",
    company: "Prodigy9 Co., Ltd.",
    duration: "Jul 2021 – Apr 2023",
    highlights: [
      "Designed crypto bot trading platform with automated and manual flows.",
      "Built e-wallet backend services including merchant onboarding and QR payment.",
      "Implemented CI/CD pipelines using GitHub Actions and ArgoCD.",
      "Developed microservices and infrastructure on AWS, GCP, Linode, DigitalOcean."
    ],
    technologies: ["Go", "Python", "PostgreSQL", "Kubernetes", "ArgoCD", "AWS", "Linode", "DigitalOcean"]
  },
  {
    role: "Cloud Engineer",
    company: "Advanced Info Service PCL",
    duration: "Jul 2020 – Jul 2021",
    highlights: [
      "Managed and monitored AIS IoT cloud infrastructure.",
      "Developed automation scripts for server provisioning.",
      "Monitored performance and implemented system upgrades."
    ],
    technologies: ["Python", "ShellScript", "RedHat", "Nagios", "ELK", "Grafana", "Prometheus", "Huawei Cloud"]
  },
  {
    role: "IoT Software Engineer",
    company: "Internet Thailand PCL",
    duration: "Jul 2018 – Jul 2020",
    highlights: [
      "Developed IoT platforms with MQTT, CoAP protocols.",
      "Built embedded Linux drivers for I2C, SPI, UART devices.",
      "Designed custom enterprise IoT solutions and backend APIs."
    ],
    technologies: ["C","C++", "Cross Compiler", "MQTT", "CoAP", "Node-RED"]
  },
]

export function ExperienceSection() {
  return (
    <section
      id="experiences"
      className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 text-foreground"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-primary"
          >
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            A timeline of roles where I contributed to scalable systems, DevOps automation, and backend excellence.
          </motion.p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.03 }}
              className="border border-border rounded-xl p-6 shadow-sm bg-card hover:shadow-md transition-shadow duration-300 hover:border-primary/70"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="text-xs text-muted-foreground">{exp.duration}</p>
                </div>
                <Briefcase className="text-primary h-5 w-5" />
              </div>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-4">
                {exp.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}