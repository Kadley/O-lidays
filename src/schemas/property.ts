import { z } from 'zod';

export const createPropertySchema = z.object({
  title: z.string().min(5, 'Le titre doit faire au moins 5 caractères'),
  description: z
    .string()
    .min(10, 'La description doit faire au moins 10 caractères'),
  type: z.enum(['APARTMENT', 'HOUSE']),
  location: z.string().min(1, 'Emplacement requis'),
  priceByNight: z.coerce
    .number({
      message: 'Prix invalide',
    })
    .min(1, 'Prix requis'),
  maxPersons: z
    .number({
      message: 'Nombre de personnes invalide',
    })
    .min(1, 'Nombre de personnes requis'),
});

// Je génère le type de mes données à partir du schéma de validation zod
export type CreatePropertySchema = z.infer<typeof createPropertySchema>;
