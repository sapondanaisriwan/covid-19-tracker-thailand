export default function Header() {
  return (
    <header className="fixed right-0 left-0 bg-gray-900">
      <nav className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-lg leading-6 font-semibold text-white">
            <h1>Covid Tracker</h1>
          </div>
          <a
            href="https://github.com/sapondanaisriwan/covid-19-tracker-thailand"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            <box-icon
              type="logo"
              name="github"
              size="md"
              color={"white"}
            ></box-icon>
          </a>
        </div>
      </nav>
    </header>
  );
}
