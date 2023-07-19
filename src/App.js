import CartDataProvider from 'providers/CartDataProvider';
import { NetWorkProvider } from 'providers/NetWorkProvider';
import { UserDataProvider } from 'providers/UserDataProvider';
import AppRoutes from 'routes/AppRoutes';
function App() {
  return (
    <NetWorkProvider>
      <UserDataProvider>
        <CartDataProvider>
          <AppRoutes />
        </CartDataProvider>
      </UserDataProvider>
    </NetWorkProvider>
  );
}

export default App;
