import { useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { getStudentListWithLimit as getStudentListWithLimitApi } from '../../services/apiStudent';

import { getUserId } from '../../utils/userHelper';
import { getConfig } from '../../utils/configHelper';

const userId = getUserId();

export function useStudentList() {
  const pageSize = getConfig('PAGE_SIZE');
  const [searchParams, setSearchParams] = useSearchParams();

  const [studentList, setStudentList] = useState([]);
  const [currentPage, setCurrentPage] = useState(searchParams.get('page') || 1);

  const { mutate: getStudentListWithLimit, isPending: isStudentListLoading } =
    useMutation({
      mutationFn: ({ userId, currentPage, pageSize }) =>
        getStudentListWithLimitApi(userId, currentPage, pageSize),
      onSuccess: (studentListData) => setStudentList(studentListData),
      onError: (error) => {
        toast.error(error.message);
      },
    });

  useEffect(() => {
    setSearchParams({ page: currentPage });
    getStudentListWithLimit({ userId, currentPage, pageSize });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(searchParams.get('page') || 1);
  }, [searchParams.get('page')]);

  return {
    studentList,
    isStudentListLoading,
    getStudentListWithLimit,
    currentPage,
  };
}
