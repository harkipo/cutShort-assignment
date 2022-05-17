import * as Yup from 'yup';
import FormModel from './FormModel';
const {
  formField: {
    fullName,
    displayName,
    workspaceName,
    workspaceUrl

  }
} = FormModel;


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Yup.object().shape({
    [fullName.name]: Yup.string().required(`${fullName.requiredErrorMsg}`),
    [displayName.name]: Yup.string().required(`${displayName.requiredErrorMsg}`),
    
  }),
  Yup.object().shape({
    [workspaceName.name]: Yup.string().required(`${workspaceName.requiredErrorMsg}`),
    [workspaceUrl.name]: Yup.string().required(`${workspaceUrl.requiredErrorMsg}`),
    
  })
];
