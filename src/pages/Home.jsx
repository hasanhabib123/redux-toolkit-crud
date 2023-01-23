import { Button, CardContent, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomModal from '../components/CustomModal';
import TaskSection from '../components/TaskSection';
import { getTasksAction } from '../redux/actions/taskAction';
import { filteredData } from '../utils/helper';

const Home = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { tasks, isLoading } = useSelector((state) => state.tasks);

  const { todaysTasks, upcomingTasks, newTask } = filteredData(tasks);

  useEffect(() => {
    if (tasks?.length === 0) dispatch(getTasksAction());
  }, [dispatch, tasks]);

  return (
    <Stack width="100%">
      <Stack
        pb={3}
        sx={{
          borderBottom: '1px solid #4fc3f7',
        }}
      >
        <Stack width="18%">
          <Button
            variant="contained"
            sx={{ background: '#4fc3f7' }}
            onClick={() => setOpen(true)}
          >
            Add Task
          </Button>
        </Stack>
      </Stack>
      <CardContent>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && tasks?.length > 0 ? (
          <TaskSection
            todaysTasks={todaysTasks}
            upcomingTasks={upcomingTasks}
            newTask={newTask}
            isLoading={isLoading}
          />
        ) : (
          <Typography color="#616161">No Tasks</Typography>
        )}
      </CardContent>
      {open && <CustomModal open={open} setOpen={setOpen} />}
    </Stack>
  );
};

export default Home;
