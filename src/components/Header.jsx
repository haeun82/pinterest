import { Link } from 'react-router-dom';
import  logo  from '../img/pinterest_logo.png';
import { Nav } from "../styles/Header.styles";
import { MdAddBox } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";




function Header() {
  return (
    <Nav>
      <Link to="/"><img src={logo} alt='핀터레스트 로고'/></Link>
      <MdAddBox className='addicon'/>
      <GoBell className='updateicon'/>
      <IoChatbubbleEllipsesOutline className='chaticon' />
    </Nav>
  );
}

export default Header;