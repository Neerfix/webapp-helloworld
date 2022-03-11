
/** Routes **/
import authRoutes from "@/router/authRoutes";
import passportRoutes from "@/router/passportRoutes";
import voyageRoutes from "@/router/voyageRoutes";

/** Pages **/
import HomePage from "../pages/public/Home";
import InteractiveMap from "../pages/public/InteractiveMap";
import FeedPage from "../pages/Feed/Feed";
import ProfilePage from "@/pages/Profile/Profile";
import NotFoundPage from "@/pages/public/NotFound";

const globalRoutes = [
	{ path: '*', element: <NotFoundPage /> },
	{ path: '/', element: <HomePage /> },
	{ path: '/map', element: <InteractiveMap /> },
	{ path: '/feed', element: <FeedPage /> },
	{ path: '/profile/:uuid', element: <ProfilePage /> },
]

const routes = globalRoutes.concat(
	authRoutes,
	passportRoutes,
	voyageRoutes
);

export default routes;
