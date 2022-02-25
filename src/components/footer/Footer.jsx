// STYLES FILES
import { Container } from '@mui/material';
import classes from './footer.module.scss'

// IMPORTING IMAGES
import logo from '../../assets/images/navbar/logo.png' 

// MATERIAL ICONS
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <Container>
        <div className={classes.inside}>
          <div className={classes.top}>
            <h4><img src={logo} alt="" className={classes.logo} /></h4>
            <ul>
              <li>PRIVACY POLICY</li>
              <li>COOKIES POLICY</li>
              <li>TERMS & CONDITIONS</li>
            </ul>
          </div>
          <div className={classes.bottom}>
            <h4>© 2022 VLPRO by: ahmad eid</h4>
            <div className={classes.icons}>
              <TwitterIcon />
              <TelegramIcon />
              <EmailIcon />
              <LanguageIcon />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer;