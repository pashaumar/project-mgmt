import { gql } from "@apollo/client";

export const GET_PROJECTS_QUERY = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;

export const GET_PROJECT_BY_ID_QUERY = gql`
  query getProjects($id: ID!) {
    project(id: $id) {
      id
      name
      status
      description
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
