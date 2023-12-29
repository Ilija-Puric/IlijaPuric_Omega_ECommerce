import Grid from '../../components/Grid/Grid';
import Search from '../../components/Search/Search';

const Dashboard = (): JSX.Element => {
  return (
    <div className="dashboard">
      <Search />
      <Grid />
    </div>
  );
};

export default Dashboard;
