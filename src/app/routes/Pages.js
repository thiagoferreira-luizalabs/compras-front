import Theme from "../containers/theme/Theme"
import Home from "../containers/home/Home"


export const Pages = {
  Home: {
    name: "Home",
    menuName: "Inicio",
    route: "/home",
    component: Home
  },
  Theme: {
    name: "Theme",
    menuName: "Tema",
    route: "/theme",
    component: Theme
  }
}

export const Menus = {

  Comercial: {
    title: "Comercial",
    subItems: [
      Pages.Home,
      Pages.Home,
      Pages.Home,
    ]
  },
  Logistica: {
    title: "Logística",
    subItems: [
      Pages.Home,
      Pages.Home,
      Pages.Home,
    ]
  },
  Theme: {
    title: "Tema",
    subItems: [
      Pages.Theme
    ]
  },
}