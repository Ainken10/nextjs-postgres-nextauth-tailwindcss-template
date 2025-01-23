'use client'; // form.tsx

import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';
import { useFormState } from 'react-dom';
import { Validate } from '../../app/validations/tripValidaiton';
import { exampleSchema } from '../../Schemas/exampleSchema';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    DialogFooter
  } from "@/components/ui/dialog"
export function TripEdit() {
  const [lastResult, action] = useFormState(Validate, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: exampleSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className='flex flex-row items-center justify-between'>
            <Label htmlFor={fields.id.key} className="">
              {fields.id.name} 
            </Label>
            <Label htmlFor={fields.id.key} className='text-red-600'>
            {fields.id.errors}
            </Label>
                </div>
              <Input
              id={fields.id.key}
              defaultValue={fields.id.initialValue}
              className="col-span-3"
              name={fields.id.name}
            />
          </div>
          <DialogFooter className='mt-4'>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
    </form>
  );
}