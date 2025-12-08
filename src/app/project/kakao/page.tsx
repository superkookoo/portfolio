'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function KakaoProject() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button asChild variant="outline" size="sm" className="bg-black/50 backdrop-blur-sm border-white/20 hover:border-[#0083ff] hover:bg-[#0083ff] hover:text-white">
          <Link href="/#works">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>

      {/* Fixed Action Buttons */}
      <div className="fixed right-[15%] bottom-0 z-50 flex flex-col translate-x-[30px]">
        <a
          href="https://www.figma.com/proto/o0cvRC7x6a7P37ZuQgyVOt/%EA%B5%AC%EC%84%9D%EC%98%81_%EC%B9%B4%EC%B9%B4%EC%98%A4T?page-id=383%3A81&node-id=687-1485&p=f&viewport=-549%2C1310%2C0.17&t=PIft2YGhFYHYiqhB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=821%3A1214"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[60px] py-5 text-center text-white text-sm animate-pulse-kakao"
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
          src="/images/kakao.png"
          alt="Kakao T App Redesign"
          width={1920}
          height={10000}
          className="w-full h-auto"
          priority
        />
      </div>

      <style jsx>{`
        @keyframes pulse-kakao {
          0% { background: rgba(0,0,0,0.5); }
          50% { background: #0083ff; }
          100% { background: rgba(0,0,0,0.5); }
        }
        .animate-pulse-kakao {
          animation: pulse-kakao 3s infinite;
        }
      `}</style>
    </div>
  )
}
