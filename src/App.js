import { AppDataProvider } from 'providers/AppDataProvider';
import { UserDataProvider } from 'providers/UserDataProvider';
import AppRoutes from 'routes/AppRoutes';
function App() {
  return (
    <UserDataProvider>
      <AppDataProvider>
        <AppRoutes />
      </AppDataProvider>
    </UserDataProvider>
  );
}

export default App;
