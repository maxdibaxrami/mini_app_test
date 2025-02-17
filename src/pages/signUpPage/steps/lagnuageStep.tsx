
import { List, Cell, Section, Selectable } from "@telegram-apps/telegram-ui"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageStepSVG } from "../svg/languageStepSVG";
import { LanguageWheel, languages, Language } from "@/components/langaugeWheel";


const LanguageStep = () => {
    const { t } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

    const handleLanguageChange = (index: number, language: Language) => {
      setSelectedLanguage(language);
    };
    
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
                <div
                style={{
                    height: "240px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <div style={{ width: "40%", height: 180 }}>
                        <LanguageWheel
                            perspective="center"
                            length={languages.length}
                            width={200}
                            setValue={handleLanguageChange}
                        />
                    </div>
            </div>
        </Section>
    </List>

}

export default LanguageStep