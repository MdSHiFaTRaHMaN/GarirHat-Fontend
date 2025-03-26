import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Share = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.post(`https://api.garirhat.com/api/v1/socail-media/share/${id}`);
        setVehicle(response.data);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      }
    };

    fetchVehicle();
  }, [id]);

  if (!vehicle) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{vehicle.make} {vehicle.model} ({vehicle.year_of_manufacture})</h1>
      <p>{vehicle.description}</p>
      <img src={vehicle.thumbnail_image} alt={`${vehicle.make} ${vehicle.model}`} width="400px" />
    </div>
  );
};

export default Share;
