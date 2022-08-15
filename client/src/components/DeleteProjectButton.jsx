import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { GET_PROJECTS_QUERY } from "../queries/project";
import { DELETE_PROJECT_MUTATION } from "../mutations/project";
import { useMutation } from "@apollo/client";

const DeleteProjectButton = (props) => {
  const { projectId } = props;
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT_MUTATION, {
    variables: { id: projectId },
    onCompleted: () => navigate("/"),
    refetchQueries: [
      {
        query: GET_PROJECTS_QUERY,
      },
    ],
  });

  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteProject}>
        <FaTrash className="icon" />
        Delete Project
      </button>
    </div>
  );
};

export default DeleteProjectButton;
