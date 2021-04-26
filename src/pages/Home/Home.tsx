import React from 'react'
import Button from '../../components/Button/Button'
import ListItem from '../../components/ListItem/ListItem'
import InputFeild from '../../components/Todo-Input/Input'
import Footer from '../../modules/Footer/Footer'
import Header from '../../modules/Header'
import './Home.css'

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <div className="input-wrapper" >
                    <InputFeild />
                    <Button text="Add" />
                </div>
                <div className="home_filterwrapper">
                    <p>Filter by: </p>
                    <button>All</button>
                    <button>Todo</button>
                    <button>Done</button>
                </div>
                <div className="listwrapper">
                    <ListItem text="Brush your teeth" />
                    <ListItem text="Have fun" />
                    <ListItem text="Pray 5times" />
                    <ListItem text="Brush your teeth" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
