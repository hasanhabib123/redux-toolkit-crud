import { Stack, Typography } from '@mui/material';
import { IoMdArrowDropdown } from 'react-icons/io';
import TaskCard from './TaskCard';

const TaskSection = ({ isLoading, newTask, todaysTasks, upcomingTasks }) => {
  return (
    <Stack>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Stack>
            <Stack
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                fontWeight: 'bold',
              }}
            >
              <IoMdArrowDropdown />
              <Typography fontWeight="bold">New Tasks</Typography>
            </Stack>
            {newTask && <TaskCard task={newTask} />}
          </Stack>
          <Stack>
            <Stack
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                fontWeight: 'bold',
              }}
            >
              <IoMdArrowDropdown />
              <Typography fontWeight="bold">Today</Typography>
            </Stack>
            {todaysTasks &&
              todaysTasks.map((task, index) => (
                <TaskCard key={index} task={task} />
              ))}
          </Stack>
          <Stack>
            <Stack
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                fontWeight: 'bold',
              }}
            >
              <IoMdArrowDropdown />
              <Typography fontWeight="bold">Upcoming</Typography>
            </Stack>
            {upcomingTasks &&
              upcomingTasks.map((task, index) => (
                <TaskCard key={index} task={task} />
              ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default TaskSection;
