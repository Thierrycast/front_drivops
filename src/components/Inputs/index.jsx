import React, { useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Envelope, Eye, EyeClosed, LockOpen } from "phosphor-react";

const inputStyle = {
  borderColor: "#000000",
  marginBottom: "20px",
  "& fieldset.MuiOutlinedInput-notchedOutline": {
    fontSize: "1.8rem",
  },
  "& div.MuiInputBase-root": {
    fontSize: "1.5rem",
    fontWeight: 400,
  },
  "& label.MuiInputLabel-root": {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "2rem",
    marginTop: -0.2,
    transition: "all 0.2s",
  },
  "& label.Mui-focused": {
    fontWeight: 700,
    fontSize: "2rem",
    color: "brue",
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.5)",
    },
    "& fieldset": {
      borderRadius: "2rem",
      borderColor: "",
    },
  },
};

export default function Inputs({form, setForm}) {
  
  const [showPassword, setShowPassword] = useState(false);
  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <TextField
        label="Email"
        name="email"
        fullWidth
        value={form.email}
        onChange={handleChangeInput}
        sx={inputStyle}
        type={"email"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Envelope size={24} />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        name="password"
        fullWidth
        value={form.password}
        onChange={handleChangeInput}
        sx={inputStyle}
        type={showPassword ? "text" : "password"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockOpen size={24} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye size={24} /> : <EyeClosed size={24} />}
            </InputAdornment>
          ),
        }}
      />
    </>
  );
}