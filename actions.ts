'use server';

type FormValues = {
  text?: string;
  textarea?: string;
  select?: string;
  multiSelect?: string[];
  checkbox?: boolean;
  radio?: string;
}

type FormErrors = {
  text?: string;
  textarea?: string;
  select?: string;
  multiSelect?: string;
  radio?: string;
}

export type FormState = {
  success: boolean;
  values?: FormValues;
  errors?: FormErrors;
  message?: string;
}

export async function formHandler(prevState: FormState, formData: FormData): Promise<FormState> {

  const values: FormValues = {
    text: formData.get('text')?.toString(),
    textarea: formData.get('textarea')?.toString(),
    select: formData.get('select')?.toString(),
    multiSelect: formData.getAll('multiSelect').map(value => value.toString()),
    checkbox: !!formData.get('checkbox'),
    radio: formData.get('radio')?.toString()
  };

  const errors = validateForm(values);

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Form submission failed',
      values,
      errors
    };
  }

  await processData(values);
  
  return { success: true, message: 'Form submitted successfully' };
}

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.text) {
    errors.text = 'Text is required';
  }

  if (!values.textarea) {
    errors.textarea = 'Textarea is required';
  }

  if (!values.select) {
    errors.select = 'Select is required';
  }

  if (values.multiSelect?.length === 0) {
    errors.multiSelect = 'Multi-select is required';
  }

  if (!values.radio) {
    errors.radio = 'Radio is required';
  }

  return errors;
}

async function processData(values: FormValues) {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log('Processing form data : ', values);
}