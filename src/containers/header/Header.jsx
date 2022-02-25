// IMPORTING COMPONENTS
import Navbar from '../../components/navbar/Navbar';

// MATERIAL STUFF
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//  STYLES FILES
import classes from './header.module.scss'

const Header = () => {

  return (
    <div className={classes.header}>
      {/* NAV BAR COMPONENT */}
      <Navbar />

      <Container maxWidth="xl">
        <Grid container className={classes.headerWrapper}>

          {/* LEFT SIDE OF HEADER */}
          <Grid item sm={10} md={6}>
            <div className={classes.textSide}>
              <h1>VLPro</h1>
              <h4>Lorem ipsum dolor sit, amet consectetur</h4>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className={classes.headText}>
        <h1><span>AVAILABLE</span> RIGHT NOW</h1>
      </div>

    </div>
  )

}

export default Header;