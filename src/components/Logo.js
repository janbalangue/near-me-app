import { ReactComponent as LogoSVG } from "../app/assets/img/mapPin.svg";

const Logo = () => {
  return (
    <div className="appTitle">
      <LogoSVG />
      <strong>Near Me App</strong>
    </div>
  );
};

export default Logo;
