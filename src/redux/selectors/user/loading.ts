import { createSelector } from 'reselect';
import { IReduxState } from 'src/redux/store';

const userLoadingSelector = () =>
  createSelector([(state: IReduxState) => state.user.loading], (loading) => loading);

export default userLoadingSelector;
