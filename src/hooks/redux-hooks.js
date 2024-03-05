import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch()
// export const useAppSelector = useSelector
export { useSelector as useAppSelector } from 'react-redux'
