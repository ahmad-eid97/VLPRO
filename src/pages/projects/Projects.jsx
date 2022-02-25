// IMPORTING CONTAINERS
import Header from '../../containers/header/Header';
import CommingProjects from './../../containers/comming/CommingProjects';
import Closed from '../../containers/closed/Closed';

// STYLES FILES
import classes from './projects.module.scss'
import Footer from '../../components/footer/Footer';

const Projects = () => {
  return (
    <div className={classes.projects}>
      <Header />
      <CommingProjects />
      <Closed />
      <Footer />
    </div>
  )
}

export default Projects;