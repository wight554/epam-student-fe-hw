import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { Task1 } from './components/Task1'
import { FileList } from './components/FileList'
import { FileItem } from './components/FileItem'
import { CreateFileForm } from './components/CreateFileForm'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { AUTH_TOKEN } from './constants/constants'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import { Token } from './types'
import { setUser } from './slices/userSlice'
import { useAppDispatch } from './store/hooks'

const App = () => {
  const dispatch = useAppDispatch()
  const token = localStorage.getItem(AUTH_TOKEN)

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<Token>(token)
      const currentTime = Date.now() / 1000

      if (decoded.exp < currentTime) {
        dispatch(setUser(''))
        localStorage.setItem(AUTH_TOKEN, '')
      } else {
        dispatch(setUser({ name: decoded.name, id: decoded.id }))
      }
    }
  }, [token, dispatch])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />}>
          <Route index element={<FileList />} />
          <Route path=":filename" element={<FileItem />} />
        </Route>
        <Route path="create" element={<CreateFileForm />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
