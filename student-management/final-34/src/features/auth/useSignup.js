import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { createTeacher as createTeacherApi } from '../../services/apiTeacher';
import { signup as signupApi } from '../../services/apiAuth';

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: createTeacher, isPending: isCreating } = useMutation({
    mutationFn: createTeacherApi,
    onSuccess: () => {
      toast.success('Signup successful, please confirm your email');
      navigate('/login');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: signup, isPending: isSigning } = useMutation({
    mutationFn: ({ email, password }) => signupApi(email, password),
    onSuccess: (userData) => {
      createTeacher({ teacher_id: userData.user.id });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const isLoading = isCreating || isSigning;

  return { signup, isLoading };
}
