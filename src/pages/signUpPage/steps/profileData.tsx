
import { List, Section, Input, Textarea, Chip, Radio, Headline, Subheadline } from "@telegram-apps/telegram-ui"
import { useTranslation } from "react-i18next";


const ProfileDataStep = () => {
    const { t } = useTranslation();

    return <List
    >
          <Headline
                weight="1"
            >
                {t("Fillprofiledata")}
            </Headline>

            <Subheadline
                level="1"
                weight="3"
            >
                {t("secondaryText")}
            </Subheadline>
        <Section
                header={t("Iam")}
            >
                <div className="grid gap-1 grid-cols-2 py-2 px-2">
                    <Chip mode="mono" Component="label" before={<Radio name="Male" defaultChecked />}>
                        {t("Male")}
                    </Chip>

                    <Chip mode="mono" Component="label" before={<Radio name="Female" />}>
                        {t("Female")}
                    </Chip>
                </div>

        </Section>

        <Section
            header={t("Fillprofiledata")}
            style={{
                marginBottom:0
            }}

        >
            <Input
                placeholder={t("name_placeholder")}
            />

            <Textarea placeholder={t("bio_placeholder")} />

        </Section>

  </List>

}

export default ProfileDataStep