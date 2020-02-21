import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: 'solid 1px #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function TodoItem({todo:{completed, title, id}, index, onChange}){
    const {removeTodo} = useContext(Context)
    return (
        <li style={styles.li}>
            <span className={completed ? 'done' : ''}>
                <input type="checkbox"
                    checked={completed && 'checked'} 
                    style={styles.input} 
                    onChange={()=>onChange(id)}
                />
                <strong>{index+1}</strong>
                &nbsp;
                {title}
            </span>
            
            <button className="rm" onClick={removeTodo.bind(null, id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;