'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PokemonProject() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button asChild variant="outline" size="sm" className="bg-white/50 backdrop-blur-sm border-black/20 hover:border-[#857bc9] hover:bg-[#857bc9] hover:text-white">
          <Link href="/#works">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>

      {/* Fixed Action Buttons */}
      <div className="fixed right-[15%] bottom-0 z-50 flex flex-col translate-x-[30px]">
        <a
          href="/images/pokemon_promotion.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[60px] py-5 text-center text-white text-sm animate-pulse-pokemon"
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
          src="/images/lotte_x_pokemon.jpg"
          alt="Lotteworld x Pokemon Promotion"
          width={1920}
          height={10000}
          className="w-full h-auto"
          priority
        />
      </div>

      <style jsx>{`
        @keyframes pulse-pokemon {
          0% { background: rgba(0,0,0,0.5); }
          50% { background: #857bc9; }
          100% { background: rgba(0,0,0,0.5); }
        }
        .animate-pulse-pokemon {
          animation: pulse-pokemon 3s infinite;
        }
      `}</style>
    </div>
  )
}
