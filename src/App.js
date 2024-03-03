import NavBar from './components/navbar';
import Header from './components/header';
import InfoSection from './components/section-info';
import GoalsSection from './components/section-goals';
import TechsSection from './components/section-techs';
import DashboardSection from './components/section-dashboard';
import TeamSection from './components/section-team';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <InfoSection />
      <GoalsSection />
      <TechsSection />
      <DashboardSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;
