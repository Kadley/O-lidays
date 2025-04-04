import FormFieldInput from '@/components/form/FormFieldInput';
import FormFieldNumber from '@/components/form/FormFieldNumber';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useCreateProperty } from '@/hooks/query/property';
import {
  createPropertySchema,
  type CreatePropertySchema,
} from '@/schemas/property';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from 'react-router';

function CreateProperty() {
  const { mutateAsync: createProperty, status } = useCreateProperty();

  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      type: 'APARTMENT',
      location: '',
      priceByNight: 0,
      maxPersons: 1,
    } as CreatePropertySchema,
    validators: {
      onChange: createPropertySchema,
    },
    async onSubmit({ value }) {
      await createProperty(value);

      navigate('/account/properties');
    },
  });
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Créer une propriété</CardTitle>
          <CardDescription>
            Entrez les informations pour créer une propriété
          </CardDescription>
        </CardHeader>
        <CardContent>
          {status === 'error' && (
            <div className="text-red-500">
              Une erreur est survenue lors de la création de la propriété.
            </div>
          )}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              form.handleSubmit();
            }}
            className="flex flex-col gap-2"
          >
            <form.Field
              name="title"
              children={(field) => (
                <FormFieldInput
                  field={field}
                  label="Titre"
                  input={{
                    type: 'text',
                    placeholder: 'Titre de la propriété',
                  }}
                />
              )}
            />
            <form.Field
              name="description"
              children={(field) => (
                <FormFieldInput
                  field={field}
                  label="Description"
                  input={{
                    type: 'text',
                    placeholder: 'Description de la propriété',
                  }}
                />
              )}
            />

            <form.Field
              name="location"
              children={(field) => (
                <FormFieldInput
                  field={field}
                  label="Emplacement"
                  input={{
                    type: 'text',
                    placeholder: 'Emplacement de la propriété',
                  }}
                />
              )}
            />

            <form.Field
              name="priceByNight"
              children={(field) => (
                <FormFieldNumber
                  field={field}
                  label="Prix par nuit"
                  input={{
                    placeholder: '100.50',
                  }}
                />
              )}
            />

            <form.Field
              name="maxPersons"
              children={(field) => (
                <FormFieldNumber
                  field={field}
                  label="Nombre de personnes maximal"
                  input={{
                    placeholder: '5',
                  }}
                />
              )}
            />

            <form.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <Button type="submit" className="w-full" disabled={!canSubmit}>
                  {isSubmitting
                    ? 'Création de la propriété...'
                    : 'Créer la propriété'}
                </Button>
              )}
            />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CreateProperty;
