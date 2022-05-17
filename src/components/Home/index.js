import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';

import PersonalInfoForm from './Forms/PersonalInfoForm';
import WorkspaceForm from './Forms/WorkspaceForm';
import UsageForm from './Forms/UsageForm';

import FormModel from './FormModel/FormModel';
import validationSchema from './FormModel/validationSchema';
import formInitialValues from './FormModel/FormInitialValues';

import ProcessSuccess from './ProcessSuccess';

import useStyles from './styles';

const steps = ['Personal Information','Workspace Information','Usage'];
const { formId, formField } = FormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalInfoForm formField={formField} />;
    case 1:
      return <WorkspaceForm formField={formField} />;
    case 2:
      return <UsageForm />;
    default:
      return <div>Not Found</div>;
  }
}

export default function Home() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [FormValues, setFormValues] = useState(null);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;



  const _sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const _submitForm = async (values, actions) => {
    await _sleep(1000);
    // alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setFormValues(values);

    setActiveStep(activeStep + 1);
  }

  const _handleSubmit = (values, actions) => {

    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        CutShort
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <ProcessSuccess values={FormValues} />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Create Workspace' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
