import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import { uploadAvatar } from '../../services/apiStorage';

import { userAtom } from '../../atoms/user';

function Info() {
  const [user, setUser] = useAtom(userAtom);
  const [currentAvatarUrl, setCurrentAvatarUrl] = useState(user.avatar);

  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    setCurrentAvatarUrl(user.avatar);
  }, [user]);

  function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const newAvatarUrl = URL.createObjectURL(file);
    setCurrentAvatarUrl(newAvatarUrl);
  }

  async function onClick() {
    if (!avatarFile) {
      // TODO: warning toast
      console.log('Please select an avatar');
      return;
    }

    const data = await uploadAvatar(avatarFile);

    setUser(data.user.user_metadata);
  }

  return (
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" value="Alex" disabled />
        </label>

        <ul className="menu bg-base-200 rounded-box">
          <li>
            <details open>
              <summary>Class In Charge</summary>
              <ul>
                <li>
                  <a className="pointer-events-none">Class 10 | Year 9</a>
                </li>
                <li>
                  <a className="pointer-events-none">Class 11 | Year 10</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="text-center">
        <button className="btn btn-primary my-2" onClick={onClick}>
          Update Avatar
        </button>
      </div>
    </div>
  );
}
export default Info;
