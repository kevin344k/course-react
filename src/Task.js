import './tasks-styles.css'

export function TaskCard({ready}){
    return <div className='card'>
        <h1 >Miprimera tarea</h1>
     <span className={ready? 'green':'red'}>
     {
            ready===true? "Tarea realizada":"Tarea pendiente"
        }
     </span>
    </div>
}