import * as React from "react";
import TextField from "@mui/material/TextField";

function InputField({ label, onChange, type, value }) {
  return (
    <TextField
      label={label}
      id={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="standard"
    />
  );
}

export default InputField;
