import CartDataProvider from 'providers/CartDataProvider';
import { NetWorkProvider } from 'providers/NetWorkProvider';
import SpinnerProvider from 'providers/SpinnerProvider';
import { UserDataProvider } from 'providers/UserDataProvider';
import AppRoutes from 'routes/AppRoutes';
function App() {
  return (
    <SpinnerProvider>
      <NetWorkProvider>
        <UserDataProvider>
          <CartDataProvider>
            <AppRoutes />
          </CartDataProvider>
        </UserDataProvider>
      </NetWorkProvider>
    </SpinnerProvider>
  );
}

export default App;
