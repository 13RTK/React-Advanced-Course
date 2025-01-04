import { useAtomValue } from 'jotai';

import { studentSearchConditionAtom } from '../../atoms/search';

import { useStudentList } from './useStudentList';
import { useCountStudent } from './useCountStudent';

import StudentListItem from './StudentListItem';
import Loading from '../../ui/Loading';
import Pagination from '../../ui/Pagination';

function StudentList() {
  const { studentList, isStudentListLoading, currentPage } = useStudentList();
  const { isCounting, pageCount } = useCountStudent();

  const isLoading = isCounting || isStudentListLoading;

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

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
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
          <Pagination currentPage={currentPage} pageCount={pageCount} />
        </>
      )}
    </>
  );
}

export default StudentList;
