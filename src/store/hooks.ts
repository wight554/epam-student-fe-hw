import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { store } from './store'

type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
