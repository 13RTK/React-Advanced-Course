export default function App() {
  return (
    <>
      <nav className="text-center">Tailwind CSS with React</nav>
      <hr />
      <main className="text-center">
        <label>
          username:
          <input
            type="text"
            className="mt-1 border-solid border-2 border-black rounded"
          />
        </label>
        <br />
        <label>
          password:
          <input
            type="password"
            className="mt-1 border-solid border-2 border-black rounded"
          />
        </label>
      </main>
    </>
  );
}
