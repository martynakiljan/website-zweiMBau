/** @format */
import Navbar from "../Navbar/Navbar";
import "./header.scss";
import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="header" id="home">
        <div className="header__mask"></div>
        <div className="header__title">
          <h1 className="header__text-first">
            <FormattedMessage id="header-main-title"></FormattedMessage>
          </h1>
          <h2 className="header__text-second">
            <FormattedMessage id="header-subtitle"></FormattedMessage>
          </h2>
        </div>
      </header>
    </>
  );
};

export default Header;
