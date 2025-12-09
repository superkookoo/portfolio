import Image from 'next/image'
import { Metadata } from 'next'
import { BackButton, ActionButtons } from '@/components/ProjectButtons'

export const metadata: Metadata = {
  title: 'Lotteworld x Pokemon - 구석영 포트폴리오',
  description: '롯데월드 x 포켓몬스터 프로모션 페이지 디자인',
}

export default function PokemonProject() {
  return (
    <div className="min-h-screen bg-white">
      <BackButton accentColor="#857bc9" />
      <ActionButtons
        viewLink="/images/pokemon_promotion.jpg"
        accentColor="#857bc9"
      />

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
    </div>
  )
}
