import NavBar from "./NavBar";
import '../css/layout.css';

function Layout(props) {
    return <div>
        <NavBar />
        <main>
            {props.children}
        </main>
    </div>
}

export default Layout;