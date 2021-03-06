import { combineReducers } from 'redux';
import user from './user';
import pages from './pages';
import modal from './modal';
import filter from './filter';
import assignments from './assignments';
import notifications from './notifications';
import snackbarMessage from './snackbarMessage';

export default combineReducers({
  user,
  pages,
  modal,
  filter,
  assignments,
  notifications,
  snackbarMessage,
});
