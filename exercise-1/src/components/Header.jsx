import pnLogo from "../assets/pn-logo.png";

function Header({batchName}) {
    return (
        <header id='header'> 
            <img src={pnLogo} alt="PN-Logo"></img>
            <h1>Students results for {batchName}</h1>
        </header>
    )
} export default Header;