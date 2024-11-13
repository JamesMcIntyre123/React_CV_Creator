
function InputField ({ label, type, name, value, handleInputChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
