import AppRoutes from './../approutes/index';
// import Dashboard from './../dashboard/Dashboard';
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const Dashboard = ({ setToken }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard")
  }, [])

    return (
      <div className="PageContent">
        <AppRoutes />
      </div>
    );
  }
  export default Dashboard;
  