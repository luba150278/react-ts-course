import React, { PureComponent, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/app';
interface UserData {
  name: string;
  surname: string;
  link: string;
}

type MyState = {
  years: number;
};

class WhoAmI extends PureComponent<UserData, MyState> {
  constructor(props: UserData) {
    super(props);
    this.state = {
      years: 26,
    };
  }

  nextYear = (): void => {
    this.setState((prevState) => ({ years: prevState.years + 1 }));
  };

  render(): ReactElement {
    const { name, surname, link } = this.props;
    const { years } = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>
          My name is {name}, surname - {surname}, years - {years}
        </h1>
        <a href={link}>{link}</a>
      </>
    );
  }
}

const All: React.FC = () => (
  <>
    <WhoAmI name="Luba" surname="NNNN" link="site.com" />
    <WhoAmI name="Nina" surname="PPPP" link="site.com" />
    <WhoAmI name="Anna" surname="FFFF" link="site.com" />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <All />
  </React.StrictMode>,
  document.getElementById('root')
);
