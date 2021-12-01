import styles from "../style/index.module.css";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { useState, useEffect } from "react";
import { hourly_sales } from "../public/hourly_sales";
import Swal from "sweetalert2";
import useResource from "../hooks/useResource";
import { useAuth } from "../contexts/auth";
export default function Main() {
  const { createResource } = useResource();
  const {user} = useAuth()
  const [cookieStnds, setCookieStands] = useState([]);
  const handleNewCookiesStand = (location) => {
    if (cookieStnds.map((itm) => itm.location).includes(location)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "City is already added!",
      });
      return;
    }

    createResource({
      "location":location,
      "description": "description",
      "hourly_sales": 100,
      "minimum_customers_per_hour": 20,
      "maximum_customers_per_hour": 100,
      "average_cookies_per_sale": 5.0,
    });
  };
  return (
    <main className={"my-8 w-full" + ` ${styles.main_content}`}>
      <CreateForm handleNewCookiesStand={handleNewCookiesStand} />{" "}
      <ReportTable cookieStnds={cookieStnds} />{" "}
    </main>
  );
}
