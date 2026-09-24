import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav">
                <ul>
                    <li className="active">
                        <a href="#">Meu Feed</a>
                    </li>
                    <li>
                        <a href="#">Cursos</a>
                    </li>
                    <li>
                        <a href="#">Configurações</a>
                    </li>
                    <li>
                        <a href="#">Agente de IA (Em Breve)</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;