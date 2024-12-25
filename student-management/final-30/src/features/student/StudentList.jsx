import { useEffect, useState } from 'react';
import StudentListItem from './StudentListItem';
import { getStudentList } from '../../services/apiStudent';
import { getUserId } from '../../utils/userHelper';
import Loading from '../../ui/Loading';

import { useAtomValue } from 'jotai';
import { studentSearchConditionAtom } from '../../atoms/search';

function StudentList() {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const studentSearchCondition = useAtomValue(studentSearchConditionAtom);

  const filteredStudentList = studentList.filter((studentItem) => {
    if (!studentSearchCondition.length) {
      return studentList;
    }

    const studentInfoJSON = JSON.stringify([
      studentItem.name.toLowerCase(),
      studentItem.class,
      studentItem.gender,
      studentItem.grade,
    ]);

    for (const condition of studentSearchCondition) {
      if (!studentInfoJSON.includes(condition)) {
        return false;
      }
    }

    return true;
  });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const userId = getUserId();

      const mockStudentList = await getStudentList(userId);
      setStudentList(mockStudentList);

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
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
              {filteredStudentList.map((studentItem) => (
                <StudentListItem
                  key={studentItem.id}
                  studentItem={studentItem}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
export default StudentList;
