// MATERIAL STUFF
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// IMPORTING IMAGES
import planet from '../../assets/images/closed/planet.webp'
import vega from '../../assets/images/closed/vega.jpg'
import cryptors from '../../assets/images/closed/cryptors.webp'
import pulse from '../../assets/images/closed/pulse.webp'
import deliever from '../../assets/images/closed/deliever.jpg'
import chat from '../../assets/images/closed/chat.jpg'
import game from '../../assets/images/closed/game.jpg'

// MATERIAL ICONS
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// STYLES FILES
import classes from './closed.module.scss'

const Closed = () => {
  return (
    <div className={classes.closed}>
      <h1><span className='word'>PROJECTS</span> CLOSED</h1>
      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent='center'>

          <Grid item md={8} lg={6} className={classes.above}>
            <div className={classes.project}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src={planet} alt="" />
                    </div>
                    <div className={classes.icons}>
                      <LanguageIcon />
                      <TwitterIcon />
                      <TelegramIcon />
                    </div>
                    <div className={classes.bobs}>
                      <p className={classes.cond}><FiberManualRecordIcon />Closed</p>
                      <p className={classes.busd}>BUSD</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.right}>
                    <h2>Planet.w</h2>
                    <p>Platform for space exploration and travelling</p>
                    <div className={classes.options}>
                      <div className={classes.option}>
                        <h5>Swap rate</h5>
                        <p>1 BUSD = 200 WWY</p>
                      </div>
                      <div className={classes.option}>
                        <h5>CAP</h5>
                        <p>200000 BUSD</p>
                      </div>
                      <div className={classes.option}>
                        <h5>Access</h5>
                        <p>Private</p>
                      </div>
                    </div>
                    <div className={classes.progress}>
                      <div className={classes.above}>
                        <p>progress</p>
                        <p>participants <span>2275</span></p>
                      </div>
                      <div className={classes.prog}></div>
                      <div className={classes.percentage}>
                        <p>100.01%</p>
                        <p>200028.4837/200000</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item md={8} lg={6}>
            <div className={classes.project}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src={vega} alt="" />
                    </div>
                    <div className={classes.icons}>
                      <LanguageIcon />
                      <TwitterIcon />
                      <TelegramIcon />
                    </div>
                    <div className={classes.bobs}>
                      <p className={classes.cond}><FiberManualRecordIcon />Closed</p>
                      <p className={classes.busd}>BUSD</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.right}>
                    <h2>Vega Store</h2>
                    <p>Store for super computers hardware and smart devices</p>
                    <div className={classes.options}>
                      <div className={classes.option}>
                        <h5>Swap rate</h5>
                        <p>1 BUSD = 200 WWY</p>
                      </div>
                      <div className={classes.option}>
                        <h5>CAP</h5>
                        <p>200000 BUSD</p>
                      </div>
                      <div className={classes.option}>
                        <h5>Access</h5>
                        <p>Private</p>
                      </div>
                    </div>
                    <div className={classes.progress}>
                      <div className={classes.above}>
                        <p>progress</p>
                        <p>participants <span>2275</span></p>
                      </div>
                      <div className={classes.prog}></div>
                      <div className={classes.percentage}>
                        <p>100.01%</p>
                        <p>200028.4837/200000</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item md={8} lg={6}>
            <div className={classes.project}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src={cryptors} alt="" />
                    </div>
                    <div className={classes.icons}>
                      <LanguageIcon />
                      <TwitterIcon />
                      <TelegramIcon />
                    </div>
                    <div className={classes.bobs}>
                      <p className={classes.cond}><FiberManualRecordIcon />Closed</p>
                      <p className={classes.busd}>BUSD</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.right}>
                    <h2>Cryptors</h2>
                    <p>Platform for all miners to get information about digital currencies</p>
                    <div className={classes.options}>
                      <div className={classes.option}>
                        <h5>Swap rate</h5>
                        <p>1 BUSD = 200 WWY</p>
                      </div>
                      <div className={classes.option}>
                        <h5>CAP</h5>
                        <p>200000 BUSD</p>
                      </div>
                      <div className={classes.option}>
                        <h5>Access</h5>
                        <p>Private</p>
                      </div>
                    </div>
                    <div className={classes.progress}>
                      <div className={classes.above}>
                        <p>progress</p>
                        <p>participants <span>2275</span></p>
                      </div>
                      <div className={classes.prog}></div>
                      <div className={classes.percentage}>
                        <p>100.01%</p>
                        <p>200028.4837/200000</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item md={8} lg={6}>
            <div className={classes.project}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src={pulse} alt="" />
                    </div>
                    <div className={classes.icons}>
                      <LanguageIcon />
                      <TwitterIcon />
                      <TelegramIcon />
                    </div>
                    <div className={classes.bobs}>
                      <p className={classes.cond}><FiberManualRecordIcon />Closed</p>
                      <p className={classes.busd}>BUSD</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.right}>
                    <h2>Pulse Mid</h2>
                    <p>Small project for enhancing medical tools</p>
                    <div className={classes.options}>
                      <div className={classes.option}>
                        <h5>Swap rate</h5>
                        <p>1 BUSD = 200 WWY</p>
                      </div>
                      <div className={classes.option}>
                        <h5>CAP</h5>
                        <p>200000 BUSD</p>
                      </div>
                      <div className={classes.option}>
                        <h5>Access</h5>
                        <p>Private</p>
                      </div>
                    </div>
                    <div className={classes.progress}>
                      <div className={classes.above}>
                        <p>progress</p>
                        <p>participants <span>2275</span></p>
                      </div>
                      <div className={classes.prog}></div>
                      <div className={classes.percentage}>
                        <p>100.01%</p>
                        <p>200028.4837/200000</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item md={8} lg={6}>
            <div className={classes.project}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src={deliever} alt="" />
                    </div>
                    <div className={classes.icons}>
                      <LanguageIcon />
                      <TwitterIcon />
                      <TelegramIcon />
                    </div>
                    <div className={classes.bobs}>
                      <p className={classes.cond}><FiberManualRecordIcon />Closed</p>
                      <p className={classes.busd}>BUSD</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.right}>
                    <h2>Deliever Man</h2>
                    <p>Andriod project for online middleware commnucations</p>
                    <div className={classes.options}>
                      <div className={classes.option}>
                        <h5>Swap rate</h5>
                        <p>1 BUSD = 200 WWY</p>
                      </div>
                      <div className={classes.option}>
                        <h5>CAP</h5>
                        <p>200000 BUSD</p>
                      </div>
                      <div className={classes.option}>
                        <h5>Access</h5>
                        <p>Private</p>
                      </div>
                    </div>
                    <div className={classes.progress}>
                      <div className={classes.above}>
                        <p>progress</p>
                        <p>participants <span>2275</span></p>
                      </div>
                      <div className={classes.prog}></div>
                      <div className={classes.percentage}>
                        <p>100.01%</p>
                        <p>200028.4837/200000</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item md={8} lg={6}>
            <div className={classes.project}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src={chat} alt="" />
                    </div>
                    <div className={classes.icons}>
                      <LanguageIcon />
                      <TwitterIcon />
                      <TelegramIcon />
                    </div>
                    <div className={classes.bobs}>
                      <p className={classes.cond}><FiberManualRecordIcon />Closed</p>
                      <p className={classes.busd}>BUSD</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.right}>
                    <h2>In Touch</h2>
                    <p>A new way to commnucate with other people</p>
                    <div className={classes.options}>
                      <div className={classes.option}>
                        <h5>Swap rate</h5>
                        <p>1 BUSD = 200 WWY</p>
                      </div>
                      <div className={classes.option}>
                        <h5>CAP</h5>
                        <p>200000 BUSD</p>
                      </div>
                      <div className={classes.option}>
                        <h5>Access</h5>
                        <p>Private</p>
                      </div>
                    </div>
                    <div className={classes.progress}>
                      <div className={classes.above}>
                        <p>progress</p>
                        <p>participants <span>2275</span></p>
                      </div>
                      <div className={classes.prog}></div>
                      <div className={classes.percentage}>
                        <p>100.01%</p>
                        <p>200028.4837/200000</p>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item md={8} lg={6}>
            <div className={classes.project}>
              <Grid container>
                <Grid item xs={6} sm={4}>
                  <div className={classes.left}>
                    <div className={classes.img}>
                      <img src={game} alt="" />
                    </div>
                    <div className={classes.icons}>
                      <LanguageIcon />
                      <TwitterIcon />
                      <TelegramIcon />
                    </div>
                    <div className={classes.bobs}>
                      <p className={classes.cond}><FiberManualRecordIcon />Closed</p>
                      <p className={classes.busd}>BUSD</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <div className={classes.right}>
                    <h2>Gamzo</h2>
                    <p>A small arabic games platform</p>
                    <div className={classes.options}>
                      <div className={classes.option}>
                        <h5>Swap rate</h5>
                        <p>1 BUSD = 200 WWY</p>
                      </div>
                      <div className={classes.option}>
                        <h5>CAP</h5>
                        <p>200000 BUSD</p>
                      </div>
                      <div className={classes.option}>
                        <h5>Access</h5>
                        <p>Private</p>
                      </div>
                    </div>
                    <div className={classes.progress}>
                      <div className={classes.above}>
                        <p>progress</p>
                        <p>participants <span>2275</span></p>
                      </div>
                      <div className={classes.prog}></div>
                      <div className={classes.percentage}>
                        <p>100.01%</p>
                        <p>200028.4837/200000</p>
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

export default Closed;