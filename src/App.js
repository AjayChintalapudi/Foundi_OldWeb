import React from 'react';
import CartDataProvider from 'providers/CartDataProvider';
import { NetWorkProvider } from 'providers/NetWorkProvider';
import SpinnerProvider from 'providers/SpinnerProvider';
import { UserDataProvider } from 'providers/UserDataProvider';
import AppRoutes from 'routes/AppRoutes';
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';
import PubNubDataProvider from 'providers/PubNubDataProvider';
import { ToastProvider } from 'providers/ToastProvider';
const pubnub = new PubNub({
  publishKey: 'pub-c-b4dffdda-55eb-4064-b886-e90b6bbe2693',
  subscribeKey: 'sub-c-9473eb0a-a082-11ec-acf5-86a1e6519840',
  userId: 'myUniqueUUID',
  typingIndicator: true,
});

// console.log(pubnub._config.publishKey, 'pubnub.publishKey');
// console.log(pubnub._config.subscribeKey, 'pubnub.subscribeKey');
// console.log(pubnub._config.UUID, 'uuid');
// console.log(pubnub);

function App() {
  return (
    <ToastProvider>
      <SpinnerProvider>
        <NetWorkProvider>
          <UserDataProvider>
            <CartDataProvider>
              <PubNubProvider client={pubnub}>
                <PubNubDataProvider>
                  <AppRoutes />
                </PubNubDataProvider>
              </PubNubProvider>
            </CartDataProvider>
          </UserDataProvider>
        </NetWorkProvider>
      </SpinnerProvider>
    </ToastProvider>
  );
}

export default App;
