import Header from './header';

export default function Layout({ children }) {
    return (
        <div style={{ position: "relative" }}>
            <Header />
            <main style={{ backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>
                <div className="contentCard">
                    {children}
                </div>
            </main>
        </div>
    );
};