import React from 'react';
import * as Yup from 'yup';
// import { FiPhone, FiUser } from "react-icons/fi";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { FormStyled, FieldStyled, Label, Button } from './ContactForm.styled';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useState } from 'react';
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
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems)
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  
  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContacts(values))
    setName(values);
    setNumber(values);
    // onSubmit(values);
    resetForm();

      const existName = contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase());
      const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (existName) {
      Report.failure(`${contact} is already in contacts`);
      return;
    }

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
            id={nameId}
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
            id={numberId}
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