import { useState } from 'react';

const Select = ({
  label,
  name,
  value,
  onChange,
  options = [],
  icon,
  error,
  required = false,
  disabled = false
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-group">
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}

      <div className={`input-container ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}>
        {icon && (
          <div className="input-icon">
            <i className={`fas fa-${icon}`}></i>
          </div>
        )}

        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="input-field"
        >
          <option value="">Select {label}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

export default Select;
