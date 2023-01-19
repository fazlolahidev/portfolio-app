import { useField } from "formik";
import React from "react";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className={`${
          meta.error && meta.touched ? "border-red-600" : null
        } ${!meta.error && meta.touched ? "border-green-400" : null} ${
          meta.value && !meta.error ? "border-green-400" : null
        } formInput  placeholder:text-slate-400`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
