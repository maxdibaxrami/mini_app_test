
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
            header={t("name")}
            footer={t("min_max_2_18")}

        >

            <Input
                header={t("name")}
                placeholder={t("name_placeholder")}
            />

        </Section>

        <Section
            header={t("Bio")}
            footer={t("min_max_2_100")}

        >
            <Textarea header={t("Bio")} placeholder={t("bio_placeholder")} />
        </Section>

        <Section
            header={t('Workandeducation')}
            footer={t("Selectedplancanbechangedatanytime")}
        >
            <Input
                header={t("Education")}
                placeholder={t("education_placeholder")}
            />

            <Input
                header={t("work")}
                placeholder={t("work_placeholder")}
            />
        </Section>

  </List>

}

export default ProfileDataStep