
import { List, Section, Input, Textarea, Chip, Radio } from "@telegram-apps/telegram-ui"
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
            style={{marginBottom:0}}

        >

            <Input
                header={t("name")}
                placeholder={t("name_placeholder")}
            />

            <Textarea header={t("Bio")} placeholder={t("bio_placeholder")} />

        </Section>

        <div
                className="grid gap-2 grid-cols-2 py-2"

            >
                <Chip mode="elevated" Component="label" before={<Radio name="Male" defaultChecked />}>
                    {t("Male")}
                </Chip>

                <Chip mode="elevated" Component="label" before={<Radio name="Female" />}>
                    {t("Female")}
                </Chip>
            </div>


  </List>

}

export default ProfileDataStep