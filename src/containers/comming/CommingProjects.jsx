// MATERIAL STUFF
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// IMPORTING IMAGES
import pro from '../../assets/images/comming/pro.jpg'

// MATERIAL ICONS
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// STYLES FILES
import classes from './CommingProjects.module.scss'

const CommingProjects = () => {
  return (
    <div className={classes.comming}>
      <h1><span className='word'>PROJECTS</span> COMMING SOON</h1>
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent='center'>
          <Grid item md={8} lg={6} className={classes.projectWrapper}>
            <div className={classes.project}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src={pro} alt="" />
                    </div>
                    <div className={classes.icons}>
                      <LanguageIcon />
                      <TwitterIcon />
                      <TelegramIcon />
                    </div>
                    <div className={classes.bobs}>
                      <p className={classes.cond}><FiberManualRecordIcon />Opens in TBA</p>
                      <p className={classes.busd}>BUSD</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.right}>
                    <h2>Qmall.exchange</h2>
                    <p>First Metaverse Exchange - Transparent. Reliable. Own!</p>
                    <div className={classes.options}>
                      <div className={classes.option}>
                        <h5>Swap rate</h5>
                        <p>TBA</p>
                      </div>
                      <div className={classes.option}>
                        <h5>CAP</h5>
                        <p>TBA</p>
                      </div>
                      <div className={classes.option}>
                        <h5>Access</h5>
                        <p>Private</p>
                      </div>
                    </div>
                    <div className={classes.progress}>
                      <p>progress</p>
                      <div className={classes.prog}></div>
                      <div className={classes.percentage}>
                        <p>0.00%</p>
                        <p>0.00000/0</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CommingProjects;