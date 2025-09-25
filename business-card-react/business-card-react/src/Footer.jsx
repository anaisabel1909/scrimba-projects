import face from "./assets/facebook-icon.svg"
import twitter from "./assets/twitter-icon.svg"
import github from "./assets/github-icon.svg"
import insta from "./assets/insta-icon.svg"

export default function Footer() {
    return (
        <div className="footer">
            <img src={twitter} alt="twitter logo" />
            <img src={face} alt="facebook logo" />
            <img src={insta} alt="instagram logo" />
            <img src={github} alt="github logo  " /> 
        </div>
    )
}