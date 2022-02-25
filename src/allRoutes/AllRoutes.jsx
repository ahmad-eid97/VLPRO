// IMPORT REACT ROUTER STUFF
import { Routes, Route } from 'react-router-dom';

// IMPORTING PAGES
import Projects from '../pages/projects/Projects';
import Staking from '../pages/staking/Staking';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Projects />} />
      <Route path='/staking' element={<Staking />} />
    </Routes>
  )
}

export default AllRoutes;