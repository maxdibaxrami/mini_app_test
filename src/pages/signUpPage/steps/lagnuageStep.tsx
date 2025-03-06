
import { Cell, List, Section, Selectable, Subheadline } from "@telegram-apps/telegram-ui"
import { useTranslation } from "react-i18next";
import "../styles/language.css"
import { SparklesText } from "@/components/sparkiText/sparkiText";
import { getLanguages } from "@/constant";
import { Language } from "@/types/language";


const LanguageStep = () => {

  const { t, i18n } = useTranslation();
    const lagnuage = getLanguages;

    const changeLanguage = (lng:Language) => {
      i18n.changeLanguage(lng.value);
    };

    const handleLanguageChange = (language: Language) => {
      changeLanguage(language);
      document.documentElement.lang = language.value;
      document.body.dir = ['ar', 'fa'].includes(language.value) ? 'rtl' : 'ltr'; // Set the dir attribute based on language value
      document.documentElement.dir = ['ar', 'fa'].includes(language.value) ? 'rtl' : 'ltr';
    };

    
    return <List
      className="main-content-safe"
    >
        <div className='safe-area-top top-bar-height flex items-center justify-center'>
          <SparklesText text="Mull Mull" className="text-5xl"/>
        </div>
        <Subheadline
          level="1"
          weight="3"
          style={{textAlign:"center"}}
        >
          {t("firstpage_description")}
        </Subheadline>
        
        <Section
          footer={t("privacy_policy")}
          header={t("Selectlanguageforcontinue")}
        >
          {lagnuage.map((language, index) => (
            <Cell
              key={index}
              Component="label"
              before={<Selectable defaultChecked={language.value === i18n.language} name="group" value={language.value} />}
              description={language.label}
              multiline
              onClick={() => handleLanguageChange(language)}
            >
              {language.description} {language.flaq}
            </Cell>
          ))}
        </Section>
     </List>

}

export default LanguageStep


