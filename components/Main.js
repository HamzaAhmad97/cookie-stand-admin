import styles from "../style/index.module.css";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { useState, useEffect } from "react";
import { hourly_sales } from "../public/hourly_sales";
import Swal from "sweetalert2";
export default function Main() {
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
    setCookieStands((prevStands) => {
      return [
        ...prevStands,
        {
          location,
          hourly_sales,
        },
      ];
    });
  };
  useEffect(() => {
    console.log();
  }, [cookieStnds]);
  return (
    <main className={"my-8 w-full" + ` ${styles.main_content}`}>
      <CreateForm handleNewCookiesStand={handleNewCookiesStand} />{" "}
      <ReportTable cookieStnds={cookieStnds} />{" "}
    </main>
  );
}
