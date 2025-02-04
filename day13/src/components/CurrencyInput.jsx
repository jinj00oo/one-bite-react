const CurrencyInput = ({ name, value, onChange }) => {
  return (
    <div className="CurrencyInput">
      {name}:
      <input type="number" name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default CurrencyInput;
