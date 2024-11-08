import ScoreListItem from './ScoreListItem';

function ScoreList() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Semester</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <ScoreListItem />
        </tbody>
      </table>
    </div>
  );
}

export default ScoreList;
