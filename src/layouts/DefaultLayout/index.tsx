import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoytContainer } from './styles'

export function DefaultLayoyt() {
  return (
    <LayoytContainer>
      <Header />
      <Outlet />
    </LayoytContainer>
  )
}
