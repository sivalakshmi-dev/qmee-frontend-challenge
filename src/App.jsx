import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SharePage from './SharePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/share" />} />
        <Route path="/share" element={<SharePage />} />
      </Routes>
    </Router>
  );
}
export default App;