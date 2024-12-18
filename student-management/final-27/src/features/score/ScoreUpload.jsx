import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserId } from '../../utils/userHelper';
import { getStudentList } from '../../services/apiStudent';
import { createScore } from '../../services/apiScore';

import { toast } from 'sonner';

import Loading from '../../ui/Loading';

function ScoreUpload() {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState({
    name: 'someone',
    student_id: '123456789',
    class: 'x',
    grade: 'x',
  });

  const [score, setScore] = useState(80);

  const [subject, setSubject] = useState('Mathematics');

  const [semesterYear, setSemesterYear] = useState(new Date().getFullYear());
  const [semesterSeason, setSemesterSeason] = useState('Spring');

  const yearList = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, idx) => 2000 + idx
  );

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const userId = getUserId();

      const studentList = await getStudentList(userId);
      setCurrentStudent(studentList[0]);
      setStudents(studentList);

      setIsLoading(false);
    }

    fetchData();
  }, []);

  async function onClick() {
    toast.loading('Creating...');

    const newScore = {
      student_id: currentStudent.student_id,
      score,
      subject,
      semesterYear,
      semesterSeason,
    };

    const scores = await createScore(newScore);
    console.log(scores);

    toast.dismiss();
    toast.success('Successfully created');

    navigate('/home/score');
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40">
          <div className="w-3/4 mx-auto pt-4">
            <select
              className="select select-bordered w-full mb-2"
              value={currentStudent.student_id}
              onChange={(e) => {
                const selectedStudent = students.find(
                  (student) => student.student_id === e.target.value
                );

                setCurrentStudent(selectedStudent);
              }}
            >
              <option disabled>Choose Student</option>
              {students.map((student, idx) => (
                <option key={idx} value={student.student_id}>
                  {student.name}
                </option>
              ))}
            </select>

            <label className="input input-bordered flex items-center gap-2 my-4">
              Student ID
              <input
                type="text"
                className="grow"
                value={currentStudent.student_id}
                disabled
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-4">
              Class
              <input
                type="text"
                className="grow"
                value={`Class ${currentStudent.class} | Year ${currentStudent.grade}`}
                disabled
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 my-4">
              Score
              <input
                type="number"
                className="grow"
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
              />
            </label>

            <select
              className="select select-bordered w-full mb-4"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option disabled>Choose Subject</option>
              <option>Mathematics</option>
              <option>English</option>
              <option>Science</option>
              <option>History</option>
              <option>Geography</option>
              <option>Art</option>
              <option>Music</option>
              <option>Sports</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <select
                className="select select-bordered w-full"
                value={semesterYear}
                onChange={(e) => setSemesterYear(e.target.value)}
              >
                <option disabled>Choose Year</option>
                {yearList.map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
              <select
                className="select select-bordered w-full"
                value={semesterSeason}
                onChange={(e) => setSemesterSeason(e.target.value)}
              >
                <option disabled>Choose Season</option>
                <option>Spring</option>
                <option>Fall</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-primary my-2" onClick={onClick}>
              Upload Score
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ScoreUpload;
