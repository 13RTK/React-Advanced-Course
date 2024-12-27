import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { signup } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { createTeacher } from '../../services/apiTeacher';
import ErrorMessage from '../../ui/ErrorMessage';

function Signup() {
  const navigate = useNavigate();

  const validationSchema = yup
    .object({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      confirmPassword: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref('password')], 'Passwords must match'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  async function onSubmit({ email, password }) {
    const data = await signup(email, password);

    console.log(data);

    const teacherId = data.user.id;

    await createTeacher({ teacher_id: teacherId });
  }

  return (
    <form
      className="w-1/3 mx-auto shadow-2xl shadow-blue-300 rounded-box mt-40"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center text-4xl">Sunshine</h1>

      <div className="w-3/4 mx-auto">
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
        </label>

        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          )}
        </label>

        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Confirm Password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          )}
        </label>
      </div>

      <div className="text-center">
        <button className="btn btn-secondary mx-2 my-2">Signup</button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Signup;
