
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Hiruneth Medical Centre</h1>
        <p>Medical Centre Management System</p>
      </header>

      <main className="main-content">
        <section className="welcome-card">
          <div className="medical-icon">+</div>

          <h2>Welcome to Hiruneth Medical Centre</h2>

          <p>
            Manage patients, pharmacy inventory,
            billing, and daily finances.
          </p>

          <div className="portal-label">
            Staff Management Portal
          </div>
        </section>
      </main>

      <footer className="footer">
        Internal Medical Centre Management System
      </footer>
    </div>
  );
}

export default App;
