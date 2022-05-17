/* eslint-disable import/no-anonymous-default-export */
import FormModel from './FormModel';
const {
  formField: {
    fullName,
    displayName,
    workspaceName,
    workspaceUrl,
  }
} = FormModel;

export default {
  [fullName.name]: '',
  [displayName.name]: '',
  [workspaceName.name]: '',
  [workspaceUrl.name]: ''
};
