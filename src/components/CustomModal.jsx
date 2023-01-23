import { Button, Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import { addTaskAction } from '../redux/actions/taskAction';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,
};

export default function CustomModal({ open, setOpen }) {
  const nameRef = useRef();
  const dateRef = useRef();
  const dispatch = useDispatch();
  const handleStore = () => {
    if (!nameRef.current.value || !dateRef.current.value)
      return toast('Please fill all the fields', { type: 'error' });

    const data = {
      id: uuid(),
      name: nameRef.current.value,
      date: new Date(dateRef.current.value).getTime(),
    };
    dispatch(addTaskAction(data));
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
            <TextField fullWidth label="Task Name" inputRef={nameRef} />
            <TextField
              fullWidth
              type="datetime-local"
              mt={2}
              inputRef={dateRef}
            />
            <Button
              variant="contained"
              sx={{ background: '#4fc3f7', mt: 2 }}
              onClick={handleStore}
            >
              Create
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
