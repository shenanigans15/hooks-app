import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

export const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Información del usuario</h1>
      <hr />

      <pre className="my-4">{JSON.stringify({}, null, 2)}</pre>

      <Button variant="destructive">Cerrar sesión</Button>

      <Link to="/about">
        <Button variant="ghost">Volver a la página principal</Button>
      </Link>
    </div>
  )
}
