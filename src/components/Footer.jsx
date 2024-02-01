import "./FooterStyle.css"

const Footer = () =>{
    return(
    <div className="footer">
        <div className="top">
            <div>
                <h1>ZaouiLux</h1>
                <p>Choose your favourite luxary car</p>
            </div>
            <div>
                <a href="/">
                <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-square-instagram"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="/">
                <i class="fa-brands fa-square-x-twitter"></i>
                </a>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>Project</h4>
                <a href="/">Changelong</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">GitHub</a>
                <a href="/">Issues</a>
                <a href="/">Project</a>
                <a href="/">Telegram</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">Support</a>
                <a href="/">Troubleshooting</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">Term of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
        </div>
    </div>
    )
}
export default Footer