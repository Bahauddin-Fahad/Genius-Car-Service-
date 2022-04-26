import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../Hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";
const Checkout = () => {
  const [user] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      serviceId: serviceId,
      service: service.name,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    axios.post("http://localhost:5000/order", order).then((res) => {
      // console.log(res.data);
      const { data } = res;
      if (data.insertedId) {
        toast("Your Order is Placed");
        e.target.reset();
      }
    });
  };
  return (
    <div className="min-h-[calc(100vh-187px)]">
      <h2 className="text-center">Checkout for {service.name}</h2>
      <form onSubmit={handlePlaceOrder} className=" w-5/12 mx-auto">
        <input
          className="w-100 mb-2 border-2 rounded-sm"
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2 border-2 rounded-sm"
          type="email"
          name="email"
          value={user?.email}
          placeholder="email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="w-100 mb-2 border-2 rounded-sm"
          type="text"
          name="service"
          value={service.name}
          placeholder="service"
          required
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2 border-2 rounded-sm"
          type="text"
          name="address"
          placeholder="address"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="w-100 mb-2 border-2 rounded-sm"
          type="text"
          name="phone"
          placeholder="phone"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="w-100 btn btn-dark"
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
