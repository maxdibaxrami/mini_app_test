
import { List, Section, Input, Textarea, Chip, Radio } from "@telegram-apps/telegram-ui"
import { useTranslation } from "react-i18next";
import { ProfileDataSVg } from "../svg/profileDataSVG";


const ProfileDataStep = () => {
    const { t } = useTranslation();

    return <List
       
    >
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%"}}>
           <ProfileDataSVg/>
        </div>


        <Section
                header={t("Iam")}
                style={{
                    background: 'var(--tgui--secondary_bg_color)',
                }}
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
                background: 'var(--tgui--secondary_bg_color)',
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