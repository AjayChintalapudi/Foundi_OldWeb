import { UserDataProvider } from 'providers/UserDataProvider';
import AppRoutes from 'routes/AppRoutes';
function App() {
  return (
    <div className="App">
      <UserDataProvider>
        <AppRoutes />
      </UserDataProvider>
    </div>
  );
}

export default App;
