import { VscBroadcast } from "react-icons/vsc";

export const Posts=()=>{
    return <button onClick={()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    }}>
        <VscBroadcast></VscBroadcast>
        Get Data
    </button>
}