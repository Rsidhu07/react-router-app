import checkValidity from "./formValidation";
import isFormValid from "./isFormValid";

const updateFormDataInLocalState =(event, id, formData) => {
    const updatedFormData = { 
        ...formData
    };
    const updatedFormElement = {
        ...formData[id]
    };

    updatedFormElement['value'] = event['target']['value'];
    updatedFormElement['touched'] = true;
    updatedFormElement['valid'] = checkValidity(updatedFormElement['value'], updatedFormElement['validation']);
    updatedFormData[id] = updatedFormElement;

    const formIsValid = isFormValid(updatedFormData);

    return {
        updatedFormData,
        formIsValid
    };
};

export default updateFormDataInLocalState;