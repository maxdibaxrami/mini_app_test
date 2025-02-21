
import { List, Section, Subheadline } from "@telegram-apps/telegram-ui"
import { useState } from "react";
import { LanguageWheel, languages, Language } from "@/components/langaugeWheel";
import { useTranslation } from "react-i18next";
import { LanguageIcon } from "@/components/icon";
import { SparklesText } from "@/components/sparkiText/sparkiText";


const LanguageStep = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
    const { t } = useTranslation();

    const handleLanguageChange = (index: number, language: Language) => {
      setSelectedLanguage(language);
      console.log(index)
      console.log(selectedLanguage)

    };
    
    return <List
    className="main-content-safe"
    >
        <div className="flex items-center justify-center">
            <SparklesText text="Mull Mull" sparklesCount={10} className="text-5xl"/>
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
                <Subheadline
                    level="1"
                    weight="2"
                    style={{display:"flex",alignItems:"center",justifyContent:"center",gap:4}}
                >
                    <LanguageIcon className="size-5"/>
                    {t("Selectlanguageforcontinue")}
                </Subheadline>
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