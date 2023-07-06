import { NetWorkProvider } from 'providers/NetWorkProvider';
import { UserDataProvider } from 'providers/UserDataProvider';
import AppRoutes from 'routes/AppRoutes';
function App() {
  return (
    <NetWorkProvider>
      <UserDataProvider>
        <AppRoutes />
      </UserDataProvider>
    </NetWorkProvider>
  );
}

export default App;
