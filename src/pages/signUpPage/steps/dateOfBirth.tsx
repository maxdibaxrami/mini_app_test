
import DatePicker from "@/components/DateTimePicker";
import { List, Section } from "@telegram-apps/telegram-ui"
import { useTranslation } from "react-i18next";


const DateOfBirthStep = () => {
    const { t } = useTranslation();

    return <List
        style={{
        background: 'var(--tgui--secondary_bg_color)',
        }}
    >
        <Section header={t("Selectdateofbirth")}>
            <DatePicker/>
        </Section>
  </List>

}

export default DateOfBirthStep