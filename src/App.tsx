import React, { ReactElement } from 'react';
import RepositoriseList from './components/RepositoriesList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = (): ReactElement => {
  return (
    <Provider store={store}>
      <div>
        <h1>SearchList</h1>
        <RepositoriseList />
      </div>
    </Provider>
  );
};

export default App;
