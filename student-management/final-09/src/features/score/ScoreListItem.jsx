function ScoreListItem({ scoreItem }) {
  return (
    <tr>
      <td>{scoreItem.name}</td>
      <td>{scoreItem.class}</td>
      <td>{scoreItem.subject}</td>
      <td>{scoreItem.semester}</td>
      <td>{scoreItem.score}</td>
      <th>
        <button className="btn btn-ghost btn-sm">details</button>
        <button className="btn btn-error btn-sm">delete</button>
      </th>
    </tr>
  );
}
export default ScoreListItem;
