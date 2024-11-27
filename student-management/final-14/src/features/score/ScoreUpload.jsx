import { useState } from 'react';

function ScoreUpload() {
  const [name, setName] = useState('John Doe');
  const [studentId, setStudentId] = useState('123456789');

  const [score, setScore] = useState(80);
  const [classInfo, setClassInfo] = useState('Class 1 | Year 9');

  const [subject, setSubject] = useState('Mathematics');

  const [semesterYear, setSemesterYear] = useState(new Date().getFullYear());
  const [semesterSeason, setSemesterSeason] = useState('Spring');

  const yearList = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, idx) => 2000 + idx
  );

  return (
    <div className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40">
      <div className="w-3/4 mx-auto pt-4">
        <label className="input input-bordered flex items-center gap-2 my-4">
          Name
          <input
            type="text"
            className="grow"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 my-4">
          Student ID
          <input
            type="text"
            className="grow"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2 my-4">
          Class
          <input
            type="text"
            className="grow"
            value={classInfo}
            onChange={(e) => setClassInfo(e.target.value)}
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
        <button className="btn btn-primary my-2">Upload Score</button>
      </div>
    </div>
  );
}

export default ScoreUpload;
