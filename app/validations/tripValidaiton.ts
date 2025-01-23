'use server'; // action.ts

import { redirect } from 'next/navigation';
import { parseWithZod } from '@conform-to/zod';
import { exampleSchema } from '../../Schemas/exampleSchema';

export async function Validate(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: exampleSchema,
  });

  if (submission.status !== 'success') {
    console.log(" not success");
    return submission.reply();
  }

  console.log("success");
}