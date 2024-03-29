import IconRow from "./index"
import black from "../../assets/img/icon/colors/black.svg"
import gray from "../../assets/img/icon/colors/gray.svg"
import lime from "../../assets/img/icon/colors/lime.svg"
import navy_blue from "../../assets/img/icon/colors/navy_blue.svg"
import orange from "../../assets/img/icon/colors/orange.svg"
import pink from "../../assets/img/icon/colors/pink.svg"
import red from "../../assets/img/icon/colors/red.svg"
import white from "../../assets/img/icon/colors/white.svg"
import yellow from "../../assets/img/icon/colors/yellow.svg"

const ColorsRow = () => {
    const icons = [
        black, gray, lime, navy_blue, orange, pink, red, white, yellow
    ]
    return <IconRow  icons={icons}/>
}
  
  export default ColorsRow;