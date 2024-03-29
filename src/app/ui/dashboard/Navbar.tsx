import ThemeDropdown from "./ThemeDropdown";

function Navbar() {
  return (
    <nav className="navbar w-auto bg-neutral text-neutral-content rounded-box">
      <div className="flex-none lg:hidden">
        <label
          htmlFor="sidebar"
          aria-label="open sidebar"
          className="btn btn-square btn-sm btn-ghost"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <div className="flex-1 px-2 font-bold text-xl">Dashboard</div>
      <ul className="flex items-stretch">
        {/* Navbar menu content here */}
        <li>
          <ThemeDropdown />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
