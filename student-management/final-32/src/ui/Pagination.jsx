import { useSearchParams } from 'react-router-dom';

function Pagination({ currentPage = 1, pageCount = 1 }) {
  const [_, setSearchParams] = useSearchParams();

  return (
    <div className="join flex items-center justify-center">
      {new Array(pageCount).fill(1).map((_, idx) => (
        <button
          className={`join-item btn btn-lg ${
            currentPage == idx + 1 ? 'btn-disabled' : ''
          }`}
          onClick={() => setSearchParams({ page: idx + 1 })}
          key={idx}
        >
          {idx + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
