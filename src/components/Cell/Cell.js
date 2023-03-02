function Cell(props) {
    if(props.data.isOpen) {
        return (
            <div className="cell open"></div>
        )
    } else {
        return (
            <div className="cell opacity"></div>
        )
    }  
}

export default Cell;
