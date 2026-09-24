import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <h1>Smart Feed</h1>
            </div>
            <div className="header-search">
                <input type="text" placeholder="Pesquisar..." />
            </div>
            <div className="header-profile">
                <span>Meu Perfil</span>
            </div>
        </header>
    );
}

export default Header;