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
    path: '/Search',
    exact: true,
    component: Search,
    name: Search,
  },
  {
    path: '/Calendar',
    exact: true,
    component: Calendar,
    name: Calendar,
  },
  {
    path: '/Result',
    exact: true,
    component: Result,
    name: Result,
  }
]

export default routes