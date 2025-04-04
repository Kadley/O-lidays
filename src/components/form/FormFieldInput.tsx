import { Label } from '@radix-ui/react-label';
import type { AnyFieldApi } from '@tanstack/react-form';
import { type ComponentProps, useId } from 'react';
import { Input } from '../ui/input';

interface FormFieldInputProps {
  field: AnyFieldApi;
  input: ComponentProps<'input'>;
  label: string;
}

function FormFieldInput({ field, input, label }: FormFieldInputProps) {
  const id = useId();
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        value={field.state.value}
        onChange={(event) => field.handleChange(event.target.value)}
        disabled={field.form.state.isSubmitting}
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

export default FormFieldInput;
