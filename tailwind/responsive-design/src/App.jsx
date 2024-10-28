function App() {
  return (
    <>
      <nav className="text-center text-3xl sm:text-7xl mb-3">
        <span className="italic mr-4 text-blue-500">
          Tailwind CSS With React
        </span>
        <a href="#" className="underline mr-1 hidden sm:inline-block">
          Home
        </a>
        <a href="#" className="underline hidden sm:inline-block">
          About
        </a>

        <button className="sm:hidden">+</button>
      </nav>

      <main className="text-center grid grid-cols-1 sm:grid-cols-4 gap-2 text-4xl h-screen">
        <aside className="col-span-1 bg-green-300">Flexible</aside>
        <section className="col-span-1 sm:col-span-2 bg-green-300">
          Lightly
        </section>
        <aside className="col-span-1 bg-green-300">Compatible</aside>
      </main>
    </>
  );
}
export default App;
