import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const idName = useId();
  const idNumber = useId();
  const regs = {
    // "^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
    name: "^[а-яА-Яa-zA-Z ]{3,50}$",
    number: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){3,16}(\s*)?$/,
  };

  const pattern = Yup.object().shape({
    name: Yup.string()
      .matches(regs.name, "Too Short!")
      // .min(3, 'Too Short!')
      // .max(50, 'Too Long!')
      .required("Required"),
    number: Yup.string()
      .matches(regs.number, "Too Short!")
      // .min(3, 'Too Short!')
      // .max(50, 'Too Long!')
      .required("Required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={pattern}
    >
      <Form className={s.form}>
        <div className={s.formDiv}>
          <label className={s.label} htmlFor={idName}>
            Name
          </label>
          <Field name="name" type="text" id={idName} className={s.field} />
          <ErrorMessage name="name" component="span" className={s.error} />
        </div>
        <div className={s.formDiv}>
          <label className={s.label} htmlFor={idNumber}>
            Number
          </label>
          <Field name="number" type="tel" id={idNumber} className={s.field} />
          <ErrorMessage name="number" component="span" className={s.error} />
        </div>
        <button type="submit" className={s.formButton}>
          Add contact{" "}
        </button>
      </Form>
    </Formik>
  );
}
