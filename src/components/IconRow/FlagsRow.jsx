import IconRow from "./index"
import ca from "../../assets/img/icon/flags/ca.svg"
import eu from "../../assets/img/icon/flags/eu.svg"
import nz from "../../assets/img/icon/flags/nz.svg"
import uk from "../../assets/img/icon/flags/ca.svg"
import usa from "../../assets/img/icon/flags/ca.svg"


const FlagRow = () => {
    const icons = [
        ca, eu, nz, uk, usa
    ]
    return <IconRow  icons={icons}/>
}
  
  export default FlagRow;