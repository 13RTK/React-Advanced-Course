import { useNavigate } from 'react-router-dom';

function ScoreListItem({ scoreItem }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{scoreItem.name}</td>
      <td>{scoreItem.class}</td>
      <td>{scoreItem.subject}</td>
      <td>{scoreItem.semester}</td>
      <td>{scoreItem.score}</td>
      <th>
        <button
          className="btn btn-ghost btn-sm"
          onClick={() => navigate(`/home/score/${scoreItem.id}`)}
        >
          details
        </button>
        <button className="btn btn-error btn-sm">delete</button>
      </th>
    </tr>
  );
}
export default ScoreListItem;
