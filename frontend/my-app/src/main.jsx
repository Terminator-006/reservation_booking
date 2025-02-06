import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import the necessary QueryClient
import './index.css';
import App from './App.jsx';

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> {/* Wrap the App in QueryClientProvider */}
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
