
import { List, Cell, Section, Selectable } from "@telegram-apps/telegram-ui"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageStepSVG } from "../svg/languageStepSVG";


const LanguageStep = () => {
    const { t } = useTranslation();
    const [selectedValue , setSelectedValue ] = useState<string>('en')

    const onChange = (e:any) => {
        setSelectedValue(e.target.value)
    }
    return <List
       
    >
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%"}}>
            <LanguageStepSVG/>
        </div>

        <Section
            footer={t('Selectedplancanbechangedatanytime')}
            header={t('Selectlanguageforcontinue')}
            style={{
                background: 'var(--tgui--secondary_bg_color)',
            }}
        >
             <form>
                <Cell Component="label" description="English" before={<Selectable defaultChecked checked={selectedValue === "en"} onClick={onChange} name="group" value="en" />} multiline>
                    {t('en')}
                </Cell>
                <Cell Component="label" description="русский" before={<Selectable checked={selectedValue === "ru"} onClick={onChange} name="group" value="ru" />} multiline>
                    {t('ru')}
                </Cell>
                <Cell Component="label" description="فارسی" before={<Selectable checked={selectedValue === "fa"} onClick={onChange} name="group" value="fa" />} multiline>
                    {t('fa')}
                </Cell>
                <Cell Component="label" description="عربي" before={<Selectable checked={selectedValue === "ar"} onClick={onChange} name="group" value="ar" />} multiline>
                    {t('ar')}
                </Cell>
            </form>
        </Section>
    </List>

}

export default LanguageStep