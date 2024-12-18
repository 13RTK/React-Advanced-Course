import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  getStudentByStudentId,
  updateStudent,
} from '../../services/apiStudent';
import { uploadAvatar } from '../../services/apiStorage';

import { getConfig } from '../../utils/configHelper';
import Loading from '../../ui/Loading';

function StudentEdit() {
  const [name, setName] = useState('Alex');
  const [gender, setGender] = useState('male');

  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const [currentAvatarUrl, setCurrentAvatarUrl] = useState(
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  );
  const [avatarFile, setAvatarFile] = useState(null);

  function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const newAvatarUrl = URL.createObjectURL(file);
    setCurrentAvatarUrl(newAvatarUrl);
  }

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      const students = await getStudentByStudentId(params.id);
      const student = students[0];

      setName(student.name);
      setGender(student.gender);
      setCurrentAvatarUrl(student.avatar);

      setIsLoading(false);
    }

    fetchData();
  }, []);

  async function onClick() {
    const newStudent = {
      name,
      gender,
    };

    if (avatarFile) {
      // Build avatar filename
      const token = getConfig('SUPABASE_TOKEN');

      const userToken = JSON.parse(localStorage.getItem(token));
      const avatarFilename = `${userToken.user.email}-${Date.now()}.png`;

      // Upload avatar file
      await uploadAvatar(avatarFile, avatarFilename);

      // Build avatar access url
      const supabaseUrl = getConfig('SUPABASE_URL');
      const avatar = `${supabaseUrl}/storage/v1/object/public/avatar/public/${avatarFilename}`;

      newStudent.avatar = avatar;
    }

    // Update student in supabase
    const student = await updateStudent(params.id, newStudent);
    console.log(student);

    navigate('/home/student');
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40">
          <div className="avatar pt-4 flex justify-center">
            <div className="w-24 rounded-full ">
              <label className="cursor-pointer" htmlFor="avatar-input">
                <img src={currentAvatarUrl} />
              </label>
            </div>
          </div>

          <input
            id="avatar-input"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />

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
              <option>male</option>
              <option>female</option>
            </select>
          </div>

          <div className="text-center">
            <button className="btn btn-primary my-2" onClick={onClick}>
              Update Profile
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default StudentEdit;
