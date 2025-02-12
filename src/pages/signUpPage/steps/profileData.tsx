
import { List, Section, Input, Textarea } from "@telegram-apps/telegram-ui"
import { useTranslation } from "react-i18next";


const ProfileDataStep = () => {
    const { t } = useTranslation();

    return <List
        style={{
        background: 'var(--tgui--secondary_bg_color)',
        }}
    >
        <Section
        footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
        header="Personal Information"
        >
            <Input
                header={t("name")}
                placeholder="21 y.o. designer from San Francisco"
            />

            <Textarea header={t("Bio")} placeholder="I am usual textarea" />

            <Input
                header={t("Education")}
                placeholder="21 y.o. designer from San Francisco"
            />

            <Input
                header={t("work")}
                placeholder="21 y.o. designer from San Francisco"
            />

        </Section>
  </List>

}

export default ProfileDataStep