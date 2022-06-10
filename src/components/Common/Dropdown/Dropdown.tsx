import React, { ChangeEvent } from "react";
import classNames from "classnames/bind";
import { Field } from "formik";
import dropdownStyle from "./Dropdown.module.scss";

export interface DropdownProps {
  name: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  options?: string[];
}

const Dropdown = ({
  name,
  label,
  placeholder,
  error,
  className,
  options = [],
}: DropdownProps) => {
  const style = classNames.bind(dropdownStyle);

  return (
    <div className={style("dropdown-container", className)}>
      {label && <div className={style("dropdown-label")}>{label}</div>}
      <div>
        <Field
          label="Gender"
          as="select"
          name={name}
          className={style("dropdown")}
        >
          <option value="" disabled>
            {placeholder}{" "}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
        {error && <div className={style("dropdown-error")}>{error}</div>}
      </div>
    </div>
  );
};

export default Dropdown;
