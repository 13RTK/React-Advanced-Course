import { useEffect, useState } from 'react';
import StudentListItem from './StudentListItem';
import { getStudentList } from '../../services/apiStudent';

function StudentList() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const mockStudentList = getStudentList();
    setStudentList(mockStudentList);
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table table-lg">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Class</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <StudentListItem /> */}
          {studentList.map((studentItem) => (
            <StudentListItem key={studentItem.id} studentItem={studentItem} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentList;
