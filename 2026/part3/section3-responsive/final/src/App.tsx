function App() {
  return (
    <>
      <nav className="text-center text-7xl font-serif mb-3">
        <span className="italic mr-4 text-blue-500">
          Tailwind CSS With React
        </span>
        <a href="#" className="underline mr-1 inline-block">
          Home
        </a>
        <a href="#" className="underline inline-block">
          About
        </a>

        <button
          type="button"
          className="bg-pink-300 border-2 my-auto rounded-2xl cursor-pointer leading-none align-middle"
        >
          +
        </button>
      </nav>

      <main className="text-center grid grid-cols-4 gap-2 text-4xl h-screen">
        <aside className="col-span-1 bg-green-300">Flexible</aside>
        <section className="col-span-2 bg-green-300">Lightly</section>
        <aside className="col-span-1 bg-green-300">Compatible</aside>
      </main>
    </>
  );
}
export default App;
