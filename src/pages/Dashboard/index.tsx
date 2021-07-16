import React,{FormEvent, useEffect, useState} from 'react';
import api from '../../services/api';
import {Title, Form, Repositories, Error,Image} from './styles';
import {FiChevronRight} from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');
    if(storageRepositories){
      return JSON.parse(storageRepositories);
    }
    return [];
  });
  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  },[repositories]);
  async function handleAddRepository(event: FormEvent): Promise<void> {
    event.preventDefault();
    if(!newRepo){
      setInputError('Enter author/repository name');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    }catch(error){
      setInputError('Error searching for this repository');
    }
  }
  
  return (
    <>
      <Image src={logo} alt="Logo" width="180"/>

      <Title>Explore Repositories on github</Title>

      <Form onSubmit={handleAddRepository} hasError={!!inputError}>
        <input 
          type="text"
          placeholder="Enter author/repository"
          onChange={event => setNewRepo(event.target.value)}
          value={newRepo} 
        />
        <button type="submit">
          <i className="fas fa-search" />Search</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository =>(
          <Link to={`/repositories/${repository.full_name}`} key={repository.full_name}>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
          <FiChevronRight size={20}/>
        </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard;