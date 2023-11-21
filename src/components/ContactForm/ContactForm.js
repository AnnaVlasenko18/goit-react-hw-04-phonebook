import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Wrapper,
  FormLabel,
  ErrMsg,
  InputForm,
  FormContact,
  AddContact,
} from './ContactForm.styled';

const phoneRegExp = /^(\+?\d+)?\s*(\(\d+\))?[\s-]*([\d-]*)$/;
const nameRegExp = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(nameRegExp, 'The name must contain only letters')
    .min(2, 'Too Short!')
    .required('Required!'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Enter the number in the format "XXX-XX-XX"')
    .min(7, 'Too short! XXX-XX-XX')
    .max(9, 'Too long! XXX-XX-XX')
    .required('Required!'),
});

export const ContactForm = ({ onAddContact }) => {
  return (
    <Wrapper>
      <Formik
        initialValues={{
          firstName: '',
          tel: '',
        }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onAddContact(values);
          actions.resetForm();
        }}
      >
        <FormContact>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <InputForm id="firstName" name="firstName" placeholder="" />
          <ErrMsg name="firstName" component="div" />

          <FormLabel htmlFor="tel">Number</FormLabel>
          <InputForm id="tel" name="tel" placeholder="XXX-XX-XX" type="tel" />
          <ErrMsg name="tel" component="div" />

          <AddContact type="submit">Add contact</AddContact>
        </FormContact>
      </Formik>
    </Wrapper>
  );
};
