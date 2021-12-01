import { hours } from "../public/data";
import LocationsData from "./LocationsData";
import useResource from "../hooks/useResource";
import { hourly_sales } from "../public/hourly_sales";
export default function ReportTable() {
  const { resources, loading } = useResource();

  let totals = new Array(14).fill(0);
  if (!loading) {
    totals = totals.map((_, idx) =>
      resources
        .map((_) => hourly_sales)
        .map((val) => val[idx])
        .reduce((tot, elem) => tot + elem, 0)
    );
  }

  return (
    <>
      {!loading ? (
        resources.length ? (
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
              <LocationsData />
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
        )
      ) : (
        <img
          src="https://icaengineeringacademy.com/wp-content/uploads/2019/01/ajax-loading-gif-transparent-background-2.gif"
          alt="loading"
          className="w-40 h-40 m-auto mt-10"
        />
      )}
    </>
  );
}
