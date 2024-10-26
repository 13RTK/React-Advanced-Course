import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const input_style = 'mt-1 border-solid border-2 rounded';

  const [usernameClass, setUsernameClass] = useState('border-black');
  const [passwordClass, setPasswordClass] = useState('border-black');

  useEffect(() => {
    setUsernameClass('border-black');
    setPasswordClass('border-black');

    if (username.length > 0 && username.length < 4) {
      setUsernameClass('border-red-400');
    }

    if (password.length > 0 && password.length < 4) {
      setPasswordClass('border-red-400');
    }
  }, [username, password]);

  return (
    <>
      <nav className="text-center">Tailwind CSS with React</nav>
      <hr />
      <main className="text-center">
        <label>
          username:
          <input
            type="text"
            className={`${input_style} ${usernameClass}`}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <br />
        <label>
          password:
          <input
            type="password"
            className={`${input_style} ${passwordClass}`}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
      </main>
    </>
  );
}
