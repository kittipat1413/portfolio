'use client'

import { SiGithub, SiLinkedin, SiGmail, SiMedium, SiDevdotto } from "react-icons/si"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background text-foreground py-10">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">

        {/* Left: Profile + Info */}
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <div className="relative">
            <Image
              src="/footer.jpg"
              alt="Kittipat Poonyakariyakorn"
              width={60}
              height={60}
              className="rounded-full border-2 border-primary shadow-md"
            />
          </div>
          <div className="text-sm">
            <p className="font-semibold">Kittipat Poonyakariyakorn</p>
            <p className="text-muted-foreground">Software Engineer</p>
            <p className="text-muted-foreground">
              Email: <a href="mailto:k.poonyakariyakorn@gmail.com" className="hover:underline">k.poonyakariyakorn@gmail.com</a>
            </p>
            <p className="text-muted-foreground">
              Phone: <a href="tel:+66837156261" className="hover:underline">+66 837 156 261</a>
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Inspired by <a href="https://github.com/aniruddhaadak80/Folio-Motion" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">aniruddhaadak80/Folio-Motion</a>
            </p>
          </div>
        </div>

        {/* Right: Social Links with brand colors */}
        <div className="flex space-x-4">
          <Link href="https://github.com/kittipat1413" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-[#181717] dark:text-white hover:bg-muted/10">
              <span className="sr-only">GitHub</span>
              <SiGithub className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/kittipat-poonyakariyakorn-795389187" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-[#0077B5] dark:text-white hover:bg-muted/10">
              <span className="sr-only">LinkedIn</span>
              <SiLinkedin className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="mailto:k.poonyakariyakorn@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-[#D14836] dark:text-white hover:bg-muted/10">
              <span className="sr-only">Gmail</span>
              <SiGmail className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://medium.com/@kittipat_1413" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-[#000000] dark:text-white hover:bg-muted/10">
              <span className="sr-only">Medium</span>
              <SiMedium className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="https://dev.to/kittipat1413" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-[#0A0A0A] dark:text-white hover:bg-muted/10">
              <span className="sr-only">Dev.to</span>
              <SiDevdotto className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  )
}