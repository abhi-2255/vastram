import { useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'

interface Props {
    children: React.ReactNode
}

const AdminProtectedRoute: React.FC<Props> = ({ children }) => {
    const router = useRouter()
    const token = localStorage.getItem('adminToken')
    const role = localStorage.getItem('adminRole')

    useEffect(() => {
        if (!token || role !== 'admin') {
            router.navigate({ to: '/admin/login' })
        }
    }, [token, role, router])

    if (!token || role !== 'admin') return null

    return <>{children}</>
}

export default AdminProtectedRoute
