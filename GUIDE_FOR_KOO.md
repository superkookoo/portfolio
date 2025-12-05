# 🎨 UX/UI 디자이너를 위한 개발 가이드

## 📌 이 포트폴리오에서 변경된 것들

### 1. 기술 스택 변경
기존 정적 HTML 템플릿에서 **현대적인 웹 기술**로 마이그레이션했습니다.

| 이전 | 이후 |
|------|------|
| 순수 HTML/CSS | **Next.js** (React 프레임워크) |
| 일반 CSS | **Tailwind CSS** (유틸리티 CSS) |
| 직접 만든 컴포넌트 | **shadcn/ui** (UI 컴포넌트 라이브러리) |

---

## 🗂️ 프로젝트 구조 (알아두면 좋은 것)

```
portfolio/
├── src/
│   ├── app/           ← 페이지 파일들
│   │   ├── layout.tsx ← 전체 레이아웃 (메타데이터, 폰트 등)
│   │   └── page.tsx   ← 메인 페이지
│   │
│   ├── components/    ← UI 컴포넌트들
│   │   ├── Header.tsx ← 네비게이션 바
│   │   ├── Hero.tsx   ← 인트로 섹션
│   │   ├── About.tsx  ← 소개 섹션
│   │   ├── Portfolio.tsx ← 작품 섹션
│   │   └── Contact.tsx   ← 연락처 섹션
│   │
│   ├── data/          ← 📝 콘텐츠 수정은 여기서!
│   │   ├── about.ts   ← 자기소개, 연락처
│   │   ├── projects.ts ← 프로젝트 목록
│   │   └── experience.ts ← 경력, 학력
│   │
│   └── styles/
│       └── globals.css ← 전역 스타일, 폰트 설정
│
└── public/            ← 이미지, 파일들
    └── images/        ← 프로젝트 이미지들
```

---

## ✏️ 콘텐츠 수정 방법

### 자기소개 수정하기
파일: `src/data/about.ts`

```typescript
export const aboutContent = {
  greeting: '안녕하세요 UI/UX 디자이너 구석영입니다.',  // ← 인사말

  headline: {
    line1: 'Not just pixels.',    // ← 영문 헤드라인
    line2: 'Design in harmony.',
  },

  bio: `여기에 자기소개 내용...`,  // ← 소개글

  contact: {
    email: 'tjrwl92@gmail.com',   // ← 이메일
    phone: '+82 10 8824 3751',    // ← 전화번호
  },
}
```

### 프로젝트 추가/수정하기
파일: `src/data/projects.ts`

```typescript
export const projects = [
  {
    id: 'leica',                    // ← 고유 ID
    title: 'Leica',                 // ← 프로젝트 제목
    category: 'Responsive Website', // ← 카테고리
    description: '설명...',          // ← 설명 (호버 시 표시)
    image: '/images/leica_main.jpg', // ← 이미지 경로
    link: '/project/leica',         // ← 링크
  },
  // 새 프로젝트 추가...
]
```

### 경력/학력 수정하기
파일: `src/data/experience.ts`

---

## 🔤 폰트 설정

### 현재 사용 중인 폰트
- **Pretendard** - 한글 본문 (깔끔한 고딕체)
- **DM Serif Display** - 영문 헤드라인 (세리프체)

### 폰트 변경하려면
파일: `src/styles/globals.css`

```css
/* Pretendard - 한글 폰트 */
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");

body {
  font-family: "Pretendard Variable", Pretendard, ...;
}
```

---

## 🎨 색상 변경하기

파일: `src/styles/globals.css`

```css
:root {
  --background: 0 0% 8%;      /* 배경색 (어두운 회색) */
  --foreground: 0 0% 95%;     /* 텍스트색 (밝은 회색) */
  --primary: 36 72% 70%;      /* 골드 강조색 */
  --muted: 0 0% 17%;          /* 약한 배경색 */
  --muted-foreground: 0 0% 65%; /* 약한 텍스트색 */
}
```

> 💡 색상은 HSL 형식입니다: `색상(Hue) 채도(Saturation)% 명도(Lightness)%`

---

## 🖼️ 이미지 추가하기

1. 이미지를 `public/images/` 폴더에 넣기
2. 코드에서 `/images/파일명.jpg`로 참조

```typescript
// 예시
image: '/images/new-project.jpg',
```

---

## 💻 로컬에서 확인하기

터미널에서:
```bash
npm run dev
```
브라우저에서 http://localhost:3000 접속

---

## 📚 학습 리소스 (한국어)

### Next.js (React 프레임워크)
- 📺 [코딩애플 - Next.js 강의](https://www.youtube.com/watch?v=FG8qLlvJJEQ)
- 📺 [노마드코더 - Next.js 시작하기](https://nomadcoders.co/nextjs-fundamentals)
- 📖 [Next.js 공식 문서 (한글)](https://nextjs-ko.org/)

### Tailwind CSS
- 📺 [코딩애플 - Tailwind CSS](https://www.youtube.com/watch?v=--xwKf0sNGI)
- 📺 [드림코딩 - Tailwind CSS 입문](https://www.youtube.com/watch?v=HdR0VuDSIK4)
- 📖 [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)
- 🎮 [Tailwind Play - 실시간 연습](https://play.tailwindcss.com/)

### React 기초
- 📺 [코딩애플 - React 기초](https://www.youtube.com/watch?v=nahwuaXmgt8)
- 📺 [노마드코더 - React로 영화 웹서비스 만들기](https://nomadcoders.co/react-for-beginners)
- 📖 [React 공식 문서 (한글)](https://ko.react.dev/)

### TypeScript 기초
- 📺 [코딩애플 - TypeScript 기초](https://www.youtube.com/watch?v=xkpcNolC270)
- 📖 [TypeScript Handbook (한글)](https://typescript-kr.github.io/)

### shadcn/ui 컴포넌트
- 📖 [shadcn/ui 공식 사이트](https://ui.shadcn.com/)
- 📖 [컴포넌트 예제들](https://ui.shadcn.com/docs/components/button)

### Figma to Code
- 📺 [Figma에서 코드로 - 실전 가이드](https://www.youtube.com/results?search_query=figma+to+code+한글)

---

## 🚀 배포 (Vercel)

이 프로젝트는 **Vercel**에 자동 배포됩니다.

1. GitHub에 코드 push
2. Vercel이 자동으로 감지하여 배포
3. 몇 분 후 라이브 사이트 업데이트

현재 URL: `portfolio-steve-kappa.vercel.app`

---

## ❓ 자주 묻는 질문

### Q: 코드를 수정했는데 반영이 안돼요
```bash
# 터미널에서 서버 재시작
npm run dev
```

### Q: 이미지가 안 보여요
- 이미지가 `public/images/` 폴더에 있는지 확인
- 파일명에 한글이나 공백이 없는지 확인
- 경로가 `/images/파일명.jpg`로 시작하는지 확인

### Q: 에러가 나요
- 터미널의 에러 메시지 확인
- 빨간색 글씨가 힌트!

---

## 📞 도움이 필요하면

- Claude Code에게 물어보기
- Google에서 에러 메시지 검색
- Stack Overflow 검색

---

*마지막 업데이트: 2025년 12월*
