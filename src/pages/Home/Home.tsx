import { useEffect } from 'react'
import Button from '../../components/Button/Button'
import ListItem from '../../components/ListItem/ListItem'
import InputFeild from '../../components/Todo-Input/Input'
import Footer from '../../modules/Footer/Footer'
import Header from '../../modules/Header'
import './Home.css'
import HomeLogic from './HomeLogic'

const Home = () => {
    //all homelogics
    const {
        setTodoItem,
        setUpdate,
        todoDone,
        deleteTodo,
        setTodosItems,
        todos,
        item,
        FILTER_MAP,
        filter,
        filterList,
        inputRef,
        focus
    } = HomeLogic()

    //focuses on input field onpage load
    useEffect(() => {
        focus()
    }, [focus])

    return (
        <>
            <Header />
            <div className="home">
                <div className="input-wrapper" >
                    <InputFeild inputRef={inputRef} value={item} change={setTodoItem} />
                    <Button setTodosItems={() => setTodosItems(item)} text="Add" />
                </div>
                <div className="home_filterwrapper">
                    <p>Filter by: </p>
                    {filterList}
                </div>
                {todos.length ?
                    (<div className="listwrapper">
                        {todos.filter(FILTER_MAP[filter]).map((todo) => {
                            return (
                                <ListItem key={todo.id} todoitem={todo} todoDone={() => todoDone(todo.id)} deleteTodo={() => deleteTodo(todo.id)} setUpdate={setUpdate} />
                            )
                        })}
                    </div>)
                    :
                    (<h4>No Item Added</h4>)}
            </div>
            <Footer />
        </>
    )
}

export default Home

