
import DashboardCard from './components/DashboardCard';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="content-area">
        <header className="header">
          <h1>Hiruneth Medical Centre</h1>
          <p>Medical Centre Management System</p>
        </header>


<main className="main-content">
  <div className="dashboard-overview">
    <h2>Dashboard Overview</h2>
    <p>Welcome to Hiruneth Medical Centre.</p>

    <div className="dashboard-grid">
      <DashboardCard
        title="Today's Patients"
        value="—"
        description="Data not connected yet"
      />

      <DashboardCard
        title="Today's Income"
        value="—"
        description="Data not connected yet"
      />

      <DashboardCard
        title="Pending Bills"
        value="—"
        description="Data not connected yet"
      />

      <DashboardCard
        title="Low Stock Medicines"
        value="—"
        description="Data not connected yet"
      />
    </div>
  </div>
</main>


        <footer className="footer">
          Internal Medical Centre Management System
        </footer>
      </div>
    </div>
  );
}

export default App;
