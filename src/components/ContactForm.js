import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Formik, Form, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import { Button, Checkbox } from "@material-ui/core";
import { contactFormSchema } from "../helpers/validationSchema";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const ContactForm = () => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        nameAndSurname: "",
        email: "",
        subject: "",
        message: "",
        acceptTerms: false,
      }}
      validationSchema={contactFormSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <TextField
            className={classes.margin}
            type="text"
            label="Name and Surname"
            name="nameAndSurname"
            value={values.nameAndSurname}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>
            <ErrorMessage name="nameAndSurname" />
          </div>

          <TextField
            className={classes.margin}
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <ErrorMessage name="email" />

          <TextField
            className={classes.margin}
            label="Subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
          />
          <ErrorMessage name="subject" />

          <TextField
            className={classes.margin}
            label="Message"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
          <ErrorMessage name="message" />

          <GreenCheckbox
            name="acceptTerms"
            value={values.acceptTerms}
            onChange={handleChange}
          />
          <ErrorMessage name="acceptTerms" />

          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
