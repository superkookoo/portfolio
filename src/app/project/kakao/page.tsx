import Image from 'next/image'
import { Metadata } from 'next'
import { BackButton, ActionButtons } from '@/components/ProjectButtons'

export const metadata: Metadata = {
  title: 'Kakao T - 구석영 포트폴리오',
  description: 'Kakao T 모바일 앱 리디자인 프로젝트',
}

export default function KakaoProject() {
  return (
    <div className="min-h-screen bg-black">
      <BackButton accentColor="#0083ff" />
      <ActionButtons
        viewLink="https://www.figma.com/proto/o0cvRC7x6a7P37ZuQgyVOt/%EA%B5%AC%EC%84%9D%EC%98%81_%EC%B9%B4%EC%B9%B4%EC%98%A4T?page-id=383%3A81&node-id=687-1485&p=f&viewport=-549%2C1310%2C0.17&t=PIft2YGhFYHYiqhB-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=821%3A1214"
        accentColor="#0083ff"
      />

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
    </div>
  )
}
