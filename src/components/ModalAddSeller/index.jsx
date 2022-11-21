import { Modal, TextField } from "@mui/material";
import { useState } from "react";
import baseApi from "../../services/baseApi";
import "./style.css";

const inputStyle = {
  borderColor: "#000000",
  marginBottom: "20px",
  "& fieldset.MuiOutlinedInput-notchedOutline": {
    fontSize: "1.8rem",
  },
  "& label.MuiInputLabel-root": {
    fontFamily: "Overlock",
    fontWeight: 400,
    fontSize: "2rem",
    marginTop: -0.2,
    transition: "all 0.3s",
  },
  "& label.Mui-focused": {
    fontWeight: 700,
    fontSize: "2rem",
    color: "#000000",
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(0, 0, 0, 0.5)",
    },
    "& fieldset": {
      borderRadius: "1rem",
    },
  },
  marginBottom: "16px",
  fontSize: "1.5rem",
  "& div.MuiSelect-select": {
    fontSize: "1.5rem",
    fontWeight: 400,
  },
  "& .MuiInputBase-root": {
    fontSize: "1.5rem",
    borderRadius: "2rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "2rem",
  },
};

export default function ModalAddSeller() {
  const [form, setForm] = useState({ nome: "", idade: "", telefone: "" });
  const [openModal, setOpenModal] = useState(false);

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await baseApi.post(
        "/sellers",
        {
          nome: form.nome,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      setOpenModal(false)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="pattern_button" onClick={() => setOpenModal(true)}>

        Cadastrar vendedor
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <form className="modal_form" onSubmit={handleSubmit}>
          <h1>Cadastrar novo vendedor</h1>
          <TextField
            name="nome"
            label="Nome"
            fullWidth
            value={form.nome}
            onChange={handleChangeInput}
            type="text"
            sx={inputStyle}
          />
         
          <button className="pattern_button">Cadastrar</button>
        </form>
      </Modal>
    </>
  );
}
