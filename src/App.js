import { UserDataProvider } from 'providers/UserDataProvider';
import AppRoutes from 'routes/AppRoutes';
function App() {
  return (
    <UserDataProvider>
      <AppRoutes />
    </UserDataProvider>
  );
}

export default App;
