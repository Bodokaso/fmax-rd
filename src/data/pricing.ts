import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: 'Básico',
    subtitle: 'Ideal para proyectos pequeños',
    price: 49,
    period: 'Mensual',
    featured: false,
    features: [
      'Reparaciones menores',
      'Actualización de salidas',
      'Instalación de luminarias',
      'Inspección de seguridad',
    ],
  },
  {
    id: 2,
    name: 'Estándar',
    subtitle: 'Para proyectos medianos',
    price: 149,
    period: 'Mensual',
    featured: true,
    features: [
      'Inspección eléctrica completa',
      'Actualización de tableros',
      'Instalación de iluminación',
      'Protección contra sobretensión',
    ],
  },
  {
    id: 3,
    name: 'Premium',
    subtitle: 'Para obras de gran escala',
    price: 299,
    period: 'Mensual',
    featured: false,
    features: [
      'Recableado completo',
      'Instalación domótica',
      'Servicio de emergencia prioritario',
      'Soluciones de respaldo de energía',
    ],
  },
];
