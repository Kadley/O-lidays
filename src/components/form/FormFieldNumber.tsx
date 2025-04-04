import { Label } from '@radix-ui/react-label';
import type { AnyFieldApi } from '@tanstack/react-form';
import { type ComponentProps, useId } from 'react';
import { Input } from '../ui/input';

interface FormFieldNumberProps {
  field: AnyFieldApi;
  input: ComponentProps<'input'>;
  label: string;
}

function FormFieldNumber({ field, input, label }: FormFieldNumberProps) {
  const id = useId();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value === '') {
      field.handleChange(null);
      return;
    }
    field.handleChange(Number(event.target.value));
  }
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={field.state.value}
        onChange={handleChange}
        disabled={field.form.state.isSubmitting}
        type="number"
        {...input}
      />
      {field.state.meta.isDirty && field.state.meta.errors.length > 0 && (
        <em className="text-red-500 text-sm">
          {field.state.meta.errors.map((error) => error?.message).join(', ')}
        </em>
      )}
    </div>
  );
}

export default FormFieldNumber;
