import styles from "../style/index.module.css";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { useState } from "react";
import useResource from "../hooks/useResource";
export default function Main() {
  const { createResource } = useResource();
  const [cookieStnds, setCookieStands] = useState([]);
  const handleNewCookiesStand = ({
    location,
    minCustomerPerHour,
    maxCustomersPerHour,
    avgCookiesPerSale,
  }) => {
    createResource({
      location: location,
      description: "description",
      hourly_sales: 100,
      minimum_customers_per_hour: Number(minCustomerPerHour),
      maximum_customers_per_hour: Number(maxCustomersPerHour),
      average_cookies_per_sale: Number(avgCookiesPerSale).toFixed(2),
    });
  };
  return (
    <main className={"my-8 w-full" + ` ${styles.main_content}`}>
      <CreateForm handleNewCookiesStand={handleNewCookiesStand} />{" "}
      <ReportTable cookieStnds={cookieStnds} />{" "}
    </main>
  );
}
