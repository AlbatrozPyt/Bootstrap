export const InputDefault = ({
  id,
  name,
  placeholder,
  type,
  value,
  label,
  onChange,
}) => {
  return (
    <div className="w-100">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        className="form-control"
        required={true}
        onChange={onChange}
      />
    </div>
  );
};
