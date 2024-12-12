import { useState } from 'react';

function StudentEdit() {
  const [name, setName] = useState('Alex');
  const [gender, setGender] = useState('Male');

  return (
    <div className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40">
      <div className="avatar pt-4 flex justify-center">
        <div className="w-24 rounded-full ">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>

      <div className="w-3/4 mx-auto">
        <label className="input input-bordered flex items-center gap-2 my-4">
          Name
          <input
            type="text"
            className="grow"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button className="btn btn-primary my-2">Update Profile</button>
      </div>
    </div>
  );
}
export default StudentEdit;
