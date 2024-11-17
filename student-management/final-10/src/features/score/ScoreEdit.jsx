import { useState } from 'react';

function ScoreEdit() {
  const [score, setScore] = useState(80);
  const [subject, setSubject] = useState('Mathematics');

  const [semesterYear, setSemesterYear] = useState(new Date().getFullYear());
  const [semesterSeason, setSemesterSeason] = useState('Spring');

  const yearList = Array.from(
    { length: new Date().getFullYear() - 2000 + 1 },
    (_, idx) => 2000 + idx
  );

  return (
    <div className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40">
      <h1 className="text-center text-4xl pt-4">Alex</h1>

      <div className="w-3/4 mx-auto">
        <label class="input input-bordered flex items-center gap-2 my-4">
          Class
          <input type="text" class="grow" value="Class 1 | Year 8" disabled />
        </label>

        <label class="input input-bordered flex items-center gap-2 my-4">
          Score
          <input
            type="number"
            class="grow"
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
        <button className="btn btn-primary my-2">Update Score</button>
      </div>
    </div>
  );
}
export default ScoreEdit;
