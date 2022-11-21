import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import baseApi from "../../services/baseApi";

const inputStyles = {
  marginBottom: "24px",
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

const sellersArray = [
  {
    id: 1,
    name: "João",
  },
  {
    id: 2,
    name: "Leonel",
  },
  {
    id: 3,
    name: "Rafael",
  },
  {
    id: 4,
    name: "Thierry",
  },
];

export default function SelectSeller({ selectedSeller, handleChange }) {
  const [sellers, setSellers] = useState([]);

  const fetchSellers = async () => {
    const { data } = await baseApi.get("/sellers", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    });
    setSellers(data);
    // return setSellers(sellersArray);
  };
  useEffect(() => {
    fetchSellers();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="label-select-vendedor" sx={labelStyles}>
        Vendedor
      </InputLabel>
      <Select
        fullWidth
        name="vendedor"
        labelId="label-select-vendedor"
        id="select-vendedor"
        value={selectedSeller}
        label="Vendedor"
        onChange={handleChange}
        sx={inputStyles}
        defaultValue={""}
      >
        {sellers.map((seller) => (
          <MenuItem value={seller.id} key={seller.id} sx={itemStyles}>
            {seller.nome}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
