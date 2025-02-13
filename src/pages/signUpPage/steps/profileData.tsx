
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

        </Section>

        <Section
            header={`${t("Iam")}`}
            style={{
                marginBottom:0,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: 8,
                    padding:"20px 22px 16px"
                  }}

            >
                <Chip className="w-50" mode="elevated" Component="label" before={<Radio name="Male" defaultChecked />}>
                    {t("Male")}
                </Chip>

                <Chip className="w-50" mode="elevated" Component="label" before={<Radio name="Female" />}>
                    {t("Female")}
                </Chip>
            </div>
        </Section>

        <Section
            header={t("Bio")}
            style={{marginBottom:0}}
        >
            <Textarea header={t("Bio")} placeholder={t("bio_placeholder")} />
        </Section>


  </List>

}

export default ProfileDataStep