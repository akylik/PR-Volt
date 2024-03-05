import React from 'react'
import { DeleteTwoTone } from '@ant-design/icons'
import { Tag } from 'antd'

import { useDispatch } from 'react-redux'
import { deleteStatus, toggleStatus } from '../../store/reducers/record-reducer'
import './todo.scss'

const Todo = ({ record }) => {
  const dispatch = useDispatch()
  const toggleComplete = (id) => {
    dispatch(toggleStatus(id))
  }
  const deleteTodo = (id) => {
    dispatch(deleteStatus(id))
  }

  return (
    <div className="todo">
      <p
        className={`${record.completed ? 'completed' : 'incompleted'}`}
        onClick={() => toggleComplete(record.id)}
      >
        {record.title}
      </p>

      <div>
        <Tag color={record.completed ? '#87d068' : '#108ee9'}>
          {record.completed ? 'Completed' : 'Not completed'}
        </Tag>
        <DeleteTwoTone
          twoToneColor='#000'
          className='delete-icon'
          onClick={() => deleteTodo(record.id)}
        />
      </div>
    </div>
  )
}

export default Todo
