import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import FormError from './FormError.jsx';
import { addIdol } from '../services/apiIdol.js';

const schema = yup
  .object({
    name: yup.string().required(),
    gender: yup.string().required(),
    type: yup.string().required(),
    description: yup.string(),
  })
  .required();

const AddIdol = function AddIdol() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const queryClient = useQueryClient();

  const { mutate: handleAddIdol, isPending } = useMutation({
    mutationKey: ['idols'],
    mutationFn: addIdol,
    onSuccess: () => {
      queryClient.invalidateQueries(['idols']);
      reset();
      document.querySelector('#close-modal').click();
    },
  });

  return (
    <form
      className="flex flex-col justify-center gap-2 my-4 items-center"
      onSubmit={handleSubmit(handleAddIdol)}
    >
      {/* name */}
      <label className="w-1/2 input col-span-1 mx-auto">
        <input
          type="text"
          className="grow"
          name="name"
          placeholder="The name of the idol"
          {...register('name')}
          disabled={isPending}
        />
      </label>
      <FormError>{errors.name?.message}</FormError>

      {/* gender and type */}
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-start">
          <select
            defaultValue=""
            className="select w-fit"
            {...register('gender')}
            disabled={isPending}
            name="gender"
          >
            <option value="" disabled>
              choose gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
          <FormError>{errors.gender?.message}</FormError>
        </div>

        <div className="flex flex-col items-start">
          <select
            defaultValue=""
            className="select w-fit"
            {...register('type')}
            disabled={isPending}
            name="type"
          >
            <option value="" disabled>
              choose type
            </option>
            <option value="solo">solo</option>
            <option value="group">group</option>
          </select>
          <FormError>{errors.type?.message}</FormError>
        </div>
      </div>

      {/* description */}
      <fieldset className="fieldset w-1/2">
        <textarea
          className="textarea h-24"
          placeholder="Description"
          value="Add some description"
          {...register('description')}
          disabled={isPending}
          name="description"
        ></textarea>
        <FormError>{errors.description?.message}</FormError>
      </fieldset>

      <button
        className="btn btn-secondary w-fit"
        type="submit"
        disabled={isPending}
      >
        Add Idol
      </button>
    </form>
  );
};

export default AddIdol;
