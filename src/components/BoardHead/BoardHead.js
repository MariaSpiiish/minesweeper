function BoardHead({time, flagCount}) {
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60 || 0;

    let formattedSec = seconds < 10 ? `0${seconds}` : seconds;

    let timer = `${minutes}:${formattedSec}`;
    return (
        <div className="board-head">
            <div className="board-head__flag-count">{flagCount}</div>
            <button className="board-head__reset-button opacity">Reset</button>
            <div className="board-head__timer">{timer}</div>
        </div>
    )
}

export default BoardHead;
