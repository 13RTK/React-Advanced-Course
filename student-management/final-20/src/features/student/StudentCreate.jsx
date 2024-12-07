import { useState } from 'react';

function StudentCreate() {
  const [name, setName] = useState('John Doe');
  const [classInfo, setClassInfo] = useState('Class 1 | Year 9');
  const [gender, setGender] = useState('Male');

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
          Class
          <input
            type="text"
            className="grow"
            value={classInfo}
            onChange={(e) => setClassInfo(e.target.value)}
          />
        </label>

        <select
          className="select select-bordered w-full mb-4"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option disabled>Choose Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      <div className="text-center">
        <button className="btn btn-primary my-2">Create Student</button>
      </div>
    </div>
  );
}

export default StudentCreate;
