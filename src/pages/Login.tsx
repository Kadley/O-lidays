import FormFieldInput from '@/components/form/FormFieldInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useSignin } from '@/hooks/query/auth';
import { authUserAtom } from '@/store/authUser';
import { useForm } from '@tanstack/react-form';
import { useSetAtom } from 'jotai';
import { X } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(8, '8 caractères minimum'),
});

function Login() {
  // mutateAsync => la fonction passée dans le useMutation
  // Ici je renomme cette fonction `signin` pour que ce soit plus clair
  const { mutateAsync: signin, error } = useSignin();

  // const [authUser, setAuthUser] = useAtom(authUserAtom);
  // const authUser = useAtomValue(authUserAtom);
  const setAuthUser = useSetAtom(authUserAtom);

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    validators: {
      onChange: loginSchema,
    },
    async onSubmit({ value }) {
      const user = await signin(value);

      // Je vais vouloir sauvegarder les données de l'utilisateur de manière globale
      // Pour ça, je vais utiliser un atom de jotai
      setAuthUser(user);

      // Redirection vers la page mon compte
      navigate('/account');
    },
  });

  return (
    <div className="flex flex-col gap-6 mt-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Se connecter</CardTitle>
          <CardDescription>
            Entrez votre email ci-dessous pour vous connecter à votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // J'utilise la fonction `onSubmit` de `useForm` pour valider le formulaire grâce à `handleSubmit`
              form.handleSubmit();
            }}
          >
            <div className="flex flex-col gap-6">
              {error && (
                <div className="flex items-center bg-red-50 text-red-800 rounded-md p-4 text-sm">
                  <X className="inline mr-2" />
                  Mail ou mot de passe incorrect
                </div>
              )}

              <form.Field
                name="email"
                children={(field) => (
                  <FormFieldInput
                    field={field}
                    label="Email"
                    input={{
                      type: 'email',
                      placeholder: 'jean.dupont@example.fr',
                    }}
                  />
                )}
              />

              <form.Field
                name="password"
                children={(field) => (
                  <FormFieldInput
                    field={field}
                    label="Password"
                    input={{
                      type: 'password',
                      placeholder: '********',
                    }}
                  />
                )}
              />

              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={!canSubmit}
                  >
                    {isSubmitting ? 'Connexion...' : 'Se connecter'}
                  </Button>
                )}
              />
            </div>
            <div className="mt-4 text-center text-sm">
              Pas encore de compte?{' '}
              <Link to="/signup" className="underline underline-offset-4">
                Créer un compte
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
