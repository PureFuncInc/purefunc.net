export interface Person {
  name: {
    mandarin: string
    english: string
  }
  title: string
  expertise: string[]
}

export const people: Person[] = [
  {
    "name": {
      "mandarin": "黃健旻",
      "english": "Vincent Huang"
    },
    "title": "Co-founder",
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
    "expertise": [
      "JavaScript",
      "Vue",
      "Nuxt"
    ]
  },
]
