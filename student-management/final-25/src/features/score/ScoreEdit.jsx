import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { getScoreByScoreId, updateScore } from '../../services/apiScore';
import { getStudentByStudentId } from '../../services/apiStudent';

function ScoreEdit() {
  const params = useParams();
  const navigate = useNavigate();

  const [currentStudent, setCurrentStudent] = useState({
    name: 'Someone',
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
      const scores = await getScoreByScoreId(params.id);
      const scoreData = scores[0];

      setScore(scoreData.score);
      setSubject(scoreData.subject);
      setSemesterSeason(scoreData.semesterSeason);
      setSemesterYear(scoreData.semesterYear);

      const students = await getStudentByStudentId(scoreData.student_id);
      const student = students[0];
      setCurrentStudent(student);
    }

    fetchData();
  }, []);

  async function onClick() {
    const newScore = {
      score,
      subject,
      semesterSeason,
      semesterYear,
    };

    const scores = await updateScore(params.id, newScore);
    console.log(scores);

    navigate('/home/score');
  }

  return (
    <div className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40">
      <h1 className="text-center text-4xl pt-4">{currentStudent.name}</h1>

      <div className="w-3/4 mx-auto">
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
          Update Score
        </button>
      </div>
    </div>
  );
}
export default ScoreEdit;
