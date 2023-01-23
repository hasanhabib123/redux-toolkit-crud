import { Button, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskAction } from '../redux/actions/taskAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

export default function UpdateModal({ open, setOpen, task }) {
  const nameRef = useRef();
  const dispatch = useDispatch();
  const handleUpdate = () => {
    const data = {
      name: nameRef.current.value,
    };
    dispatch(updateTaskAction(task.id, data));
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Task
          </Typography>
          <Stack
            id="modal-modal-description"
            sx={{ mt: 2 }}
            display="flex"
            direction="column"
            spacing={2}
          >
            <TextField
              fullWidth
              label="Task Name"
              inputRef={nameRef}
              defaultValue={task.name}
            />
            <Button
              variant="contained"
              sx={{ background: '#4fc3f7', mt: 2 }}
              onClick={handleUpdate}
            >
              Updated
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
