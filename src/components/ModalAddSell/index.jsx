import { Modal } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import baseApi from "../../services/baseApi";
import SelectCarModel from "../SelectCarModel/index";
import SelectSeller from '../SelectSeller'
import "./styles.css";
export default function ModalAddSell() {
  const [form, setForm] = useState({ carro: 0, vendedor: 0 });
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {

    
    setForm({ carro: {}, vendedor: {} });
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sellCar = async (infos) => {
    const token = localStorage.getItem("token");
    try {
      const response = await baseApi.post("/sales", infos, {
        headers: {
          authorization: token,
        },
      });
      setOpenModal(false)
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sellCar({
      carro_id: form.carro.id,
      vendedor_id: form.vendedor,
      data: new Date(),
    });
  };
  return (
    <>
      <button className="pattern_button" onClick={() => setOpenModal(true)}>
        Cadastrar venda
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <form className="modal_form" onSubmit={handleSubmit}>
          <h1>Cadastrar Venda</h1>
          <SelectSeller selectedSeller={form.vendedor} handleChange={handleChange} />
          <SelectCarModel selectedCarModel={form.carro} handleChange={handleChange} />
          <button className="pattern_button">Vender</button>
        </form>
      </Modal>
    </>
  );
}
