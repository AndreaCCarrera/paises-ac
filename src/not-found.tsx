import { Navigate } from 'react-router-dom';

const NotFound = () => {
  const handleClick = () => {
    // Redirige al inicio
    return <Navigate to="/" replace />;
  };

  return (
    <div className="not-found">
      <h1>Sorry, page not found</h1>
      <img src="../not-found.png" alt="Not Found" />
      <div style={{ textAlign: 'center' }}> {/* Centra el botón */}
        <button className="back-btn" onClick={handleClick}>
          Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;