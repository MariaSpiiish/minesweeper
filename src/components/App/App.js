import { useState } from "react";
import Board from "../Board/Board";
import BoardHead from '../BoardHead/BoardHead';

function App() {
  const [rows, setRows] = useState(16);
  const [columns, setColumns] = useState(16);
  const [flags, setFlags] = useState(40);
  const [mines, setMines] = useState(40);
  const [time, setTime] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [openCells, setOpenCells] = useState(0);

  const tick = () => {
    if (openCells > 0 && status === 'running') {
      setTime(time + 1);
    }
  }

  const handleCellClick = () => {
    if (openCells === 0 && status !== 'running') {
      setStatus('running')
      setInterval(() => {
        tick()
      }, 1000)
    }
  }

  return (
    <div className="page-container">
      <div className="minesweeper">
        <BoardHead time={time} flagCount={flags}/>
        <Board 
          handleCellClick={handleCellClick}
          openCells={openCells}
          time={time}
          rows={rows}
          columns={columns}
          flags={flags}
          mines={mines}/>
      </div>
    </div>
  );
}

export default App;
