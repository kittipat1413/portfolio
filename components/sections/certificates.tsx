"use client"

import { motion } from "framer-motion"

const certificates = [
  {
    title: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    date: "Feb 2025",
    link: "https://www.credly.com/badges/639f0772-d0c4-42e2-86d1-61ca0ac8754f",
  },
  {
    title: "GitHub Actions",
    issuer: "GitHub",
    date: "Mar 2025",
    link: "https://www.credly.com/badges/0586d2f1-4a84-4931-93cc-28fe7274b3ec",
  },
  {
    title: "Google Cloud Cybersecurity Certificate",
    issuer: "Google Cloud",
    date: "Apr 2025",
    link: "https://www.credly.com/badges/05d15dfa-6d4f-41a7-bd63-5cc66dc09e55",
  },
]

export function CertificateSection() {
  return (
    <section
  id="certificates"
  className="py-24 bg-gradient-to-br from-background to-secondary overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-primary"
          >
            My Certificates
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            A selection of certifications I've earned in cloud, DevOps, and security domains.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.03 }}
              className="rounded-lg border border-muted bg-card p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}