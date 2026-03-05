import { use, type JSX } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router'

interface Props {
  route: JSX.Element
}

export const PrivateRoute = ({ route }: Props) => {
  const { authStatus } = use(UserContext)

  if (authStatus === 'checking') {
    return <div>Loading...</div>
  }
  if (authStatus === 'authenticated') {
    return route
  }

  return <Navigate to="/login" replace />
}
