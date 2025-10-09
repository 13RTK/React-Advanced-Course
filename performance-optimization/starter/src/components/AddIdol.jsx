function AddIdol() {
  return (
    <form className="flex flex-col justify-center gap-2 my-4 items-center">
      <label className="w-1/2 input col-span-1 mx-auto">
        <input
          type="text"
          className="grow"
          name="idolName"
          placeholder="The name of the idol"
        />
      </label>
      <div className="flex justify-center gap-2">
        <select
          defaultValue="choose gender"
          className="select w-fit"
          name="gender"
        >
          <option disabled={true}>choose gender</option>
          <option>male</option>
          <option>female</option>
        </select>
        <select defaultValue="choose type" className="select w-fit" name="type">
          <option disabled={true}>choose type</option>
          <option>solo</option>
          <option>group</option>
        </select>
      </div>
      <fieldset className="fieldset w-1/2" name="description">
        <textarea
          className="textarea h-24"
          placeholder="Description"
        ></textarea>
      </fieldset>

      <button className="btn btn-secondary w-fit">Add Idol</button>
    </form>
  );
}
export default AddIdol;
