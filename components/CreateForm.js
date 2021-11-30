import { useState } from "react";

export default function CreateForm() {
    const [cookieStands, setCookieStands] = useState([])
    const [minCustomerPerHour, setMinCustomerPerHour] = useState(0)
    const [location, setLocation] = useState('')
    const [maxCustomersPerHour, setMaxCustomerPerHour] = useState(0)
    const [avgCookiesPerSale, setAvgCookiesPerSale] = useState(0)
    
    const handleAddStand = (e) => {
      e.preventDefault()
      setCookieStands(prevStands => [...prevStands, {minCustomerPerHour, location, maxCustomersPerHour, avgCookiesPerSale}])
    } 
    return(
        <form
        onSubmit={handleAddStand}
        className="flex-col content-center justify-center p-4 m-auto bg-green-300 rounded-lg w-min md:flex-row"
      >
        <h2 className="p-4 text-2xl text-center w-100">Create Cookie Stand</h2>
        <div className="flex gap-2 p-4 min-w-max">
          <label>Location</label>
          <input
            value={location}
            type="text"
            className="flex-grow"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <section className="flex gap-8 p-4">
          <div>
            <label>Minimum Customer per Hour</label>
            <input
              type="number"
              value={minCustomerPerHour}
              onChange={(e) => setMinCustomerPerHour(e.target.value)}
            />
          </div>
          <div>
            <label>Maximum Customers per Hour</label>
            <input
              value={maxCustomersPerHour}
              onChange={(e) => setMaxCustomerPerHour(e.target.value)}
              type="number"
            />
          </div>
          <div>
            <label>Average Cookies per Sale</label>
            <input
              type="number"
              value={avgCookiesPerSale}
              onChange={(e) => setAvgCookiesPerSale(e.target.value)}
            />
          </div>
          <button type="submit" className="px-4 bg-green-600 rounded-xl">
            create
          </button>
        </section>
      </form>
    )
}