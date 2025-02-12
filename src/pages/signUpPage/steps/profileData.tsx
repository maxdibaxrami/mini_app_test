
import { List, Cell, Section, Selectable } from "@telegram-apps/telegram-ui"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageStepSVG } from "../svg/languageStepSVG";
import { ProfileDataSVg } from "../svg/profileDataSVG";


const ProfileDataStep = () => {
    const { t } = useTranslation();
    const [selectedValue , setSelectedValue ] = useState<string>('en')

    const onChange = (e:any) => {
        setSelectedValue(e.target.value)
    }
    return <List
        style={{
        background: 'var(--tgui--secondary_bg_color)',
        padding:"14px"
    }}
    >
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%"}}>
            <ProfileDataSVg/>
        </div>

        <Section
            footer={t('Selectedplancanbechangedatanytime')}
            header={t('Selectlanguageforcontinue')}
        >
             <form>
                <Cell Component="label" before={<Selectable checked={selectedValue === "en"} onClick={onChange} name="group" value="en" />} multiline>
                    {t('en')}
                </Cell>
                <Cell Component="label" before={<Selectable checked={selectedValue === "ru"} onClick={onChange} name="group" value="ru" />} multiline>
                    {t('ru')}
                </Cell>
                <Cell Component="label" before={<Selectable checked={selectedValue === "fa"} onClick={onChange} name="group" value="fa" />} multiline>
                    {t('fa')}
                </Cell>
                <Cell Component="label" before={<Selectable checked={selectedValue === "ar"} onClick={onChange} name="group" value="ar" />} multiline>
                    {t('ar')}
                </Cell>
            </form>
        </Section>
    </List>

}

export default ProfileDataStep