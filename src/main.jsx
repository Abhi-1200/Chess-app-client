import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js' 
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import LinkFunc from './utils/link.js'

const client = new ApolloClient({
  link: LinkFunc(),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <Provider store = {store}>
    <App />
    </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
