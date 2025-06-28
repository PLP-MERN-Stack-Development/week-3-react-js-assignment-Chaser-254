export const filterTasks = (tasks, filter) => {
  if (filter === 'completed') return tasks.filter(t => t.completed);
  if (filter === 'active') return tasks.filter(t => !t.completed);
  return tasks;
};