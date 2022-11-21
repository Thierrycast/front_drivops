import { useEffect, useState } from "react";
import RankingSellers from "../RankingSellers/index";
import SalesPerMonth from "../SalesPerMonth/index";
import AverageValues from "../AverageValues/index";
import baseApi from '../../services/baseApi'
import './styles.css'

export default function Graficos() {
  const [rankSellers, setRankSellers] = useState([]);
  const [salesPerMonth,setSalesPerMonth] = useState([]);
  const [averageCarValues,setAverageCarValues] = useState([]);

  const fetchDataRank = async () => {
    try {
      const response = await baseApi.get("/dashboard/ranksellers", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      
      setRankSellers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataPerMonth = async () => {
    try {
      const response = await baseApi.get("/dashboard/salespermonth", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(response);
      setSalesPerMonth(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataAverageValues = async () => {
    try {
      const response = await baseApi.get("/dashboard/averagecarvalues", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      
      setAverageCarValues(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataRank();
    fetchDataPerMonth()
    fetchDataAverageValues()
  }, []);

console.log(rankSellers);
  return(
    <div className="container_graphics" >
      <div className='graphics' >
        <RankingSellers dataGraphic={rankSellers}  />
      </div>
      <div className='graphics' >
        <SalesPerMonth dataGraphic={salesPerMonth}  />
      </div>
      <div className='graphics' >
        <AverageValues dataGraphic={averageCarValues} />
      </div>
    </div>
    
  ) 
}