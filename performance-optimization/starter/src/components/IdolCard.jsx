import { Activity } from 'react';

function IdolCard({ idol }) {
  return (
    <div className="card bg-base-100 shadow-sm hover:border hover:border-accent">
      <figure
        className={`${
          idol.images.length > 1 ? 'hover-gallery' : ''
        } h-full w-60 mx-auto`}
      >
        {idol.images.map((image, idx) => {
          return <img src={`/imgs/${image}`} key={idx} alt={idol.name} />;
        })}
      </figure>
      <div className="card-body">
        {/* name gender and type */}
        <h2 className="card-title flex items-center">
          {idol.name}{' '}
          <span
            className={`${
              idol.gender === 'male' ? 'text-blue-500' : 'text-pink-500'
            }`}
          >
            {idol.gender === 'male' ? '♂️' : '♀️'}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <div
              className={`badge ${
                idol.type === 'group' ? 'badge-secondary' : 'badge-primary'
              }`}
            >
              {idol.type}
            </div>
          </div>
        </h2>
        {/* description */}
        <p>
          {idol.description.split(' ').length > 20
            ? idol.description.slice(0, 80) + '...'
            : idol.description}
        </p>
      </div>
    </div>
  );
}
export default IdolCard;
