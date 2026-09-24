import './Sidebar.css';

function Sidebar({setCurrentPage}) {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <button onClick={() => setCurrentPage('feed')}>
                    Meu Feed
                </button>

                <button onClick={() => setCurrentPage('cursos')}>
                    Cursos
                </button>

                <button>
                    Configurações
                </button>

                <button>
                    Agente de IA (Em breve...)
                </button>
            </nav>
        </aside>
    );
}

export default Sidebar;