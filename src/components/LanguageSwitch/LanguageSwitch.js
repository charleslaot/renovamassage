import React from 'react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FormGroup from '@mui/material/FormGroup';
import MaterialUISwitch from './MaterialUISwitch';
import { useSelector, useDispatch } from 'react-redux'
import { selectLang, changeLang } from './languageSlice'
import FormControlLabel from '@mui/material/FormControlLabel';

function LanguageSwitch() {
    const dispatch = useDispatch()
    const { i18n } = useTranslation()
    const language = useSelector(selectLang)
    
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [i18n, language]);    

    return (
        <FormGroup>
                <FormControlLabel   
                    value={language}             
                    onChange={() => dispatch(changeLang())}
                    control={<MaterialUISwitch sx={{ m: 1 }} />}            
                /> 
        </FormGroup>
    )
}

export default LanguageSwitch