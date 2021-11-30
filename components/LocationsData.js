import { hours } from "../public/data";
import { motion } from "framer-motion";
export default function LocationsData({ cookieStnds }) {
  return (
    // <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
    <>
      {cookieStnds.map((itm, index) => {
        return (
          <tr key={index}>
            <th
              className={`bg-green-500 border border-black ${
                index % 2 ? "bg-green-300" : "bg-green-400"
              }`}
            >
              {itm.location}
            </th>
            {itm.hourly_sales.map((itm, idx) => (
              <td
                key={idx}
                className={`border border-black text-center	 ${
                  index % 2 ? "bg-green-300" : "bg-green-400"
                }`}
              >
                {itm}
              </td>
            ))}
            <th
              className={`bg-green-500 border border-black ${
                index % 2 ? "bg-green-300" : "bg-green-400"
              }`}
            >
              {itm.hourly_sales.reduce((tot, itm) => tot + itm, 0)}
            </th>
          </tr>
        );
      })}
    </>
  );
}
