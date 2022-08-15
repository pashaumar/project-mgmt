import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT_MUTATION } from "../mutations/client";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS_QUERY } from "../queries/client";

const ClientRow = (props) => {
  const { client } = props;
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION);

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => {
            deleteClient({
              variables: {
                id: client.id,
              },
              update(cache, { data: { deleteClient } }) {
                const { clients } = cache.readQuery({
                  query: GET_CLIENTS_QUERY,
                });
                cache.writeQuery({
                  query: GET_CLIENTS_QUERY,
                  data: {
                    clients: clients.filter(
                      (client) => client.id !== deleteClient.id
                    ),
                  },
                });
              },
            });
          }}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
