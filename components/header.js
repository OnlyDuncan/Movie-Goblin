import Nav from './nav';
import Theme_Toggle from './theme_toggle';

export default function Header() {
    return (
        <div>
            <Theme_Toggle />
            <h1>Movie Goblin</h1>
            <Nav />
        </div>
    )
}