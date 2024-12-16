import CompB from "./CompB"
function CompA (){
    let eid =101
    let ename= "Rohi"
    let a= "Good Morning"
    return <div>
        <h2>A component</h2>
        <hr />
        <CompB one={1} two={[1,2,3]}/>
        {/* <CompB prop1={"Good Morning"} prop2={["a","b","c"]}/> */}
        {/* <CompB Employee_id={eid} Employee_name={ename} msg={a}/> */}
    </div>
}
export default CompA
