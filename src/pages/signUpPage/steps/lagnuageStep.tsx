
import { List, Section, Title } from "@telegram-apps/telegram-ui"
import { useState } from "react";
import { LanguageWheel, languages, Language } from "@/components/langaugeWheel";
import { useTranslation } from "react-i18next";
import { LanguageIcon } from "@/components/icon";
import { SignUpIconWrapper } from "@/components/signupIconWrapper";


const LanguageStep = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const { t } = useTranslation();

    const handleLanguageChange = (index: number, language: Language) => {
      setSelectedLanguage(language);
      console.log(index)
      console.log(selectedLanguage)

    };
    
    return <List
    >
       <div className="mt-6 flex items-center jusitfy-center flex-col">
       
       
        <SignUpIconWrapper className="bg-black text-white p-2">
            <LanguageIcon/>
        </SignUpIconWrapper>
        <Title
            level="1"
            weight="2"
        >
            {t('Selectlanguageforcontinue')}
        </Title>

       </div>

        <Section>
            
            <div
                style={{
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                >
                <div style={{ width: "100%", height: 180 }}>
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