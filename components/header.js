import Nav from './nav';
import Theme_Toggle from './theme_toggle';

export default function Header() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40px", backgroundColor: "#FFFFFF" }}>
                <Theme_Toggle />
                <a className="title" href="/homepage">Movie Goblin</a>
                <Nav />
        </div>
    )
}