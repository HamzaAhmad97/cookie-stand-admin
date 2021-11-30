import { hours } from "../public/data";
import LocationsData from "./LocationsData";
export default function ReportTable(props) {
  return (
    <table className="w-7/12 m-auto mt-8 table-auto">
      <tr>
        <th className="w-2/12 bg-green-500 border border-none">Location</th>
        {hours.map((itm, idx) => (
          <th key={idx} className="bg-green-500 border-none">
            {itm}
          </th>
        ))}
        <th className="bg-green-500 border-none">Totals</th>
      </tr>

      <LocationsData {...props}/>
      
      <tr>
        <th className="bg-green-500 border-none">Totals</th>
        {new Array(14).fill(0).map((_, idx) => props.cookieStnds.map(item => item.hourly_sales).map(val => val[idx]).reduce((tot, elem) => tot + elem, 0)).map((itm, idx) => (
          <th key={idx} className="bg-green-500 border-none">
            {itm}
          </th>
        ))}
        <th className="bg-green-500 border-none">Totals</th>
      </tr>
    </table>
  );
}
