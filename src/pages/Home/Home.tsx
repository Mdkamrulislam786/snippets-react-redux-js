import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import FilterButtons from '../../components/FilterButtons/FilterButtons'
import ListItem from '../../components/ListItem/ListItem'
import InputFeild from '../../components/Todo-Input/Input'
import Footer from '../../modules/Footer/Footer'
import Header from '../../modules/Header'
import './Home.css'

//filterhelpers
const FILTER_MAP: any = {
    All: () => true,
    Active: (task: any) => !task.isDone,
    Completed: (task: any) => task.isDone
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

const Home = () => {
    const [todos, setTodos] = useState([
        { id: 1, item: 'Brush your teeth', isDone: false },
        { id: 2, item: 'Have fun!', isDone: false },
        { id: 3, item: 'Have dinner!', isDone: false }
    ])
    const [item, setItem] = useState('')
    const [filter, setFilter] = useState('All');


    //OPERATIONS
    const setTodoItem = (value: string) => {
        console.log('value', value);
        setItem(value)
    }

    const setTodosItems = (item: string) => {
        console.log('item', item);
        let id = todos.length + 1
        let newTodo = { id, item, isDone: false }
        let newTodos = [...todos, newTodo]
        console.log('newTodos', newTodos);
        setTodos(newTodos)
    }

    const deleteTodo = (id: number) => {
        let deletedTodos = todos.filter((item) => item.id !== id)
        setTodos(deletedTodos)
    }

    const todoDone = (id: number) => {
        let item = todos.find((item) => item.id === id)
        item!.isDone = true
        setTodos([...todos])
        console.log('todos', todos);
    }

    const setUpdate = (text: string, id: number) => {
        console.log('edititems', text, id);
        if (!text.length) {
            alert('add todo or delete')
        }
        let updatedItems
        updatedItems = todos.map(todo => {
            if (todo.id === id) {
                todo.item = text
            }
            return todo
        })
        setTodos(updatedItems)
        console.log(todos);
    }

    //FILTER OPERATIONS
    const filterList = FILTER_NAMES.map(name => (
        <FilterButtons
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    const showList = () => {
        return todos.length ? <div className="listwrapper">
            {todos.filter(FILTER_MAP[filter]).map((todo) => {
                return (
                    <ListItem key={todo.id} todoitem={todo} todoDone={() => todoDone(todo.id)} deleteTodo={() => deleteTodo(todo.id)} setUpdate={setUpdate} />
                )
            })}
        </div> :
            <h4>No Item Added</h4>
    }

    return (
        <>
            <Header />
            <div className="home">
                <div className="input-wrapper" >
                    <InputFeild value={item} change={setTodoItem} />
                    <Button setTodosItems={() => setTodosItems(item)} text="Add" />
                </div>
                <div className="home_filterwrapper">
                    <p>Filter by: </p>
                    {filterList}
                </div>
                {showList()}
            </div>
            <Footer />
        </>
    )
}

export default Home
