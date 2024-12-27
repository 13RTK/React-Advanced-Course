import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';

import { isStudentAtom } from '../atoms/user';
import { toast } from 'sonner';
import {
  scoreSearchConditionAtom,
  studentSearchConditionAtom,
} from '../atoms/search';
import Condition from './Condition';

function Toolbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchString, setSearchString] = useState('');

  const isStudent = useAtomValue(isStudentAtom);

  function onClick() {
    const { pathname } = location;

    if (pathname === '/home/score') {
      navigate('/home/score/upload');
      return;
    }

    navigate('/home/student/create');
  }

  const isStudentList = location.pathname === '/home/student';
  const [studentSearchCondition, setStudentSearchCondition] = useAtom(
    studentSearchConditionAtom
  );
  const [scoreSearchCondition, setScoreSearchCondition] = useAtom(
    scoreSearchConditionAtom
  );

  function onSearch() {
    if (!searchString.length) {
      toast.dismiss();
      toast.warning('Please enter a search string');
      return;
    }

    if (isStudentList) {
      setStudentSearchCondition((prev) => [
        ...prev,
        searchString.toLowerCase(),
      ]);
    } else {
      setScoreSearchCondition((prev) => [...prev, searchString.toLowerCase()]);
    }

    setSearchString('');
  }

  function onDelete(idx) {
    if (isStudentList) {
      setStudentSearchCondition((prev) => prev.filter((_, i) => i !== idx));
    } else {
      setScoreSearchCondition((prev) => prev.filter((_, i) => i !== idx));
    }
  }

  return (
    <section className="my-4 grid grid-cols-4 gap-2">
      {/* Conditions */}
      <div className="col-span-1 my-auto">
        {isStudentList
          ? studentSearchCondition.map((studentCondition, idx) => (
              <Condition onDelete={() => onDelete(idx)} key={idx}>
                {studentCondition}
              </Condition>
            ))
          : scoreSearchCondition.map((scoreCondition, idx) => (
              <Condition onDelete={() => onDelete(idx)} key={idx}>
                {scoreCondition}
              </Condition>
            ))}
      </div>

      {/* Search bar */}
      <div className="col-span-2">
        <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 cursor-pointer"
            onClick={onSearch}
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* Action button */}
      <div className="col-span-1 text-center">
        {!isStudent && (
          <button className="btn btn-primary" onClick={onClick}>
            {location.pathname === '/home/score'
              ? 'Upload Score'
              : 'Create Student'}
          </button>
        )}
      </div>
    </section>
  );
}
export default Toolbar;
