import bebel from "./assets/bebel.png"
import email from "./assets/email.svg"
import linkedin from "./assets/linkedIn.svg"

export default function Info() {
    return (
        <section className="info">
            <img src={bebel} alt="bebel" />
            <div className="card-info">
                <h1>Ana Isabel Matias</h1>
                <span>Frontend Developer</span>
                <a href="#" target="_blank"><span>anaisabel.website</span></a>
            </div>
               
            <div className="btn-container">
                 <button className="btn email-btn">
                    <img src={email} alt="Email Icon" /> Email
                </button>
                <button className="btn linkedin-btn">
                    <img src={linkedin} alt="LinkedIn Icon" /> LinkedIn
                </button>
            </div>
        </section>
    )
}