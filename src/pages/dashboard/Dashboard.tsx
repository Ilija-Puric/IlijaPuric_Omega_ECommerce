import DashboardGrid from '../../components/DashboardGrid/DashboardGrid';
import Search from '../../components/Search/Search';

const Dashboard = (): JSX.Element => {
  return (
    <div className="dashboard">
      <Search />
      <DashboardGrid />
    </div>
  );
};

export default Dashboard;
