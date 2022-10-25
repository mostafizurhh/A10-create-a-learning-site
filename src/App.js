import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes/Routes';





function App() {
  return (
    <div className='container'>
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

// shiuli2015.it@gmail.com pMS3sEp&h0D7
export default App;
