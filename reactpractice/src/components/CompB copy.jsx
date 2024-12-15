function CompB (props){

    return <div>
        <h2>B component</h2>
        <pre>{JSON.stringify(props)}</pre>
       <h3>Employee id: {props.Employee_id}</h3>
       <h3>Employee id: {props.msg}</h3>
    </div>
}
export default CompB