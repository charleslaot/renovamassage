import React from 'react'
import logo from '../../../../public/logo5.png'
import styles from './MobileHeader.module.css'
import MaterialUISwitch from './MaterialUISwitch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function MobileHeader() {
  return (
    <div className={styles.mobileHeader}>
        <img src={logo.src} alt="Logo" className={styles.logo}/>  
        <FormGroup>
          <FormControlLabel
            control={<MaterialUISwitch sx={{ m: 1 }} />}            
          /> 
        </FormGroup>
    </div>
  )
}

export default MobileHeader