// REACT STUFF
import { useState } from 'react'

// MATERIAL STUFF
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// STYLES FILES
import classes from './stake.module.scss'

const Stake = () => {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Container className={classes.stakerapper} maxWidth='xl'>

        {/* STAKES SECTION */}
        <Grid container spacing={3} justifyContent='center'>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <div className={classes.single}>
              <p>Number of Stakers</p>
              <h3>5677</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <div className={classes.single}>
              <p>Total VLXPAD Staked</p>
              <h3>136021512.5910</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <div className={classes.single}>
              <p>APY</p>
              <h3>22.96%</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <div className={classes.single}>
              <p>Staked</p>
              <h3>0.0000</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <div className={classes.single}>
              <p>Rewards (VLX)</p>
              <h3>0.000000</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <div className={classes.single}>
              <p>Number of Stakers</p>
              <h3>5677</h3>
            </div>
          </Grid>
        </Grid>

        {/* TABS SECTION */}
        <div className={classes.tabs}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList classes={{indicator: classes.indicator}} onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Stake" value="1" />
                  <Tab label="Unstake" value="2" />
                </TabList>
              </Box>

              {/* FIRST TAB SECTION */}
              <TabPanel value="1">

                <div className={classes.insideStake}>
                  <h1>STAKE <span className='meduimWord meduimWord2'>VLPRO</span></h1>

                  {/* STEPPER SECTION */}
                  <div className={classes.wide}>
                    <Grid container justifyContent='center'>
                      <Grid item xs={6} sm={3}>
                        <div className={classes.singleWide}>
                          <div className={classes.step}>
                            <h4>Checkpoints</h4>
                            <div className={classes.circle}></div>
                          </div>
                          <div className={classes.line}></div>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <div className={classes.singleWide}>
                          <div className={classes.step}>
                            <h4>Amount Stake</h4>
                            <div className={classes.circle}></div>
                          </div>
                          <div className={`${classes.line} ${classes.lineMid}`}></div>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <div className={classes.singleWide}>
                          <div className={classes.step}>
                            <h4>Pre-authorization</h4>
                            <div className={classes.circle}></div>
                          </div>
                          <div className={classes.line}></div>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <div className={classes.singleWide}>
                          <div className={classes.step}>
                            <h4>Confirmation</h4>
                            <div className={classes.circle}></div>
                          </div>
                          <div className={`${classes.line} ${classes.lineLast}`}></div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  {/* POINTS SECTION */}
                  <div className={classes.points}>
                    <Grid container>
                      <Grid item md={4}>
                        <h1 className='meduimWord'>CHECKPOINTS</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing</p>
                      </Grid>
                      <Grid item md={8}>
                        <Grid container>
                          <Grid item md={6}>
                            <h1 className='smallWord'>01</h1>
                            <h2>Connected with MetaMask</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing</p>
                          </Grid>
                          <Grid item md={6}>
                            <h1 className='smallWord'>02</h1>
                            <h2>Connected with MetaMask</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing</p>
                          </Grid>
                          <Grid item md={6}>
                            <h1 className='smallWord'>03</h1>
                            <h2>Connected with MetaMask</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing</p>
                          </Grid>
                          <Grid item md={6}>
                            <h1 className='smallWord'>04</h1>
                            <h2>Connected with MetaMask</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing</p>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>

                </div>

              </TabPanel>

              {/* SECOND TAB SECTION */}
              <TabPanel value="2">

                <div className={classes.insideStake}>
                  <h2 className={classes.label}>Unstake & Withdraw your VLPRO</h2>

                  {/* STEPPER SECTION */}
                  <div className={classes.wide}>
                    <Grid container justifyContent='center'>
                      <Grid item xs={6} sm={3}>
                        <div className={classes.singleWide}>
                          <div className={classes.step}>
                            <h4>Checkpoints</h4>
                            <div className={classes.circle}></div>
                          </div>
                          <div className={classes.line}></div>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <div className={classes.singleWide}>
                          <div className={classes.step}>
                            <h4>Amount Stake</h4>
                            <div className={classes.circle}></div>
                          </div>
                          <div className={`${classes.line} ${classes.lineMid}`}></div>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <div className={classes.singleWide}>
                          <div className={classes.step}>
                            <h4>Pre-authorization</h4>
                            <div className={classes.circle}></div>
                          </div>
                          <div className={classes.line}></div>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                        <div className={classes.singleWide}>
                          <div className={classes.step}>
                            <h4>Confirmation</h4>
                            <div className={classes.circle}></div>
                          </div>
                          <div className={`${classes.line} ${classes.lineLast}`}></div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>

                  {/* POINTS SECTION */}
                  <div className={classes.points}>
                    <Grid container spacing={5}>
                      <Grid item sm={10} md={4}>
                        <h1 className='meduimWord meduimWord2'>WARNING</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit consectetur adipisicing</p>
                      </Grid>
                      <Grid item sm={10} md={6} xl={5}>
                        <ul>
                          <li>
                            <p>Staked less than 2 weeks</p>
                            <p>25.00%</p>
                          </li>
                          <li>
                            <p>Less than 4 weeks</p>
                            <p>15.00%</p>
                          </li>
                          <li>
                            <p>Less than 6 weeks</p>
                            <p>10.00%</p>
                          </li>
                          <li>
                            <p>Less than 8 weeks</p>
                            <p>5.00%</p>
                          </li>
                          <li>
                            <p>8 weeks or more</p>
                            <p>0.00%</p>
                          </li>
                        </ul>
                        <p className={classes.lastText}>You have staked for [0d 0h 0m]. Your current fee is: 0% Please click 'Next' if you wish to proceed.</p>
                      </Grid>
                    </Grid>
                  </div>

                </div>

              </TabPanel>

            </TabContext>
          </Box>
        </div>

      </Container>
    </div>
  )
}

export default Stake;