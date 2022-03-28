import VincentAvatar from '$lib/assets/images/people/vincent_huang.png'
import WadeAvatar from '$lib/assets/images/people/wade_wu.png'
import NelsonAvatar from '$lib/assets/images/people/nelson_liu.png'
import CarlosAvatar from '$lib/assets/images/people/carlos_li.png'
import DanielAvatar from '$lib/assets/images/people/daniel_lee.png'
import ShawnAvatar from '$lib/assets/images/people/shawn_chou.png'

export interface Person {
  name: {
    mandarin: string
    english: string
  }
  title: string
  imageUrl?: string
  expertise: string[]
}

export const people: Person[] = [
  {
    "name": {
      "mandarin": "黃健旻",
      "english": "Vincent Huang"
    },
    "title": "Co-founder",
    imageUrl: VincentAvatar,
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
    "expertise": [
      "JavaScript",
      "Vue",
      "Nuxt"
    ]
  },
]
