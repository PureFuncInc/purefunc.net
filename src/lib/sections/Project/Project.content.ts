export interface Project {
  id: number;
  name: string;

  imageUrl?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    imageUrl: '/images/placeholder.png',
    name: 'cryptosaas.net',
    link: 'https://cryptosaas.net/'
  },
  {
    id: 2,
    imageUrl: '/images/placeholder.png',
    name: '$_purefunc Custom Protocol',
  },
]
