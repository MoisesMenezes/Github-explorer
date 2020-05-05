import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Input, Button, Repositories } from './styles';
import LogoImg from '../../assets/logoImg.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <Input placeholder="Digite o nome do repositório" />
        <Button>Pesquisar</Button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/27028314?s=460&u=d841df66cc0899dee66eea05d5abe7122e87d49d&v=4"
            alt="Moisés Menezes"
          />
          <div>
            <strong>Node Js</strong>
            <p>Aplicação em JS</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/27028314?s=460&u=d841df66cc0899dee66eea05d5abe7122e87d49d&v=4"
            alt="Moisés Menezes"
          />
          <div>
            <strong>Node Js</strong>
            <p>Aplicação em JS</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
