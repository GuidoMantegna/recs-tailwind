interface FormFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const FormField: React.FC<FormFieldProps> = ({ label, type, name, value, onChange }) => {
  return (
    <div id="form-field" className="flex flex-col mb-6">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        type={type}
        id={name}
        value={value}
        className="border-b-2 border-black px-2 py-1"
      />
    </div>
  )
}

export default FormField