import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import baseApi from "../../services/baseApi";

const inputStyles = {
  marginBottom: "16px",
  fontSize: "1.5rem",
  "& div.MuiSelect-select": {
    fontSize: "1.5rem",
    fontWeight: 400,
  },
  "& .MuiInputBase-root": {
    fontSize: "1.5rem",
  },
};

const labelStyles = {
  fontSize: "16px",
  fontWeight: 600,
};

const itemStyles = {
  fontSize: "12px",
  fontWeight: 400,
};

export default function SelectCarModel({ selectedCarModel, handleChange }) {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const { data } = await baseApi.get("/cars", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setCars(data);
  };
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="label-select-carro" sx={labelStyles}>
        Carro
      </InputLabel>
      <Select
        fullWidth
        name="carro"
        labelId="label-select-carro"
        id="select-carro"
        value={selectedCarModel}
        label="Carro"
        onChange={handleChange}
        sx={inputStyles}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: "160px",
            },
          },
        }}
      >
        {cars.map((car) => (
          <MenuItem value={car} key={car.id} sx={itemStyles}>{`${car.marca}${" "}${
            car.modelo
          }`}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
