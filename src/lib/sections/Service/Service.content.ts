export interface Service {
  id: number;
  name: string;

  imageUrl?: string;
}

export const services: Service[] = [
  {
    id: 1,
    imageUrl: '/images/placeholder.png',
    name: '系統接案',
  },
  {
    id: 2,
    imageUrl: '/images/placeholder.png',
    name: '訓練及課程',
  },
  {
    id: 3,
    imageUrl: '/images/placeholder.png',
    name: '技術顧問',
  },
]
