import Navbar from "../components/Navbar"
import GInfoNav from "../components/GInfoNav"

const layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <GInfoNav/>
      {children}
    </div>
  )
}

export default layout
