import React from 'react'
import { useState } from 'react';
import logo from '../../assets/logo5.png'
import styles from './MobileHeader.module.css'
import MaterialUISwitch from './MaterialUISwitch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function MobileHeader() {

  const [language, setLanguage] = useState("EN");

  const langChange = () => {
    let newLanguage = language === "EN" ? "ES" : "EN";
    setLanguage(newLanguage);    
  }

  return (
    <div className={styles.mobileHeader}>
        <img src={logo} alt="Logo" className={styles.logo}/>  
        <FormGroup>
          <FormControlLabel
            value={language}
            onChange={langChange}
            control={<MaterialUISwitch sx={{ m: 1 }} />}            
          /> 
        </FormGroup>
    </div>
  )
}

export default MobileHeader