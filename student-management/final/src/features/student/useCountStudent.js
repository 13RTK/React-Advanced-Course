import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { countStudents as countStudentsApi } from '../../services/apiStudent';

import { getConfig } from '../../utils/configHelper';
import { getUserId } from '../../utils/userHelper';

export function useCountStudent() {
  const pageSize = getConfig('PAGE_SIZE');

  const [studentCount, setStudentCount] = useState(0);
  const pageCount = Math.ceil(studentCount / pageSize);

  const { mutate: countStudents, isPending: isCounting } = useMutation({
    mutationFn: countStudentsApi,
    onSuccess: (countStudentsData) => setStudentCount(countStudentsData),
    onError: (error) => {
      toast.error(error.message);
    },
  });

  useEffect(() => {
    countStudents(getUserId());
  }, []);

  return { isCounting, pageCount };
}
