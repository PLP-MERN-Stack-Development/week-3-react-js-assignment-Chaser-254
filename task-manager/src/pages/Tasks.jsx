import { useLocalStorage } from '../hooks/useLocalStorage';
import Button from '../components/Button';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = () => {
    const title = prompt('Task title');
    if (title) setTasks([...tasks, { title, completed: false }]);
  };

  const toggle = i => {
    const updated = [...tasks];
    updated[i].completed = !updated[i].completed;
    setTasks(updated);
  };

  const remove = i => {
    const updated = tasks.filter((_, index) => index !== i);
    setTasks(updated);
  };

  return (
    <div>
      <Button onClick={addTask}>Add Task</Button>
      <ul className="mt-4 space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="flex justify-between">
            <span className={t.completed ? 'line-through' : ''}>{t.title}</span>
            <div>
              <Button variant="secondary" onClick={() => toggle(i)}>Toggle</Button>
              <Button variant="danger" onClick={() => remove(i)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}