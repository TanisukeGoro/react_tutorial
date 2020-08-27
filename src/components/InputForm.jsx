// InputForm.jsx
import React, { useState, useEffect } from 'react'
import firebase from '../firebase/firebase'
import { japaneseDays, formatInputDay } from '../libs/parseDay'

const InputForm = ({ getTodosFromFirestore }) => {
  const [todo, setTodo] = useState('')
  const [limit, setLimit] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  useEffect(() => {
    updateLimit()
  }, [date, time])

  // Firestoreにデータを送信する関数
  const postDataToFirestore = async (collectionName, postData) => {
    const addedData = await firebase.firestore().collection(collectionName).add(postData)
    return addedData
  }

  // submitボタンクリック時の処理
  const submitData = async () => {
    if (todo === '' || limit === '') {
      return false
    }
    console.log(limit)
    const postData = {
      todo: todo,
      limit: new Date(limit),
      isDone: false,
    }
    const addedData = await postDataToFirestore('todos', postData)
    setTodo('')
    setLimit('')
    setDate('')
    setTime('')
    getTodosFromFirestore()
  }

  const updateLimit = () => {
    console.log('date :>> ', date)
    console.log('time :>> ', time)
    if (date === '' && time !== '') return setLimit(`${formatInputDay(new Date())}T${time}`)
    if (date !== '' && time === '') return setLimit(`${date}T00:00`)
    setLimit(`${date}T${time}`)
  }

  const varidateLimitTime = (value) => {
    const japaneseDaysLists = Object.keys(japaneseDays)
    console.log('value :>> ', value)
    const regTime = new RegExp('[0-9]{2}:[0-9]{2}')
    if (regTime.test(value)) {
      const varidate = value.match(regTime)
      value = value.replace(new RegExp(varidate[0], 'g'), '')
      setTime(varidate[0])
    }

    const regDate = new RegExp(japaneseDaysLists.join('|'))
    if (regDate.test(value)) {
      const varidate = value.match(regDate)
      value = value.replace(new RegExp(varidate[0], 'g'), '')
      setDate(formatInputDay(japaneseDays[varidate[0]]))
    }
    return setTodo(value)
  }

  return (
    <form action="">
      <ul>
        <li>
          <label htmlFor="todo">やること：</label>
          <input type="text" id="todo" value={todo} onChange={(e) => varidateLimitTime(e.target.value)} />
        </li>
        <li>
          <label htmlFor="limit">締め切り：</label>
          <input type="datetime-local" id="limit" value={limit} onChange={(e) => setLimit(e.target.value)} />
        </li>
        <li>
          <button type="button" onClick={submitData}>
            submit
          </button>
        </li>
      </ul>
    </form>
  )
}

export default InputForm
