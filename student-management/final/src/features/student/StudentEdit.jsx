import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

import {
  getStudentByStudentId as getStudentByStudentIdApi,
  updateStudent as updateStudentApi,
} from '../../services/apiStudent';
import { uploadAvatar } from '../../services/apiStorage';

import { getConfig } from '../../utils/configHelper';

import Loading from '../../ui/Loading';
import ErrorMessage from '../../ui/ErrorMessage';

function StudentEdit() {
  const params = useParams();
  const navigate = useNavigate();

  const validationSchema = yup
    .object({
      name: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Student Info Load
  const [gender, setGender] = useState('male');
  const [currentAvatarUrl, setCurrentAvatarUrl] = useState(
    'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
  );

  const { mutate: getStudentByStudentId, isPending: isLoading } = useMutation({
    mutationFn: ({ id }) => getStudentByStudentIdApi(id),
    onSuccess: (students) => {
      const student = students[0];

      setValue('name', student.name);
      setGender(student.gender);
      setCurrentAvatarUrl(student.avatar);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    getStudentByStudentId({ id: params.id });
  }, []);

  // Avatar change
  const [avatarFile, setAvatarFile] = useState(null);
  function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const newAvatarUrl = URL.createObjectURL(file);
    setCurrentAvatarUrl(newAvatarUrl);
  }

  // Update Student Info
  const { mutate: updateStudent, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, newStudent }) => {
      updateStudentApi(id, newStudent);
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success('Successfully updated');
      navigate('/home/student');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const [isUploading, setIsUploading] = useState(false);
  async function onSubmit({ name }) {
    toast.loading('Updating...');

    const newStudent = {
      name,
      gender,
    };

    if (avatarFile) {
      setIsUploading(true);

      // Build avatar filename
      const token = getConfig('SUPABASE_TOKEN');

      const userToken = JSON.parse(localStorage.getItem(token));
      const avatarFilename = `${userToken.user.email}-${Date.now()}.png`;

      // Upload avatar file(do not hookify with useMutation)
      await uploadAvatar(avatarFile, avatarFilename);

      const supabaseUrl = getConfig('SUPABASE_URL');
      newStudent.avatar = `${supabaseUrl}/storage/v1/object/public/avatar/public/${avatarFilename}`;

      setIsUploading(false);
    }

    // Update student in supabase
    updateStudent({ id: params.id, newStudent });
  }

  const isUpdatingStudent = isUpdating || isUploading;

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <form
          className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                defaultValue="Someone"
                {...register('name')}
              />
              {errors.name && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )}
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
            <button
              className="btn btn-primary my-2"
              disabled={isUpdatingStudent}
            >
              Update Profile
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default StudentEdit;
