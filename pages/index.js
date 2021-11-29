import Head from "next/head";
import styles from "../style/index.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [cookieStands, setCookieStands] = useState([])
  const [minCustomerPerHour, setMinCustomerPerHour] = useState(0)
  const [location, setLocation] = useState('')
  const [maxCustomersPerHour, setMaxCustomerPerHour] = useState(0)
  const [avgCookiesPerSale, setAvgCookiesPerSale] = useState(0)
  
  const handleAddStand = (e) => {
    e.preventDefault()
    setCookieStands(prevStands => [...prevStands, {minCustomerPerHour, location, maxCustomersPerHour, avgCookiesPerSale}])
  } 
  return (
    <div className="flex flex-col items-center justify-center min-h-screenbg-green-100 ">
      <Head>
        <title>Cookie Stand Admin</title>
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
        />
      </Head>

      <header className="w-full p-4 bg-green-500">
        <h1 className="text-4xl">Cookie Stand Admin</h1>
      </header>

      <main
        className={
          "my-8 w-full" + ` ${styles.main_content}`
        }
      >
        <form onSubmit={handleAddStand} className="flex-col content-center justify-center p-4 m-auto bg-green-300 rounded-lg w-min md:flex-row">
          <h2 className="p-4 text-2xl text-center w-100">Create Cookie Stand</h2>
          <div className="flex gap-2 p-4 min-w-max">
            <label>Location</label>
            <input value={location} type="text" className="flex-grow" onChange={(e) => setLocation(e.target.value)}/>
          </div>
          
          <section className='flex gap-8 p-4'>
            <div >
              <label >Minimum Customer per Hour</label>
              <input type="number" value={minCustomerPerHour} onChange={e => setMinCustomerPerHour(e.target.value)}/>
            </div>
            <div>
              <label>Maximum Customers per Hour</label>
              <input value={maxCustomersPerHour} onChange={e => setMaxCustomerPerHour(e.target.value)} type="number" />
            </div>
            <div>
              <label>Average Cookies per Sale</label>
              <input type="number" value={avgCookiesPerSale} onChange={e => setAvgCookiesPerSale(e.target.value)}/>
            </div>
            <button type="submit" className="px-4 bg-green-600 rounded-xl">create</button>
          </section>
        </form>
        <h2 className="my-4 text-center text-gray-700">Report Table Coming Soon ...</h2>
        <p className="my-8 text-center text-gray-700">{cookieStands.length ? JSON.stringify( cookieStands[cookieStands.length -1]): 'No Cookie Stands Added'}</p>
      </main>

      <footer className="w-full h-10 py-2 text-center bg-green-500">
        All rights reserved &copy; Hamza Ahmad 2021
      </footer>
    </div>
  );
}
