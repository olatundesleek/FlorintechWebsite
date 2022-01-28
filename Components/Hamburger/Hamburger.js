function Hamburger({ onClick, isActiveStatus }) {
  return (
    <div
      className={isActiveStatus == false ? "hamburger" : "hamburger open"}
      onClick={onClick}
    >
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
      <div className="hamburger-bar"></div>
    </div>
  );
}

export default Hamburger;
