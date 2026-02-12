import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se o usuário está autenticado
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (!token) {
      navigate('/login');
      return;
    }

    // Configura o token no header
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    getUsers();
  }, [navigate]);

  async function getUsers() {
    try {
      const response = await api.get('/usuarios');
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        // Token inválido, redireciona para login
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id) {
    try {
      await api.delete(`/usuarios/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      alert('Erro ao deletar usuário');
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }

  if (loading) {
    return (
      <div className='container'>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <div className='container'>
        <div className="header">
          <h1>Bem-vindo, {currentUser?.username}!</h1>
          <button className="logout-button" onClick={handleLogout}>
            Sair
          </button>
        </div>

        <div className="users-section">
          <h2>Usuários Cadastrados ({users.length})</h2>
          
          {users.length === 0 ? (
            <p className="no-users">Nenhum usuário cadastrado ainda.</p>
          ) : (
            users.map(user => (
              <div className="card" key={user.id}>
                <div>
                  <p>Nome: <span>{user.username}</span></p>
                  <p>Idade: <span>{user.idade || 'Não informado'}</span></p>
                  <p>Email: <span>{user.email}</span></p>
                </div>
                <button onClick={() => deleteUser(user.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
