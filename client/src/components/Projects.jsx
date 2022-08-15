import Spinner from "./Spinner";
import ProjectsCard from "./ProjectsCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS_QUERY } from "../queries/project";

const Projects = () => {
  const { data, loading, error } = useQuery(GET_PROJECTS_QUERY);
  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectsCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};

export default Projects;
