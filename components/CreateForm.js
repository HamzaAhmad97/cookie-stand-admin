import { useState } from "react";
import { useAuth } from "../contexts/auth";
export default function CreateForm({ handleNewCookiesStand }) {
  const [minCustomerPerHour, setMinCustomerPerHour] = useState(0);
  const [location, setLocation] = useState("");
  const [maxCustomersPerHour, setMaxCustomerPerHour] = useState(0);
  const [avgCookiesPerSale, setAvgCookiesPerSale] = useState(0);
  const { addRow } = useAuth();
  const handleAddStand = (e) => {
    e.preventDefault();
    console.log(typeof avgCookiesPerSale);
    handleNewCookiesStand({
      location,
      minCustomerPerHour,
      maxCustomersPerHour,
      avgCookiesPerSale,
    });

    addRow();
  };
  return (
    <form
      onSubmit={handleAddStand}
      className="flex-col content-center justify-center w-7/12 p-4 m-auto bg-green-300 rounded-lg md:flex-row"
    >
      <h2 className="p-4 text-2xl text-center w-100">Create Cookie Stand</h2>
      <div className="flex gap-2 p-4 w-100">
        <label>Location</label>
        <input
          value={location}
          type="text"
          className="flex-grow "
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>

      <section className="flex flex-row flex-wrap justify-between gap-4 p-4 w-100">
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-green-100 ">
          <label className="m-auto">Minimum Customer per Hour</label>
          <input
            className="pl-2"
            type="number"
            value={minCustomerPerHour}
            onChange={(e) => setMinCustomerPerHour(e.target.value)}
          />
        </div>
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-green-100">
          <label className="m-auto">Maximum Customers per Hour</label>
          <input
            className="pl-2"
            value={maxCustomersPerHour}
            onChange={(e) => setMaxCustomerPerHour(e.target.value)}
            type="number"
          />
        </div>
        <div className="flex flex-col justify-center flex-grow p-2 align-middle bg-green-100">
          <label className="m-auto">Average Cookies per Sale</label>
          <input
            className="pl-2"
            type="number"
            value={avgCookiesPerSale}
            onChange={(e) => setAvgCookiesPerSale(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="px-4 bg-green-600 rounded-xl hover:bg-green-500"
        >
          create
        </button>
      </section>
    </form>
  );
}
