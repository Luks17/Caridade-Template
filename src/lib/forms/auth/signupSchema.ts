import * as yup from "yup";

export const signupSchema = yup.object({
  email: yup.string().email().required(),
  nome: yup.string().required(),
  passwd: yup.string().required(),
});

export type SignupFormData = yup.InferType<typeof signupSchema>;
