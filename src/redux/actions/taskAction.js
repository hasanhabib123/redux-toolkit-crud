import axios from 'axios';
import { toast } from 'react-toastify';

import { getReadableFormate } from '../../utils/helper';
import { deleteTask, getTaskLoading, getTasks } from '../reducers/tasksReducer';

export const getTasksAction = () => async (dispatch) => {
  getTaskLoading();
  try {
    const res = await axios.get('/tasks');
    const filteredDate = getReadableFormate(res.data);
    dispatch(getTasks(filteredDate));
  } catch (err) {
    toast(err, {
      type: 'error',
    });
  }
};

export const addTaskAction = (task) => async (dispatch) => {
  try {
    await axios.post('/tasks', task);
    const res = await axios.get('/tasks');
    const filteredDate = getReadableFormate(res.data);
    dispatch(getTasks(filteredDate));
    toast('Task added successfully', {
      type: 'success',
    });
  } catch (err) {
    toast(err, {
      type: 'error',
    });
  }
};

export const deleteTaskAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`/tasks/${id}`);
    dispatch(deleteTask(id));
    toast('Task deleted successfully', {
      type: 'success',
    });
  } catch (err) {
    toast(err, {
      type: 'error',
    });
  }
};

export const updateTaskAction = (id, task) => async (dispatch) => {
  try {
    await axios.patch(`/tasks/${id}`, task);
    dispatch(getTasksAction());
    toast('Task updated successfully', {
      type: 'success',
    });
  } catch (err) {
    toast(err, {
      type: 'error',
    });
  }
};
