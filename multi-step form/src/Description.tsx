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
    borderRadius: "50px",
    // margin:400,
    //  marginRight:300,
    marginLeft: 500,
    fontWeight: "bold",
    fontSize: "20px",
  },
  tbl: {
    padding: 20,
    width:300,
    heigth:400


  },
  btn: {
    borderRadius: 300,
    height: 60,
    backgroundColor: "Pink",
    color: "BLACK",
    margin: 20,
    width: 300
  }
});


interface Props {
  handleNext: () => void
}

const Description: React.FC<Props> = ({ handleNext }) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ skills: '' }}
      validationSchema={Yup.object({
        skills: Yup.string().required('This field is required.'),

      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext()
        }, 400);
      }}
    >
      <Form className={classes.root}>
        <table>
          <tr>
            <td><h1>Briefly Describe your Skills</h1></td>
          </tr>
          <tr>
            <td >
              <Field
              className={classes.tbl}
                autoComplete=""
                name="skills"
                variant="outlined"
                fullWidth
                id="skills"
                label="skills"
                
              />
            </td>
            <td> <ErrorMessage name="skills" /></td>
          </tr>

          </table>

          <button type="submit" className={classes.btn}>Submit</button>
     
      </Form>
    </Formik>
  );
};

export default Description;