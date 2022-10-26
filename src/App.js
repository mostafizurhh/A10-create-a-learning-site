import { useContext } from 'react';
import { FaToggleOff } from 'react-icons/fa';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './contexts/ThemeProvider/ThemeProvider';
import { routes } from './Routes/Routes/Routes';



function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className='container' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div onClick={toggleTheme} className='d-flex align-items-center'>
        <FaToggleOff className='me-2'></FaToggleOff>
        <small>{isDark ? 'Dark' : 'Light'} Mode</small>
      </div>
      <RouterProvider router={routes}>
      </RouterProvider>
    </div>
  );
}

// shiuli2015.it@gmail.com pMS3sEp&h0D7
export default App;
