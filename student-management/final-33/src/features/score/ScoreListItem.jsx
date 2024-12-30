import { useNavigate } from 'react-router-dom';
import { useAtomValue } from 'jotai';

import { isStudentAtom } from '../../atoms/user';

function ScoreListItem({ scoreItem, currentStudent }) {
  const navigate = useNavigate();

  const isStudent = useAtomValue(isStudentAtom);

  return (
    <tr>
      <td>{currentStudent.name}</td>
      <td>{`Class ${currentStudent.class} | Year ${currentStudent.grade}`}</td>
      <td>{scoreItem.subject}</td>
      <td>
        {scoreItem.semesterSeason} {scoreItem.semesterYear}
      </td>
      <td>{scoreItem.score}</td>
      {!isStudent && (
        <th>
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => navigate(`/home/score/${scoreItem.id}`)}
          >
            details
          </button>
          <button className="btn btn-error btn-sm">delete</button>
        </th>
      )}
    </tr>
  );
}
export default ScoreListItem;
