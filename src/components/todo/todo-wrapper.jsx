import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Empty } from 'antd'

import { useAppSelector } from '../../hooks/redux-hooks'
import { addRecord } from '../../store/reducers/record-reducer'
import Todo from './todo'
import { suuid } from '../../utils/suuid'
import './todo.scss'

const MAX_TITLE_LENGTH = 10
const ERROR_MESSAGES = {
  'EMPTY_FIELD': 'The field must not be empty.',
  'EXCEEDS_LIMIT': 'Record length exceeds maximum limit.',
}

const TodoWrapper = () => {
  const dispatch = useDispatch()
  const { records } = useAppSelector((state) => state.recordReducer)

  const [newTitleRecord, setNewTitleRecord] = useState('')
  const [filter, setFilter] = useState('all')
  const [completedTasks, setCompletedTasks] = useState(0)
  const [uncompletedTasks, setUncompletedTasks] = useState(0)
  const [handleError, setHandleError] = useState(false)

  // eslint-disable-next-line max-statements
  const handleAddRecord = () => {
    const { 'length': titleLength } = newTitleRecord

    if (!titleLength) {
      setHandleError(true)
      // eslint-disable-next-line no-alert
      alert(ERROR_MESSAGES.EMPTY_FIELD)
      return
    }

    if (titleLength > MAX_TITLE_LENGTH) {
      setHandleError(true)
      // eslint-disable-next-line no-alert
      alert(ERROR_MESSAGES.EXCEEDS_LIMIT)
      return
    }

    const newRecord = {
      'id': suuid(),
      'title': newTitleRecord,
      'completed': false,
    }

    dispatch(addRecord(newRecord))
    setNewTitleRecord('')
  }

  const filteredRecords = useMemo(() => {
    switch (filter) {
      case 'completed': {
        return records.filter((record) => record.completed)
      }
      case 'current': {
        return records.filter((record) => !record.completed)
      }
      default: {
        return records
      }
    }
  }, [filter, records])

  const handleChange = (value) => {
    setHandleError(false)
    setNewTitleRecord(value)
  }

  useEffect(() => {
    const completedCount = records.filter((record) => record.completed).length
    const uncompletedCount = records.filter(
      (record) => !record.completed,
    ).length
    setCompletedTasks(completedCount)
    setUncompletedTasks(uncompletedCount)
  }, [records])

  return (
    <div>
      <p className="task-counter">Completed tasks: {completedTasks}</p>
      <p className="task-counter">Uncompleted tasks: {uncompletedTasks}</p>
      <input
        className={handleError ? 'todo-input error' : 'todo-input'}
        type="text"
        value={newTitleRecord}
        placeholder="Add record"
        onChange={(event) => handleChange(event.target.value)}
      />
      <button className='todo-btn' onClick={handleAddRecord}>
        Add Record
      </button>
      <div className='filter-container'>
        <p className='filter'>Filter:</p>
        <select
          className='filter-select'
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="current">Current</option>
        </select>
      </div>
      <div></div>
      <ul className="todo-list">
        {filteredRecords.map((record) => (
          <li key={record.id}>
            <Todo record={record} />
          </li>
        ))}
        {filteredRecords.length === 0 && (
          <Empty
            imageStyle={{ 'height': 60 }}
            description={<span className='empty-text'>No data</span>}
          />
        )}
      </ul>
    </div>
  )
}

export default TodoWrapper
