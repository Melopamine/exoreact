import { RouterProvider } from 'react-router-dom';
import router from './routing/routes';

const App = () => {
  const categories = [
    { id: 1, name: 'Sport', imgText: 'johno', desc: 'wesh bien' },
    { id: 2, name: 'Musique', imgText: 'parker', desc: 'je sais pas' },
    { id: 3, name: 'Voyage', imgText: 'polo', desc: 'trop celebre' },
  ];
  return <RouterProvider router={router(categories)} />;
};

export default App;
