import { useAtomValue, useSetAtom } from 'jotai';

import { idolCountAtom } from '../atoms/idolCount.js';
import { searchAtom } from '../atoms/search.js';

function Navbar() {
  const setSearchAtom = useSetAtom(searchAtom);
  const idolCountAtomValue = useAtomValue(idolCountAtom);

  function handleSearchInput(event) {
    setSearchAtom(event.target.value);
  }

  return (
    <nav className="navbar bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm fixed top-0 z-50">
      {/* Nav title */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Search idols</a>
      </div>
      <p className="flex-1 font-bold">include {idolCountAtomValue} idols</p>

      {/* open modal */}
      <button
        className="btn mx-1 btn-primary"
        onClick={() => document.getElementById('my_modal').showModal()}
      >
        Add idol
      </button>

      {/* Search */}
      <div className="flex gap-2 mx-1">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          onChange={handleSearchInput}
        />
      </div>

      {/* Theme toggle */}
      <select
        data-choose-theme
        defaultValue={''}
        className="select select-accent w-1/15 mx-1"
      >
        <option disabled>Color scheme</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="">System</option>
      </select>
    </nav>
  );
}

export default Navbar;
