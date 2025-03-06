
import DatePicker from "@/components/DateTimePicker/DateTimePicker";
import { List, Section } from "@telegram-apps/telegram-ui"
import { useTranslation } from "react-i18next";


const DateOfBirthStep = () => {
    const { t } = useTranslation();

    return <List>
        <Section
        
        header={t("Selectdateofbirth")}>
            <DatePicker/>
        </Section>
  </List>

}

export default DateOfBirthStep