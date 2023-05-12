import { FormInputLabel, Input, Group } from './form-input.styles';
const FormInput = ({ label, ...otherProbs }) => {
  return (
    <Group>
      <Input {...otherProbs} />
      {label && (
        <FormInputLabel shrink={otherProbs.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
