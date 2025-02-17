import { format, subDays } from "date-fns"
import Wheel from "./wheel"

export default () => {

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
        <Wheel
          loop
          length={years.length}
          width={140}
          setValue={formatYear}
        />
      </div>
      <div style={{ width: "30%", height: 180 }}>
        <Wheel loop length={12} width={23} />
      </div>
      <div style={{ width: "30%", height: 180 }}>
        <Wheel loop length={12} width={23} />
      </div>
    </div>
  )
}
