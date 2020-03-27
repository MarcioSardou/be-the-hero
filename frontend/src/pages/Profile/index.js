import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiPower,FiTrash } from 'react-icons/fi';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero"/>
        <span>Bem vinda, APAD</span>
        
        <Link className="button" to='/incidents/new'>Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>  
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Caso:</strong>
          <p>Caso Teste</p>
          
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          
          <button type="buton">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Caso:</strong>
          <p>Caso Teste</p>
          
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          
          <button type="buton">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Caso:</strong>
          <p>Caso Teste</p>
          
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          
          <button type="buton">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Caso:</strong>
          <p>Caso Teste</p>
          
          <strong>Caso:</strong>
          <p>Caso Teste</p>
          
          <button type="buton">
            <FiTrash size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
    );
  }
  