import Cell from "../Cell/Cell";

function Row(props) {
    return (
        <div className="row">
            {props.cells.map((data, i) => (
                <Cell key={i} data={data} />
            ))}
        </div>
    )
}

export default Row;
