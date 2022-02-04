import "./Backdrop.css";

// just a backbar behind sidebar
const Backdrop = ({ click, show }) => {
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
