import { format, subDays } from "date-fns"
import Wheel from "./wheel"

export default () => {
  function formateDate(_relative:any, absolute:any) {
    return format(subDays(new Date(), absolute), "iii d LLL")
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
      <div style={{ width: 180, height: 180 }}>
        <Wheel
          loop
          length={100}
          width={140}
          perspective="right"
          setValue={formateDate}
        />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel loop length={12} width={23} />
      </div>
      <div style={{ width: 70, height: 180 }}>
        <Wheel loop length={12} width={23} perspective="left" />
      </div>
    </div>
  )
}
