import VincentAvatar from '$lib/assets/images/people/vincent_huang.png'
import WadeAvatar from '$lib/assets/images/people/wade_wu.png'
import NelsonAvatar from '$lib/assets/images/people/nelson_liu.jpg'
import CarlosAvatar from '$lib/assets/images/people/carlos_li.png'
import DanielAvatar from '$lib/assets/images/people/daniel_lee.jpg'
import ShawnAvatar from '$lib/assets/images/people/shawn_chou.png'

export interface Person {
  name: {
    mandarin: string
    english: string
  }
  title: string
  imageUrl?: string
  expertise: string[]
  headline: string
  story: string
  achievements: string[]
}

export const people: Person[] = [
  {
    "name": {
      "mandarin": "黃健旻",
      "english": "Vincent Huang"
    },
    "title": "Co-founder",
    imageUrl: VincentAvatar,
    headline: '10X Engineer > 10 * 1X Engineers',
    story: 'Coder, Speaker, Mentor and Leader',
    achievements: [
      '2021 加入純函式',
    ],
    "expertise": [
      "JVM Backend",
      "DevOps",
      "Coaching"
    ],
  },
  {
    "name": {
      "mandarin": "吳旻聰",
      "english": "Ｗade Wu"
    },
    "title": "Co-founder",
    imageUrl: WadeAvatar,
    headline: 'Begin each day as if it were on purpose',
    story: 'Coder, Leader, Architect',
    achievements: [
      '2021 加入純函式',
    ],
    "expertise": [
      "JAVA / Python Backend",
      "End-to-End Automation Testing"
    ],
  },
  {
    "name": {
      "mandarin": "劉于誠",
      "english": "Nelson Liu"
    },
    "title": "Co-founder",
    imageUrl: NelsonAvatar,
    headline: 'Sic Parvis Magna',
    story: 'Greatness starts from small beginnings',
    achievements: [
      '2021 加入純函式',
    ],
    "expertise": [
      "JavaScript/TypeScript",
      "React",
      "Flutter"
    ],
  },
  {
    "name": {
      "mandarin": "周震翔",
      "english": "Shawn Chou"
    },
    "title": "Co-founder",
    imageUrl: ShawnAvatar,
    headline: 'play to earn?',
    story: 'Ready to enter the meta universe or whatever-verse',
    achievements: [
      '2021 加入純函式',
    ],
    "expertise": [
      "Java",
      "Crypto Trading System",
      "Blockchain",
      "Making Coffee"
    ],
  },
  {
    "name": {
      "mandarin": "李勇諭",
      "english": "Carlos Li"
    },
    "title": "Co-founder",
    imageUrl: CarlosAvatar,
    headline: 'TDD Follower',
    story: 'The code is always easy to test',
    achievements: [
      '2021 加入純函式',
    ],
    "expertise": [
      "Kotlin/TypeScript",
      "SpringBoot/React/Flutter"
    ],
  },
  {
    "name": {
      "mandarin": "李軒宇",
      "english": "Daniel Lee"
    },
    "title": "Co-founder",
    imageUrl: DanielAvatar,
    headline: 'Talk is cheap. Show me your code',
    story: 'Coder, from better to best',
    achievements: [
      '2021 加入純函式',
    ],
    "expertise": [
      "JavaScript",
      "Vue",
      "Nuxt"
    ]
  },
]
