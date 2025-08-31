import { useState } from 'react';

const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
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
        
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="input-field"
        />
      </div>
      
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

export default Input;