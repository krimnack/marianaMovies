import { Provider } from 'react-redux';
import { RoutingMap } from './utils/Routing';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <RoutingMap />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
