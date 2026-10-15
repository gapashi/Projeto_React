import './SettingsPage.css';

function SettingsPage({ isDarkMode, setIsDarkMode }) {
  return (
    <div className="settings-container">
      <h2>Configurações da Conta</h2>

      <div className="settings-section">
        <h3>Aparência</h3>
        <div className="setting-item">
          <div>
            <strong>Tema Escuro</strong>
            <p>Altera o fundo para escuro e a cor de destaque para azul.</p>
          </div>
          <button 
            type="button"
            className={`toggle-btn ${isDarkMode ? 'active' : ''}`}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? 'Ligado' : 'Desligado'}
          </button>
        </div>
      </div>

      <div className="settings-section">
        <h3>Privacidade & Segurança</h3>
        <div className="setting-item">
          <div>
            <strong>Conta Privada</strong>
            <p>Apenas conexões aprovadas podem ver seus posts no feed.</p>
          </div>
          <input type="checkbox" defaultChecked />
        </div>
        <div className="setting-item">
          <div>
            <strong>Status Online</strong>
            <p>Mostrar quando você estiver estudando ou ativo na rede.</p>
          </div>
          <input type="checkbox" defaultChecked />
        </div>
      </div>

      <div className="settings-section">
        <h3>Notificações</h3>
        <div className="setting-item">
          <div>
            <strong>Notificações por E-mail</strong>
            <p>Receber avisos de novos cursos e respostas nos seus posts.</p>
          </div>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;