import { useEffect, useState } from 'react';
import ScoreListItem from './ScoreListItem';
import { getScoreList } from '../../services/apiScore';

function ScoreList() {
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const mockScoreList = await getScoreList();
      setScoreList(mockScoreList);
    }

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Semester</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scoreList.map((scoreItem) => (
            <ScoreListItem key={scoreItem.id} scoreItem={scoreItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScoreList;
