import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import {
  countStudents as countStudentsApi,
  getStudentListWithLimit as getStudentListWithLimitApi,
} from '../../services/apiStudent';
import { getConfig } from '../../utils/configHelper';
import { getUserId } from '../../utils/userHelper';
import { studentSearchConditionAtom } from '../../atoms/search';

import StudentListItem from './StudentListItem';
import Loading from '../../ui/Loading';
import Pagination from '../../ui/Pagination';

function StudentList() {
  const [studentList, setStudentList] = useState([]);

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

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1);
  const pageSize = getConfig('PAGE_SIZE');

  const [studentCount, setStudentCount] = useState(0);
  const pageCount = Math.ceil(studentCount / pageSize);

  const { mutate: countStudents, isPending: isCounting } = useMutation({
    mutationFn: countStudentsApi,
    onSuccess: (countStudentsData) => setStudentCount(countStudentsData),
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: getStudentListWithLimit, isPending: isStudentListLoading } =
    useMutation({
      mutationFn: ({ userId, currentPage, pageSize }) =>
        getStudentListWithLimitApi(userId, currentPage, pageSize),
      onSuccess: (studentListData) => setStudentList(studentListData),
      onError: (error) => {
        toast.error(error.message);
      },
    });

  const isLoading = isCounting || isStudentListLoading;

  useEffect(() => {
    countStudents(getUserId());
  }, []);

  useEffect(() => {
    const userId = getUserId();
    setSearchParams({ page: currentPage });
    getStudentListWithLimit({ userId, currentPage, pageSize });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(searchParams.get('page') || 1);
  }, [searchParams.get('page')]);

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
