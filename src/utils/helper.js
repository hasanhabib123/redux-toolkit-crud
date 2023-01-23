export const filteredData = (data) => {
  if (!data || data.length === 0)
    return { newTask: {}, todaysTasks: [], upcomingTasks: [] };
  const todaysTasks = data.filter((task) => {
    return task.date === 'Today';
  });
  const upcomingTasks = data.filter((task) => {
    return task.date !== 'Today';
  });
  const newTask = data[data.length - 1];

  return { newTask, todaysTasks, upcomingTasks };
};

export const getReadableFormate = (data) => {
  if (data.length === 0) return;
  const convertedData = data.map((task) => {
    const date = new Date(task.date);
    const today = new Date();

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return { ...task, date: 'Today' };
    } else {
      return {
        ...task,
        date: `${date.getDate()} ${date.toLocaleString('default', {
          month: 'short',
        })}`,
      };
    }
  });
  return convertedData;
};
