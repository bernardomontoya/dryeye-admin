import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../components/context/context";

type PublicRouteProps = {
  children: React.ReactNode;
  path: string;
  exact: boolean;
};

const PublicRoute = ({ children, path, exact }: PublicRouteProps) => {
  const { state } = useAuth();
  const { authenticated } = state;
  return (
    <Route path={path} exact={exact}>
      {!authenticated ? children : <Redirect to="/" />}
    </Route>
  );
};

export default PublicRoute;
