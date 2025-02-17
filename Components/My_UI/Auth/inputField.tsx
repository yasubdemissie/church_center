interface InputFieldProps {
  placeholder: string;
  name: string;
  type: string;
}

export function InputField({ placeholder, name, type }: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
    />
  );
}
