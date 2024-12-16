'use server';

type FormErrors = {
  text?: string;
  textarea?: string;
  select?: string;
  multiSelect?: string;
  checkbox?: string;
  radio?: string;
}

export type FormState = {
  message: string | null;
  errors?: FormErrors;
  formData?: FormData | null;
};

export async function formHandler(prevState: FormState, formData: FormData) {
  console.log('Form data:', formData);

  const errors = validateForm(formData);
  if (Object.keys(errors).length > 0) {
    return { message: 'Form submition failed!', errors, formData };
  }

  return { message: 'Form submitted successfully' };
}

function validateForm(formData: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!formData.get('text')) {
    errors.text = 'Text is required';
  }

  if (!formData.get('textarea')) {
    errors.textarea = 'Textarea is required';
  }

  if (!formData.get('select')) {
    errors.select = 'Select is required';
  }

  if (!formData.get('multi-select')) {
    errors.multiSelect = 'Multi Select is required';
  }

  if (!formData.get('radio')) {
    errors.radio = 'Radio is required';
  }

  return errors;
}