import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: '/images/blog-1.jpg',
    category: 'Normativa',
    date: 'Enero 23, 2025',
    title: 'Empalmes mecánicos vs traslapes tradicionales: ventajas y costos',
    excerpt: 'Comparamos ambos métodos en términos de costo, tiempo y resistencia estructural.',
  },
  {
    id: 2,
    image: '/images/blog-2.jpg',
    category: 'Eficiencia',
    date: 'Enero 23, 2025',
    title: 'Cómo cumplir NSR2010 en zonas sísmicas con conectores tipo 2',
    excerpt: 'Guía práctica para ingenieros que necesitan cumplir normativa en proyectos sísmicos.',
  },
];
