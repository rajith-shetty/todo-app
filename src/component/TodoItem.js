import  React  from 'react'

function TodoItem(props)
{

   const strikeclass={
        textDecoration: props.item.completed?'line-through':'none'
    }

    const divclass={
        height:'10%',
        width:'100%',
        border: '1px solid #4CAF50'
    }
    return(
        <div style={divclass}>
            <input type="checkbox" checked={props.item.icompleted} onChange={()=>props.handleChange(props.item.id)}/>
            <span style={strikeclass}>
                {props.item.text}
            </span>
        </div>
    )
}

export default TodoItem;
