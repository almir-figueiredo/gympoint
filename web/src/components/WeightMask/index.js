/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect, useRef } from 'react';
import NumberFormat from 'react-number-format';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

export default function WeightMask({
  name,
  label,
  setChange,
  getChange,
  onChange,
  disabled,
}) {
  const ref = useRef();
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [value, setValue] = useState(defaultValue);
  const [importedValue, setImportedValue] = useState();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.value',
        clearValue: pickerRef => {
          pickerRef.setInputValue(null);
        },
      });
    }
  }, [ref, fieldName]); // eslint-disable-line

  function handleOnChange(number) {
    if (onChange) {
      const formatedValue = number.replace('',/[Kg]/);
      onChange(formatedValue);
    }
  }

  function handleValueChange(object) {
    const { floatValue } = object;
    if (setChange) {
      setChange(floatValue);
    }
    setValue(floatValue);
  }

  useEffect(() => {
    setImportedValue(getChange);
    setValue('');
  }, [getChange]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <NumberFormat
        thousandSeparator="."
        isNumericString
        decimalSeparator=","
        fixedDecimalScale
        allowNegative={false}
        decimalScale={2}
        sufix="Kg"
        ref={ref}
        name={fieldName}
        value={value || importedValue}
        onValueChange={handleValueChange}
        onChange={e => handleOnChange(e.target.value)}
        disabled={!!disabled}
      />
      {error && <span>{error}</span>}
    </>
  );
}

WeightMask.defaultProps = {
  disabled: PropTypes.false,
  setChange: PropTypes.null,
  getChange: PropTypes.null,
  onChange: PropTypes.null,
};

WeightMask.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  getChange: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  setChange: PropTypes.func,
};
