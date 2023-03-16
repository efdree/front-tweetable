import AuthenticatedApp from "./AuthenticatedApp";
import UnAuthenticatedApp from "./UnAuthenticatedApp";
import { useAuth } from "./context/auth-context";

function App() {
  const { user } = useAuth();

  return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

export default App;
