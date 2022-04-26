import axios from "axios";
import { useEffect, useState } from "react";

const useServiceDetail = (serviceId) => {
  const [service, setService] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/service/${serviceId}`)
      .then((data) => setService(data.data));
  }, [serviceId]);
  return [service];
};

export default useServiceDetail;
