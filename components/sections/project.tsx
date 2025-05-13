"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

type Project = {
  id: number
  title: string
  description: string
  image: string
  color: string
  textColor: string
  details: string
  technologies: string[]
  github: string
  live: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "go-common",
    description: "A common backend framework to standardize and accelerate backend service development.",
    image: "/golang-logo.jpg",
    color: "from-indigo-600 to-purple-600",
    textColor: "text-indigo-100",
    details: "This repository provides a collection of tools, patterns, and libraries used to build backend API services consistently. It includes features like logging, error handling, tracing, middleware, structured validation, and more. Designed to work well with Go-based clean architecture.",
    technologies: ["Golang", "Gin", "OpenTelemetry", "etc."],
    github: "https://github.com/kittipat1413/go-common",
    live: "https://kittipat1413.gitbook.io/go-common",
  },
  {
    id: 2,
    title: "Ticket Reservation System",
    description: "A clean architecture-based concert ticket booking system with seat selection and payments.",
    image: "/tickets-reservation.png",
    color: "from-blue-600 to-sky-500",
    textColor: "text-blue-100",
    details: "This is a simple yet powerful demo of a real-world Go backend using go-common. It features domain-driven design, layered architecture, Redis-based seat locking, and transactional booking flows. Built to demonstrate reusable backend patterns.",
    technologies: ["Golang", "Clean Architecture", "Redis", "PostgreSQL", "go-common"],
    github: "https://github.com/kittipat1413/ticket-reservation",
    live: "",
  },
  {
    id: 3,
    title: "Social Media Analytics Dashboard",
    description: "Dashboard for visualizing social media engagement across Facebook, YouTube, Instagram, and Twitter.",
    image: "plotly-dash.jpg",
    color: "from-pink-600 to-rose-500",
    textColor: "text-pink-100",
    details:
      "This web-based dashboard uses Python, Dash, and Plotly to parse and visualize engagement data such as likes, shares, and impressions from multiple social media sources. It provides insights for content performance across platforms.",
    technologies: ["Python", "Dash", "Plotly", "Social APIs"],
    github: "https://github.com/kittipat1413/Social-media-analytics",
    live: "",
  },
  {
    id: 4,
    title: "ESP8266 Modbus RTU Library",
    description: "C++ library for ESP8266 microcontroller to communicate over Modbus RTU via serial.",
    image: "modbus.jpg",
    color: "from-amber-600 to-yellow-500",
    textColor: "text-yellow-100",
    details:
      "This lightweight Modbus RTU implementation enables the ESP8266 to act as a Modbus client, supporting data frame encoding and transmission over UART. Useful for IoT devices needing industrial protocol support.",
    technologies: ["ESP8266", "C++", "Modbus RTU", "Serial Communication"],
    github: "https://github.com/kittipat1413/Esp8266_Modbus",
    live: "",
  },
  {
    id: 5,
    title: "Omron D6T Temperature Sensor Library",
    description: "C library to interface with Omron D6T thermal sensor via I2C, developed during the COVID-19 pandemic.",
    image: "omronD6T.jpg",
    color: "from-gray-700 to-gray-500",
    textColor: "text-gray-100",
    details:
      "This C library communicates with the Omron D6T series thermal sensors over the I2C protocol. It was developed to support non-contact temperature sensing for embedded applications such as health monitoring devices.",
    technologies: ["C", "I2C", "Embedded Systems", "Omron D6T"],
    github: "https://github.com/kittipat1413/Omron_D6T",
    live: "",
  }
]

export function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-br from-background to-secondary/30 transition-colors duration-300 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 container mx-auto px-4"
      >
        <div className="container mx-auto px-4 z-10">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold mb-6 text-primary"
            >
              Featured Projects
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Discover projects that reflect my expertise in backend systems, developer tooling, and practical software architecture.
            </motion.p>
          </div>

          {/* Project Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group border border-muted rounded-xl p-6 bg-card shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/70"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded-full group-hover:bg-primary/10 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
                        <Button variant="ghost" size="icon" className="hover:text-primary">
                          <FaGithub className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                      >
                        <Button variant="ghost" size="icon" className="hover:text-primary">
                          <FaExternalLinkAlt className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <Dialog
            open={!!selectedProject}
            onOpenChange={() => setSelectedProject(null)}
          >
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4">{selectedProject.details}</p>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}