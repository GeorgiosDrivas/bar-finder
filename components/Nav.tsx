export default function Nav() {
  return (
    <>
      <nav className="flex justify-between items-center px-4">
        <h1 className="text-3xl">BarFinder</h1>
        <ul className="flex justify-between items-center space-x-4">
          <li>
            <a href="#" className="text-sm">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Account
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
