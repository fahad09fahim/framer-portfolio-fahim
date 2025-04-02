import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <div className="flex justify-between items-center mx-auto p-[1.5rem]">
        <div>
          <Link to="/">Fahim</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/project">Project</Link>
          <Link to="/award">Award</Link>
        </div>
        <div>
          <button className="btn rounded-4xl bg-lime-500 bg-opacity-80 text-black px-4 py-2 ">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}
