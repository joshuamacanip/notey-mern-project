import { useParams, Navigate, useNavigate } from "react-router-dom";

export default () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Note Detail No.: {id}</h1>

      <button onClick={() => navigate("/")}>Back to List</button>
    </div>
  );
};
