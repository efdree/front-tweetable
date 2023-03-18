import AuthenticatedApp from "./AuthenticatedApp";
import UnAuthenticatedApp from "./UnAuthenticatedApp";
import { useAuth } from "./context/auth-context";

function App() {
  const { user } = useAuth();
  console.log(user);
  return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

export default App;
