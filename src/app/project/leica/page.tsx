import Image from 'next/image'
import { Metadata } from 'next'
import { BackButton, ActionButtons } from '@/components/ProjectButtons'

export const metadata: Metadata = {
  title: 'Leica - 구석영 포트폴리오',
  description: 'Leica 반응형 웹사이트 리디자인 프로젝트',
}

export default function LeicaProject() {
  return (
    <div className="min-h-screen bg-black">
      <BackButton accentColor="#E10217" />
      <ActionButtons
        viewLink="https://www.figma.com/proto/B5NVAYuoi6WwOnbHkWkEM1/%EB%B0%98%EC%9D%91%ED%98%95%EC%9B%B9_%EB%9D%BC%EC%9D%B4%EC%B9%B4_%EA%B5%AC%EC%84%9D%EC%98%81?page-id=584%3A4822&node-id=765-3834&viewport=1066%2C288%2C0.08&t=HYZNLYabS6rMk2Ud-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=765%3A3834&show-proto-sidebar=1"
        accentColor="#E10217"
      />

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
    </div>
  )
}
