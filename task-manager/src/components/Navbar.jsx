import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-gray-600 p-4 text-white flex items-center justify-between">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/api">API</Link></li>
      </ul>
      <button
        className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black  transition"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? '🌙 ' : '☀️'}
      </button>
    </nav>
  );
}