import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div className='container'>
      <RouterProvider router={routes}>
        <Toaster></Toaster>
      </RouterProvider>
    </div>
  );
}

// shiuli2015.it@gmail.com pMS3sEp&h0D7
export default App;
