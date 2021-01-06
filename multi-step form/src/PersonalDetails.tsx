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

const PersonalInfo: React.FC<Props> = ({ handleNext }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', age: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        age: Yup.number()
          .required('Required')


      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >




      <Form className={classes.root}>
        <table  >
          <tr >
            <td className={classes.tbl}><label htmlFor="firstName">First Name </label></td>
            <td className={classes.tbl}><Field id="standard-basic" name="firstName" type="text" /></td>
            <td><ErrorMessage name="firstName" /></td>
          </tr>


          <tr>
            <td className={classes.tbl}><label htmlFor="lastName">Last Name   </label></td>
            <td className={classes.tbl}><Field id="standard-basic" name="lastName" type="text" /></td>
            <td><ErrorMessage name="lastName" /></td>
          </tr>



          <tr>
            <td className={classes.tbl}><label htmlFor="age">Age  </label></td>
            <td className={classes.tbl}><Field id="standard-basic" name="age" type="number" /></td>  
            <td><ErrorMessage name="age" /></td>
          </tr>
        </table>

        <br />
        <button type="submit" className={classes.btn}>Submit</button>
      </Form>



    </Formik>
  );
};

export default PersonalInfo;