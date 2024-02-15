import { useState } from "react";

export default function Button() {
  const [eliminado, setEliminado] = useState(false);
  const [hover, setHover] = useState(false)

  function handleClick() {
    setEliminado(true);
  }

  return (
    <div>
    <button
      onClick={handleClick}
      onMouseOver={() => setHover(true)}
      onMouseOut={()=> setHover(false)}
      style={{ cursor: "pointer" }}
    >
      {hover ? 'Eliminar' : '❌'}
    </button>
    {eliminado && <p>Eliminado</p>}
    </div>
  );
}
