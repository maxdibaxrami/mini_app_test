
import DatePicker from "@/components/DateTimePicker";
import { List, Section } from "@telegram-apps/telegram-ui"
import { useTranslation } from "react-i18next";
import { DateOfBirth } from "../svg/dateOfBirthStepSVG";


const DateOfBirthStep = () => {
    const { t } = useTranslation();

    return <List>
          <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%"}}>
                   <DateOfBirth/>
           </div>
        
        <Section
        
        header={t("Selectdateofbirth")}>
            <DatePicker/>
        </Section>
  </List>

}

export default DateOfBirthStep