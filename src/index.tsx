import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/app';

interface UserData {
  name: string;
  surname: string;
  link: string;
}
const userData: UserData = { name: 'John', surname: 'Ivanov', link: 'facebook.com' };

const WhoAmI: React.FC<UserData> = ({ name, surname, link }) => (
  <>
    <h1>
      My name is {name}, surname - {surname}
    </h1>
    <a href={link}>{link}</a>
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <WhoAmI name={userData.name} surname={userData.surname} link={userData.link} />
  </React.StrictMode>,
  document.getElementById('root')
);
