import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from "./config/apolloClient"

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
