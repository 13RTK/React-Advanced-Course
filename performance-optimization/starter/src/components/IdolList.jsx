import { useQuery } from '@tanstack/react-query';

import IdolCard from './IdolCard.jsx';

import { getIdols as getIdolsApi } from '../services/apiIdol.js';
import { useAtomValue, useSetAtom } from 'jotai';
import { searchAtom } from '../atoms/search.js';
import { idolCountAtom } from '../atoms/idolCount.js';
import { useEffect } from 'react';
import { Activity } from 'react';
import Spinner from './Spinner.jsx';

function IdolList() {
  const searchAtomValue = useAtomValue(searchAtom);
  const setIdolCount = useSetAtom(idolCountAtom);

  const {
    data: idolList,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['idols'],
    queryFn: getIdolsApi,
  });

  useEffect(() => {
    if (isSuccess) {
      setIdolCount(idolList.length);
    }
  }, [idolList, isSuccess]);

  const filteredIdols = idolList?.filter((idol) => {
    if (!searchAtomValue) {
      return idol;
    }

    return idol.name.toLowerCase().includes(searchAtomValue.toLowerCase());
  });

  return (
    <>
      <Activity mode={isLoading ? 'visible' : 'hidden'}>
        <Spinner />
      </Activity>

      <Activity mode={!isLoading ? 'visible' : 'hidden'}>
        <main className="grid grid-cols-4 grid-rows-1 gap-5 mt-20">
          {filteredIdols?.map((idol) => (
            <IdolCard key={idol.id} idol={idol} />
          ))}
        </main>
      </Activity>
    </>
  );
}
export default IdolList;
