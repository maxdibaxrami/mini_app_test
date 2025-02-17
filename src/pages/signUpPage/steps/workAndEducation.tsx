
import { List, Section, Input, Cell, Selectable } from "@telegram-apps/telegram-ui"
import { useTranslation } from "react-i18next";
import { WorkAndEducationStepSVG } from "../svg/workAndEducation";
import { useState } from "react";
import { getEducationStatus } from "@/constant";


const WorkAndEducationStep = () => {
    const { t } = useTranslation();
    const education = getEducationStatus(t)
    const [selectedValue , setSelectedValue ] = useState<string>('en')

    const onChange = (e:any) => {
        setSelectedValue(e.target.value)
    }
    return <List
            style={{
            background: 'var(--tgui--secondary_bg_color)',
        }}
    >
        <div style={{display:"flex", alignItems:"center",justifyContent:"center",width:"100%"}}>
           <WorkAndEducationStepSVG/>
        </div>

        <Section
            header={t("work")}
            style={{marginBottom:0}}

        >
            <Input
                placeholder={t("work_placeholder")}
            />

        </Section>

          <Section
                    footer={t('Selectedplancanbechangedatanytime')}
                    header={t('Selectlanguageforcontinue')}
                >
                     <form>
                        {education.map((value,index)=>{
                            return <Cell key={index} Component="label" description="English" before={<Selectable defaultChecked checked={selectedValue === value.key} onClick={onChange} name="group" value={value.label} />} multiline>
                                        {t(value.label)}
                                    </Cell>
                        })}
                        

                    </form>
                </Section>

  </List>

}

export default WorkAndEducationStep