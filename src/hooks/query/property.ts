import { propertyService } from '@/services/property';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const propertyKeys = {
  all: ['properties'] as const,
};

export function useProperties() {
  return useQuery({
    queryKey: propertyKeys.all,
    queryFn: propertyService.getAllProperties,
  });
}

export function useProperty(id: number) {
  return useQuery({
    queryKey: [...propertyKeys.all, id],
    queryFn: () => propertyService.getOneProperty(id),
  });
}

export function useMyProperties() {
  return useQuery({
    queryKey: [...propertyKeys.all, 'myProperties'],
    queryFn: propertyService.getMyProperties,
  });
}

export function useCreateProperty() {
  // Le client est ce qui permet de gérer le cache des requêtes
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: propertyService.createProperty,
    onSuccess() {
      // Lors de la création d'une propriété, je vais techniquement vouloir mettre à jour les données dans le cache pour les requêtes suivantes

      // Le exact permet de ne pas supprimer le cache des requêtes qui contiennent le même nom de clé
      // Ici je ne retire pas le cache des requêtes pour le détail d'une propriété

      // La requête qui récupère toutes les propriétés
      queryClient.invalidateQueries({
        queryKey: propertyKeys.all,
        exact: true,
      });

      // La requête qui récupère mes propriétés
      queryClient.invalidateQueries({
        queryKey: [...propertyKeys.all, 'myProperties'],
        exact: true,
      });
    },
  });
}
