import { FC } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { Home } from 'pages';

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default App;
