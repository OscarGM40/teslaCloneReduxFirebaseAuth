import { TypedUseSelectorHook,useDispatch,useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';


/* custom hooks */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
