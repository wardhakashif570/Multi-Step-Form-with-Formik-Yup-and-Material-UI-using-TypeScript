import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: "400px",
    width: 400,
    padding: '0 30px',
    borderRadius:"50px",
    // margin:400,
    //  marginRight:300,
    marginLeft: 500,
    fontWeight:"bold",
    fontSize:"20px",
  },
  tbl: {
    padding: 20,
    
  },
  btn:{
    borderRadius:300,
    height:60,
    backgroundColor:"Pink",
    color:"BLACK",
    margin:20,
    width:300
  }
});

interface Props {
  handleNext: () => void
}

const LoginDetails: React.FC<Props> = ({ handleNext }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{email: '' ,password:''}}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),

          password: Yup.string()
        .min(6, 'Password is too short.')
        .max(12, 'Password is too long.')
        .required('This field is required.'),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          handleNext()
        }, 400);
      }}
    >
       <Form className={classes.root}>
        <table  >
          <tr >
            <td className={classes.tbl}><label htmlFor="email">Email Address</label></td>
            <td className={classes.tbl}> <Field name="email" type="email" /></td>
            <td> <ErrorMessage name="email" /></td>
          </tr>


          <tr>
            <td className={classes.tbl}><label htmlFor="password">Password </label></td>
            <td className={classes.tbl}><Field id="standard-basic" name="password" type="password" /></td>
            <td><ErrorMessage name="password" /></td>
          </tr>


    </table>

        <br />
        <button type="submit" className={classes.btn}>Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginDetails;