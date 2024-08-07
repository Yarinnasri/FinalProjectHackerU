import Joi from "joi";
import { func, object } from "prop-types";
import { useCallback, useMemo, useState } from "react";
const useFormsValidate = (initialForm, schema, handleSubmit) => {
  const [formData, setFormData] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({});

  const handleFormReset = useCallback(() => {
    setFormData(initialForm);
    setFormErrors({});
  }, [initialForm]);

  const validateFormProperty = useCallback(
    ({ name, value }) => {
      const object = { [name]: value };
      const genSchema = Joi.object({ [name]: schema[name] });
      const { error } = genSchema.validate(object);
      return error ? error.details[0].message : null;
    },
    [schema]
  );
  const handleChange = useCallback(
    (e) => {
      const target = e.target;
      const { name, value, files } = target;

      const newValue = files ? files[0] : value;

      const errorMessage = validateFormProperty({ name, value: newValue });
      if (errorMessage) {
        setFormErrors((prev) => ({ ...prev, [name]: errorMessage }));
      } else {
        setFormErrors((prev) => {
          const updatedErrors = { ...prev };
          delete updatedErrors[name];
          return updatedErrors;
        });
      }

      setFormData((prev) => ({ ...prev, [name]: newValue }));
    },
    [validateFormProperty]
  );

  const validateForm = useCallback(() => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(formData);
    if (error) return error;
    return null;
  }, [formData, schema]);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const validationError = validateForm();
      if (validationError) {
        setFormErrors((prev) => ({
          ...prev,
          general: validationError.details[0].message,
        }));
        return;
      }
      handleSubmit(formData);
    },
    [formData, handleSubmit, validateForm]
  );
  const value = useMemo(() => {
    return { formData, formErrors };
  }, [formData, formErrors]);

  return {
    handleFormReset,
    handleChange,
    validateForm,
    onSubmit,
    setFormData,
    value,
  };
};

useFormsValidate.propTypes = {
  initialForm: object.isRequired,
  schema: object.isRequired,
  handleSubmit: func.isRequired,
};

export default useFormsValidate;
