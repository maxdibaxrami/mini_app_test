
import { List } from "@telegram-apps/telegram-ui"
import { useState } from "react";
import { LanguageStepSVG } from "../svg/languageStepSVG";
import { LanguageWheel, languages, Language } from "@/components/langaugeWheel";


const LanguageStep = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

    const handleLanguageChange = (index: number, language: Language) => {
      setSelectedLanguage(language);
      console.log(index)
      console.log(selectedLanguage)

    };
    
    return <List
        style={{
            height:"100%"
        }}
    >
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%"}}>
            <LanguageStepSVG/>
        </div>

            <div
                style={{
                    height: "240px",
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
    </List>

}

export default LanguageStep