import Harley from '../Images/Harley.png'

const Header = () => {
    return(
        <header className="header">
            <img src={Harley} className="header--image"/>
            <h1 className="header--title">UGLY THINGS</h1>
            <h1 className="header--project">By What The...?</h1>
        </header>
    )
}

export default Header;