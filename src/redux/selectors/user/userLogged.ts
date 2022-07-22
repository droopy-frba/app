import { createSelector } from 'reselect';
import { IReduxState } from 'src/redux/store';

const userLoggedSelector = () =>
  createSelector([(state: IReduxState) => state.user.user], (user) => user);

export default userLoggedSelector;
