import Calendar from '../Components/Calendar'
import Home from '../Components/Home'
import Result from '../Components/Result'
import Search from '../Components/Search'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: Home,
  },
  {
    path: '/',
    exact: true,
    component: Search,
    name: Search,
  },
  {
    path: '/',
    exact: true,
    component: Calendar,
    name: Calendar,
  },
  {
    path: '/',
    exact: true,
    component: Result,
    name: Result,
  }
]

export default routes