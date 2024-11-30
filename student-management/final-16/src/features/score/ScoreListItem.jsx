import { useNavigate } from 'react-router-dom';

function ScoreListItem({ scoreItem }) {
  const navigate = useNavigate();

  return (
    <tr>
      <td>{scoreItem.student_id}</td>
      <td>{scoreItem.student_id}</td>
      <td>{scoreItem.subject}</td>
      <td>
        {scoreItem.semesterSeason} {scoreItem.semesterYear}
      </td>
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
