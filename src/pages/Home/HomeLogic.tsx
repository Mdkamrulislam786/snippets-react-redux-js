import { useRef, useState } from 'react';
import FilterButtons from '../../components/FilterButtons/FilterButtons';

const HomeLogic = () => {
    //TODO STATES
    const [todos, setTodos] = useState([
        { id: 1, item: 'Brush your teeth', isDone: false },
        { id: 2, item: 'Have fun!', isDone: false },
        { id: 3, item: 'Have dinner!', isDone: false }
    ])
    const [item, setItem] = useState('')
    const [filter, setFilter] = useState('All');

    const inputRef: React.MutableRefObject<any> = useRef()

    const focus = () => {
        if (inputRef === null || undefined) {
            return
        }
        inputRef.current.focus()
    }

    //TODO CRUD OPERATIONS
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
        setItem('')
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

    //TODO FILTER OPERATIONS
    const FILTER_MAP: any = {
        All: () => true,
        Active: (task: any) => !task.isDone,
        Completed: (task: any) => task.isDone
    };
    const FILTER_NAMES = Object.keys(FILTER_MAP);

    const filterList = FILTER_NAMES.map(name => (
        <FilterButtons
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    return {
        setTodoItem,
        setUpdate,
        todoDone,
        deleteTodo,
        setTodosItems,
        todos,
        item,
        FILTER_NAMES,
        FILTER_MAP,
        filter,
        setFilter,
        filterList,
        focus,
        inputRef
    }

}
export default HomeLogic