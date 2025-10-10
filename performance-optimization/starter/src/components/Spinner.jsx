import Loading from './Loading.jsx';

function Spinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-100 bg-opacity-50">
      <Loading size="xl" type="spinner" color="primary" />
    </div>
  );
}
export default Spinner;
