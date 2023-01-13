import React from 'react';
import * as Yup from 'yup';
// import { FiPhone, FiUser } from "react-icons/fi";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { FormStyled, FieldStyled, Label, Button } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getItems } from 'redux/selectors';



const schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.number().required().positive().integer(),
});

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={massege => <p>{massege}</p>} />;
};

const ContactForm = () => {
  const contacts = useSelector(getItems)
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  
  const handleSubmit = (values, { resetForm }) => {
    let existName = false;
    if (contacts && contacts.length > 0) {
      contacts.forEach(({ name }) => {
  if (values.name.toLowerCase() === name.toLowerCase()) {
    Report.failure(`${existName} is already in contacts`);
    existName = true;
  }
})
    }
    if (!existName) {
      values.id = nanoid()
    dispatch(addContacts(values))
    }
          resetForm();
  };
  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <Label htmlFor={nameId}>
          Name
          <FieldStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormError FormError name="name" />
        </Label>

        <Label htmlFor={numberId}>
          Number
          <FieldStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormError FormError name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};


export default ContactForm;