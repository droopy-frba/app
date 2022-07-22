import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IReduxState } from '@/redux/store';

export const useTypedSelector: TypedUseSelectorHook<IReduxState> = useSelector;
