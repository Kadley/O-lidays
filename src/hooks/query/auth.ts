import { authService } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';

export function useSignin() {
  return useMutation({
    // Pas besoin de clé de requête ici car c'est une mutation, on ne sauvegarde pas le résultat dans le cache
    mutationFn: authService.signin,
  });
}

export function useSignup() {
  return useMutation({
    mutationFn: authService.signup,
  });
}
