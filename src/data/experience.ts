export interface TimelineItem {
  id: string
  title: string
  subtitle: string
  period: string
  description?: string
}

export const experience: TimelineItem[] = [
  {
    id: 'exp-1',
    title: '(주) 기어라운지',
    subtitle: '대리점 유지보수 및 납품담당, 사내 물류팀 관리',
    period: '2020.10 - 2024.10',
  },
  {
    id: 'exp-2',
    title: '(주) 동진특송',
    subtitle: '문서실 사무보조',
    period: '2019.06 - 2020.02',
  },
  {
    id: 'exp-3',
    title: '(주) 동진특송',
    subtitle: '문서실 사무보조',
    period: '2017.02 - 2019.03',
  },
]

export const education: TimelineItem[] = [
  {
    id: 'edu-1',
    title: '추계예술대학교',
    subtitle: '실용음악계열 기악 전공',
    period: '2017.08',
  },
]
