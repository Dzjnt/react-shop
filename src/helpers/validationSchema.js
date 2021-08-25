import * as Yup from "yup";

export const contactFormSchema = Yup.object().shape({
  nameAndSurname: Yup.string().required("Enter your name and surname"),
  email: Yup.string().email("Incorect Email").required("Enter your email"),
  subject: Yup.string().required("Enter your subject"),
  message: Yup.string()
    .required("Enter your message")
    .min(15, "Too short message"),
  acceptTerms: Yup.bool().oneOf([true], "You must accept terms"),
});
