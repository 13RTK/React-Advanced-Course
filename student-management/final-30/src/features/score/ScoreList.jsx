import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';

import ScoreListItem from './ScoreListItem';
import { getScoreList } from '../../services/apiScore';
import {
  getStudentByStudentId,
  getStudentList,
} from '../../services/apiStudent';
import { getUserId } from '../../utils/userHelper';
import Loading from '../../ui/Loading';
import { isStudentAtom } from '../../atoms/user';
import { scoreSearchConditionAtom } from '../../atoms/search';

function ScoreList() {
  const [scoreList, setScoreList] = useState([]);
  const [students, setStudents] = useState([]);

  const isStudent = useAtomValue(isStudentAtom);
  const scoreSearchCondition = useAtomValue(scoreSearchConditionAtom);

  const [isLoading, setIsLoading] = useState(true);

  const filteredScoreList = scoreList.filter((scoreItem) => {
    return students
      .map((student) => student.student_id)
      .includes(scoreItem.student_id);
  });

  const filteredScoreListBySearch = filteredScoreList.filter((scoreItem) => {
    if (!scoreSearchCondition.length) {
      return true;
    }

    const scoreInfoJSON = JSON.stringify([
      scoreItem.subject.toLowerCase(),
      scoreItem.semesterSeason.toLowerCase(),
      scoreItem.score,
      scoreItem.semesterYear,
    ]);

    for (const condition of scoreSearchCondition) {
      if (!scoreInfoJSON.includes(condition)) {
        return false;
      }
    }

    return true;
  });

  useEffect(() => {
    if (isStudent === null) {
      return;
    }

    async function fetchData() {
      setIsLoading(true);

      const userId = getUserId();

      const scoreListData = await getScoreList();
      setScoreList(scoreListData);

      if (!isStudent) {
        const studentList = await getStudentList(userId);
        setStudents(studentList);
      } else {
        const studentList = await getStudentByStudentId(userId);
        setStudents(studentList);
      }

      setIsLoading(false);
    }

    fetchData();
  }, [isStudent]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
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
              {students.length > 0 &&
                filteredScoreListBySearch.map((scoreItem) => (
                  <ScoreListItem
                    key={scoreItem.id}
                    scoreItem={scoreItem}
                    currentStudent={
                      isStudent
                        ? students[0]
                        : students.find(
                            (student) =>
                              student.student_id === scoreItem.student_id
                          )
                    }
                  />
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ScoreList;
