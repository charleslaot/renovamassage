import React from 'react'
import { useState } from 'react';
import MaterialUISwitch from './MaterialUISwitch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function LanguageSwitch() {
    const [language, setLanguage] = useState("EN");

    const langChange = () => {
        let newLanguage = language === "EN" ? "ES" : "EN";
        setLanguage(newLanguage);    
    }

    return (
        <FormGroup>
                <FormControlLabel
                value={language}
                onChange={langChange}
                control={<MaterialUISwitch sx={{ m: 1 }} />}            
                /> 
        </FormGroup>
    )
}

export default LanguageSwitch