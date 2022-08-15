import { gql } from "@apollo/client";

export const GET_CLIENTS_QUERY = gql`
  query {
    clients {
      id
      name
      email
      phone
    }
  }
`;
