import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

function Cadastro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleCadastro(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await api.post('/cadastro', {
        username,
        email,
        idade,
        password
      });

      // Salva o token no localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Configura o token no header da api
      api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

      // Redireciona para a home
      navigate('/home');
    } catch (err) {
      console.error('Erro no cadastro:', err);
      setError(err.response?.data?.message || 'Erro ao cadastrar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='container'>
      <form onSubmit={handleCadastro}>
        <h1>Cadastro de Usuário</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input
          type="text"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        
        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>

        <p className="login-link">
          Já tem uma conta? <Link to="/login">Fazer login</Link>
        </p>
      </form>
    </div>
  );
}

export default Cadastro;
