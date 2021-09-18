import NavBar from "./NavBar";
import '../css/layout.css';

function Layout(props) {
    return <div className="fill-screen">
        <NavBar />
        <main>
            {props.children}
        </main>
    </div>
}
export default Layout;