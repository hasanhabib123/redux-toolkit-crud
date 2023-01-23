import { Chip, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteTaskAction } from '../redux/actions/taskAction';
import { generateRandomColorFromMUI } from '../utils/colors';
import UpdateModal from './UpdateModal';

const TaskCard = ({ task }) => {
  const [open, setOpen] = useState(false);
  const [updateTask, setTask] = useState({});
  const dispatch = useDispatch();
  const handleEvent = (e, id) => {
    if (e.detail === 1) {
      dispatch(deleteTaskAction(id));
    }
  };
  const handleUpdateModal = (task) => {
    setTask(task);
    setOpen(true);
  };

  return (
    <Stack>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 1,
          }}
          onClick={(e) => handleEvent(e, task.id)}
        >
          <HiOutlineCheckCircle color="#616161" size={24} />
          <Typography color="#616161">{task.name}</Typography>
        </Stack>
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: 3,
          }}
        >
          <Chip
            label={task.date}
            sx={{
              background: generateRandomColorFromMUI(),
              color: '#fff',
              height: '25px',
            }}
          />
          <AiFillEdit
            color="#9e9e9e"
            size={20}
            style={{ cursor: 'pointer' }}
            onClick={() => handleUpdateModal(task)}
          />
        </Stack>
      </Stack>
      {open && <UpdateModal open={open} setOpen={setOpen} task={updateTask} />}
    </Stack>
  );
};

export default TaskCard;
