import { motion } from "framer-motion";
import { useAuth } from "../contexts/auth";
import useResource from "../hooks/useResource";
import { useEffect, useState } from "react";
import { hourly_sales } from "../public/hourly_sales";
export default function LocationsData() {
  const { resources, loading, deleteResource } = useResource();
  const { newRow, resetNewRow } = useAuth();
  const [res, setRes] = useState(resources);

  useEffect(() => {
    resetNewRow();
    setRes(resources);
  }, [resources]);

  const handleDelete = (id) => {
    setRes(res.filter((itm) => itm.id != id));
    deleteResource(id);
  };

  return (
    <>
      {!loading ? (
        res.length ? (
          res.map((itm, index) => {
            return (
              <tr key={index}>
                <th
                  className={`bg-green-500 justify-between border p-1 flex flex-row border-black ${
                    index % 2 ? "bg-green-300" : "bg-green-400"
                  }`}
                >
                  {itm.location}
                  <img
                    className="cursor-pointer"
                    onClick={() => handleDelete(itm.id)}
                    src="https://img.icons8.com/plasticine/24/00ff00/filled-trash.png"
                  />
                </th>
                {hourly_sales.map((itm, idx) => (
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
                  {hourly_sales.reduce((tot, itm) => tot + itm, 0)}
                </th>
              </tr>
            );
          })
        ) : (
          <h1>Nothing</h1>
        )
      ) : (
        <h1>Loading ...</h1>
      )}
      {newRow ? (
        <tr className="bg-green-500 border border-black animate-pulse w-100">
          {new Array(16).fill(0).map((itm) => (
            <td>&nbsp;</td>
          ))}
        </tr>
      ) : undefined}
    </>
  );
}
