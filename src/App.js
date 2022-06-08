import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [anchor, setAnchor] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const removeClick = (e) => {
    console.log(e);
    e.preventDefault();
    setShow(false);
  };

  const contextMenuHandler = (e) => {
    // console.log(e);
    e.preventDefault();
    // e.target.addEventListener("click", removeClick);
    setAnchor({ x: e.pageX, y: e.pageY });
    setShow(true);
  };
  return (
    <div
      className="App"
      onClick={removeClick}
      onContextMenu={contextMenuHandler}
    >
      {show && (
        <ul className="menu" style={{ top: anchor.y, left: anchor.x }}>
          <li>Share to..</li>
          <li>Cut</li>
          <li>Copy</li>
          <li>Paste</li>
          <hr />
          <li> Refresh</li>
          <li>Exit</li>
        </ul>
      )}
    </div>
  );
}

export default App;
