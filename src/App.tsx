import { BrowserRouter } from 'react-router-dom';
import AnimateRoutes from './routes/AnimateRoutes';
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AnimateRoutes />
    </BrowserRouter >
  )
}

export default App;