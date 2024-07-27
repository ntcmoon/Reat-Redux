import NavbarRight from "./NavbarRight";
import NavbarLeft from "./NavbarLeft";

function Navbar() {
    return (
        <div style={{height: '35px', display:'flex',justifyContent: 'space-between'}}>
            <NavbarLeft />
            <NavbarRight />
        </div>
    )
}

export default Navbar; 