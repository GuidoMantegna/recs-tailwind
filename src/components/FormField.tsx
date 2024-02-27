interface FormFieldProps {
  children?: React.ReactNode
  disabled?: boolean
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  value?: string | number | undefined
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  disabled,
  label,
  name,
  onChange,
  type,
  value
}) => {
  return (
    <div id="form-field" className="flex flex-col mb-6">
      <label htmlFor={name}>{label}</label>
      <span className="relative">
        <input
          name={name}
          onChange={onChange}
          type={type}
          id={name}
          value={value}
          className="border-b-2 border-black px-2 py-1 w-full"
          disabled={disabled}
          accept={type === 'file' ? 'image/*' : ''}
        />
        {children}
      </span>
    </div>
  )
}
