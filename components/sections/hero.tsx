"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center"
          >
            <span>Hi, my name is </span>
            <span className="block md:inline text-primary">Kittipat Poonyakariyakorn</span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 text-center max-w-2xl mx-auto"
          >
            I’m a software engineer who loves building scalable backend systems, designing intuitive APIs, and sharing knowledge through technical writing.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 h-[60px]"
          >
            <TypeAnimation
              sequence={[
                "Backend • APIs • DevOps • Cloud",
                2000,
                "System Design Enthusiast",
                2000,
                "Open Source Contributor",
                2000,
                "Technical Blogger",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <Link href={"/#projects"}>
              <Button size="lg" className="group">
                View Projects
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            </Link>
            <Link href={"/#about"}>
              <Button size="lg" variant="outline">
                About Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </motion.div>
    </motion.section>
  )
}
