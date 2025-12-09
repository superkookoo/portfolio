import Image from 'next/image'
import { Metadata } from 'next'
import { BackButton, ActionButtons } from '@/components/ProjectButtons'

export const metadata: Metadata = {
  title: 'WWF Korea - 구석영 포트폴리오',
  description: 'WWF 웹사이트 리디자인 프로젝트',
}

export default function WWFProject() {
  return (
    <div className="min-h-screen bg-black">
      <BackButton accentColor="#D7FA29" />
      <ActionButtons
        viewLink="https://superkookoo.github.io/portfolio/project/static_wwf/index.html"
        accentColor="#D7FA29"
      />

      <div className="w-[70%] mx-auto">
        <Image
          src="/images/wwf.png"
          alt="WWF Korea Website Redesign"
          width={1920}
          height={10000}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  )
}
