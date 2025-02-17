import { useTranslation } from "react-i18next";
import Wheel from "./wheel"

export default () => {
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear() - 18
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i)
  
    function formatYear(_relative: any, absolute: any) {
      return years[absolute]
    }

  return (
    <div
      style={{
        height: "240px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "40%", height: 180 }}>
        <p className="text-center text-black-500">{t("year")}</p>
        <Wheel
          length={years.length}
          width={140}
          setValue={formatYear}
        />
      </div>
      <div style={{ width: "30%", height: 180 }}>
        <p className="text-center text-black-500">{t("month")}</p>
        <Wheel length={12} width={23} />
      </div>
      <div style={{ width: "30%", height: 180 }}>
        <p className="text-center text-black-500">{t("day")}</p>
        <Wheel length={12} width={23} />
      </div>
    </div>
  )
}
