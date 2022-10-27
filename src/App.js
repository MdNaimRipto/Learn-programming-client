import './App.css';
import { router } from './Routes/Routes';
import { RouterProvider } from "react-router-dom"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
