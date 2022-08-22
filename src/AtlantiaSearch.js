import React from 'react';
import { Provider } from 'react-redux';
import { Home } from './components/Home';
import store from './redux/store/store';

const AtlantiaSearch = () => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
};

export default AtlantiaSearch;
