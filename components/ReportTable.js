import { hours } from "../public/data";
import LocationsData from "./LocationsData";
import { useEffect, useState } from "react";

export default function ReportTable(props) {
  const [totals, setTotals] = useState(0);
  useEffect(() => {
    let totals = new Array(14).fill(0).map((_, idx) =>
      props.cookieStnds
        .map((item) => item.hourly_sales)
        .map((val) => val[idx])
        .reduce((tot, elem) => tot + elem, 0)
    );
    setTotals(totals);
  });
  return (
    <>
      {props.cookieStnds.length ? (
        <table className="w-7/12 m-auto mt-8 table-auto">
          <thead>
            <tr>
              <th className="w-2/12 bg-green-500 border border-none">
                Location
              </th>
              {hours.map((itm, idx) => (
                <th key={idx} className="bg-green-500 border-none">
                  {itm}
                </th>
              ))}
              <th className="bg-green-500 border-none">Totals</th>
            </tr>
          </thead>
          <tbody>
            <LocationsData {...props} />
          </tbody>
          <tfoot>
            <tr>
              <th className="bg-green-500 border-none">Totals</th>
              {totals.map((itm, idx) => (
                <th key={idx} className="bg-green-500 border-none">
                  {itm}
                </th>
              ))}
              <th className="bg-green-500 border-none">
                {totals.reduce((tot, itm) => tot + itm, 0)}
              </th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h2 className="mt-12 text-3xl text-center">
          No Cookie Stands Available
        </h2>
      )}
    </>
  );
}
