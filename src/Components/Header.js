import Harley from '../Images/Harley.png'
import Music from "../Sounds/dark-serous-duduk-115094.mp3"

const Header = () => {
    let musicActive = false
    const music = new Audio(Music)
    music.loop = true

    const elevatorMusic = () => {
        musicActive = !musicActive
        if (musicActive === true) {
          music.pause();
        } else {
          music.play();
        }
      }

    return(
        <header className="header">
            <img src={Harley} className="header--image"/>
            <h1 className="header--title">UGLY THINGS</h1>
            <button className='header--button' onClick={elevatorMusic}>MUSIC ON/OFF</button>
            <h1 className="header--project">By What The...?</h1>
        </header>
    )
}

export default Header;