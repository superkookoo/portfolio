'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LeicaProject() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button asChild variant="outline" size="sm" className="bg-black/50 backdrop-blur-sm border-white/20 hover:border-[#E10217] hover:bg-[#E10217] hover:text-white">
          <Link href="/#works">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>

      {/* Fixed Action Buttons */}
      <div className="fixed right-[15%] bottom-0 z-50 flex flex-col translate-x-[30px]">
        <a
          href="https://www.figma.com/proto/B5NVAYuoi6WwOnbHkWkEM1/%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EB%9D%BC%EC%9D%B4%EC%B9%B4_%EA%B5%AC%EC%84%9D%EC%98%81?page-id=584%3A4822&node-id=765-3834&viewport=1066%2C288%2C0.08&t=HYZNLYabS6rMk2Ud-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=765%3A3834&show-proto-sidebar=1"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[60px] py-5 text-center text-white text-sm animate-pulse-leica"
        >
          View
        </a>
        <button
          onClick={scrollToTop}
          className="block w-[60px] py-5 text-center text-white bg-black"
        >
          <ArrowUp className="w-4 h-4 mx-auto" />
        </button>
      </div>

      {/* Project Image */}
      <div className="w-[70%] mx-auto">
        <Image
          src="/images/leica_port.png"
          alt="Leica Website Redesign"
          width={1920}
          height={10000}
          className="w-full h-auto"
          priority
        />
      </div>

      <style jsx>{`
        @keyframes pulse-leica {
          0% { background: rgba(0,0,0,0.5); }
          50% { background: #E10217; }
          100% { background: rgba(0,0,0,0.5); }
        }
        .animate-pulse-leica {
          animation: pulse-leica 3s infinite;
        }
      `}</style>
    </div>
  )
}
