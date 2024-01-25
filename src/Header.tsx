import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'

var sideOpen = false;
function handleNav(){
    const nav = document.getElementById("sidebar");
    const main = document.getElementById("main");
    if(nav === null || main === null){
        
    }
    else{
        if(sideOpen){
            nav.style.width = "0";
            main.style.marginLeft = "0";
            sideOpen = false;
        }
        else{
            nav.style.width = "10%";
            main.style.marginLeft = "10%";
            sideOpen = true;
        }
    }

    
}

function Header(){
    return (
        <div>
            <IconButton onClick={handleNav}>
                <MenuIcon />
            </IconButton>
            <Button variant="text">Web Forum</Button>
            <Button variant="text">Login</Button>
        </div>
        
      )
}


export default Header;