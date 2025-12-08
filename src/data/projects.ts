export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  link: string
}

export const projects: Project[] = [
  {
    id: 'wwf',
    title: 'WWF',
    category: 'Website Redesign',
    description: 'WWF 웹사이트 리디자인뿐 아니라, static으로 직접 구현까지 완료했습니다. 코딩 결과물은 오른쪽 하단 "View" 버튼을 통해 확인하실 수 있습니다.',
    image: '/images/wwf_site_mockup.jpg',
    link: '/project/wwf',
  },
  {
    id: 'leica',
    title: 'Leica',
    category: 'Responsive Website',
    description: 'Leica의 브랜드 정체성을 강화하는 방향으로 웹사이트를 리디자인했습니다.',
    image: '/images/leica_main.jpg',
    link: '/project/leica',
  },
  {
    id: 'kakao',
    title: 'Kakao T',
    category: 'Mobile Application Redesign',
    description: 'Kakao T 앱에서 택시 호출 기능만을 별도로 분리해, 핵심 사용자 흐름에 집중한 UI 중심으로 리디자인하였습니다.',
    image: '/images/kakao_splash.jpg',
    link: '/project/kakao',
  },
  {
    id: 'pokemon',
    title: 'Lotteworld x Pokemon',
    category: 'Promotion',
    description: '기존의 롯데월드 X 포켓몬스터 콜라보레이션을 새로운 시각으로 재해석하여 프로모션 페이지를 구성했습니다. 전체 톤앤매너에 맞춰 페이지 하단에는 색감을 고려한 트래블 포스터를 배치해 시각적 완성도를 더했습니다.',
    image: '/images/lotte_pokemon.jpg',
    link: '/project/pokemon',
  },
]
