function Dialog({ children }) {
  return (
    <dialog id="my_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            id="close-modal"
          >
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
}
export default Dialog;
