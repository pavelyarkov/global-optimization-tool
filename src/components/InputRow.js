import "../InputRow.css";

function InputRow (props) {
    function handleChange(e) {
        if (props.type==="checkbox"){
            props.sendData(props.id,e.target.checked);
        }
        else{
            props.sendData(props.id,e.target.value);
        }
    }
    const divId=props.id+"-container";
    return (
        <div id={divId}>
            <label className="row-label" htmlFor={props.id}>{props.name}</label>
            <input className="row-input" id={props.id} type={props.type} required={props.required} pattern={props.pattern} 
            autoComplete="off" onChange={handleChange}/>
        </div>
    );
}
export default InputRow;