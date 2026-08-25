import { RouterProvider } from "react-router"
import router from "./routes/Router"
import { Toaster } from 'sonner';

function App() {

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  )
}

export default App
