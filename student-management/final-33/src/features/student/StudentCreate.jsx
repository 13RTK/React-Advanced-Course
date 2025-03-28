import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { getConfig } from '../../utils/configHelper';

import { getTeacherByTeacherId } from '../../services/apiTeacher';
import { createStudent } from '../../services/apiStudent';
import { signup } from '../../services/apiAuth';
import { toast } from 'sonner';

import Loading from '../../ui/Loading';
import ErrorMessage from '../../ui/ErrorMessage';

function StudentCreate() {
  const navigate = useNavigate();

  const validationSchema = yup
    .object({
      email: yup.string().required().email(),
      name: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const [isLoading, setIsLoading] = useState(true);

  const [teacherId, setTeacherId] = useState('');
  const [classInChargeArr, setClassInChargeArr] = useState([]);

  const [classInfo, setClassInfo] = useState('x|x');
  const [gender, setGender] = useState('male');

  useEffect(() => {
    const token = getConfig('SUPABASE_TOKEN');
    const userToken = JSON.parse(localStorage.getItem(token));

    if (!userToken) {
      return;
    }
    setTeacherId(userToken.user.id);

    async function fetchData() {
      setIsLoading(true);

      const teachers = await getTeacherByTeacherId(userToken.user.id);
      const classInChargeArrData = await JSON.parse(
        teachers[0].class_in_charge
      );

      setClassInChargeArr(classInChargeArrData);
      setClassInfo(classInChargeArrData[0]);

      setIsLoading(false);
    }

    fetchData();
  }, []);

  async function onSubmit({ email, name }) {
    toast.loading('Creating...');

    // Signup student user
    const userData = await signup(email, '123456', { isStudent: true });
    console.log(userData);

    // Insert student
    const students = await createStudent({
      name,
      class: classInfo.split('|')[0],
      grade: classInfo.split('|')[1],
      gender,
      teacher_id: teacherId,
      avatar:
        'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
      student_id: userData.user.id,
    });
    console.log(students);

    toast.dismiss();
    toast.success('Successfully created');
    navigate('/home/student');
  }

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <form
          className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-3/4 mx-auto pt-4">
            <label className="input input-bordered flex items-center gap-2 my-4">
              Email
              <input
                type="text"
                defaultValue="someone@example.com"
                className="grow"
                {...register('email')}
              />
              {errors.email && (
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              )}
            </label>

            <label className="input input-bordered flex items-center gap-2 my-4">
              Name
              <input
                type="text"
                defaultValue="someone"
                className="grow"
                {...register('name')}
              />
              {errors.name && (
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              )}
            </label>

            <select
              className="select select-bordered w-full mb-4"
              value={classInfo}
              onChange={(e) => setClassInfo(e.target.value)}
            >
              <option disabled>Choose Class</option>
              {classInChargeArr.map((item) => (
                <option key={item} value={item}>
                  Class {item.split('|')[0]} | Year {item.split('|')[1]}
                </option>
              ))}
            </select>

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
            <button className="btn btn-primary my-2">Create Student</button>
          </div>
        </form>
      )}
    </>
  );
}

export default StudentCreate;
