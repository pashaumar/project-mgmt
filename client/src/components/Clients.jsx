import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS_QUERY } from "../queries/client";
import Spinner from "./Spinner";

const Clients = () => {
  const { data, error, loading } = useQuery(GET_CLIENTS_QUERY);
  if (loading) return <Spinner />;
  if (error) return <div>Something Went Wrong</div>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
