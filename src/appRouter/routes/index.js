import { About, Contact, Home, Projects } from "../../pages";
import { RequireAuth } from "./RequireAuth";

const authRoutes = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "About", path: "/about", element: <About /> },
  { name: "Contact", path: "/contact", element: <Contact /> },
  { name: "Projects", path: "/projects", element: <Projects /> },
  { name: "Contact", path: "/contact", element: <Contact /> },
  { name: "Projects", path: "/projects", element: <Projects /> },
];

export { authRoutes, RequireAuth };
