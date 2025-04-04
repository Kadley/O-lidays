import FormFieldInput from '@/components/form/FormFieldInput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useSignup } from '@/hooks/query/auth';
import { authUserAtom } from '@/store/authUser';
import { useForm } from '@tanstack/react-form';
import { useSetAtom } from 'jotai';
import { X } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { z } from 'zod';

const createAccountSchema = z.object({
  name: z.string().min(1, 'Nom requis'),
  email: z.string().email('Email invalide'),
  password: z.string().min(8, '8 caractères minimum'),
});

function CreateAccount() {
  const { mutateAsync: signup, status } = useSignup();
  const setAuthUser = useSetAtom(authUserAtom);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    validators: {
      onChange: createAccountSchema,
    },
    async onSubmit({ value }) {
      const user = await signup(value);

      setAuthUser(user);

      // Redirection vers la page mon compte
      navigate('/account');
    },
  });

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Créer un compte</CardTitle>
          <CardDescription>
            Entrer vos informations pour créer un compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              // form.handleSubmit va exécuter la fonction onSubmit du `useForm`
              form.handleSubmit();
            }}
          >
            {status === 'error' && (
              <div className="flex items-center bg-red-50 text-red-800 rounded-md p-4 text-sm">
                <X className="inline mr-2" />
                Une erreur est survenue lors de la création du compte
              </div>
            )}
            <div className="flex flex-col gap-6">
              <form.Field
                name="name"
                children={(field) => (
                  <FormFieldInput
                    field={field}
                    label="Nom"
                    input={{ type: 'text', placeholder: 'Jean Dupont' }}
                  />
                )}
              />

              <form.Field
                name="email"
                children={(field) => (
                  <FormFieldInput
                    field={field}
                    label="Email"
                    input={{
                      type: 'email',
                      placeholder: 'jean.dupont@test.io',
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
                    {isSubmitting ? 'Création du compte...' : 'Créer un compte'}
                  </Button>
                )}
              />
            </div>
            <div className="mt-4 text-center text-sm">
              Déjà un compte?{' '}
              <Link to="/login" className="underline underline-offset-4">
                Se connecter
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateAccount;
