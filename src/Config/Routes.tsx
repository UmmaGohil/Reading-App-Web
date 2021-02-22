import { RouteConfig } from 'react-router-config'
import Home from '../Components/Home'

export const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: Home, 
  }
]

export default routes