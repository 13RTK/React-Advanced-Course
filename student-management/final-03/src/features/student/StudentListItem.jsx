function StudentListItem() {
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          {/* name and gender */}
          <div>
            <div className="font-bold">Yancy Tear</div>
            <div className="text-sm opacity-50">female</div>
          </div>
        </div>
      </td>
      {/* class and room teacher */}
      <td>
        Class 1 | Year 6
        <br />
        <span className="badge badge-ghost badge-sm">Alex</span>
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
        <button className="btn btn-error btn-xs">delete</button>
      </th>
    </tr>
  );
}
export default StudentListItem;
