import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Header from "./component/Header"
import UserCard from "./component/userCard";
import Error from "./component/ErrorPage"
import "./githubSearch.css"
const App = () => {
    const [inputValue, setInputValue] = useState("example")
    const [value, setValue] = useState(null)
    const [user, setUser] = useState(null)
    const [dark , setDark] = useState(false)
    const [icon , setIcon] = useState("fas fa-moon")
    const [find , setFind] = useState(true)
    const getUser = () => {
        fetch(`https://api.github.com/users/${inputValue}`)
            .then(res => res.json())
            .then(res => {
                if(res.message){
                    setFind(false)
                    setUser(res)

                }else{
                    setFind(true)
                                        setUser(res)
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUser()
    }, [inputValue])

    const getValue = ()=>{
        setInputValue(value)
    }

    const changeColor = ()=>{
        if(dark){
            setDark(false)
            setIcon("fas fa-moon")
        }   else{
            setDark(true)
                setIcon("fas fa-sun")

        } 
    }

    return (
        <div style={{backgroundColor : dark ? "#0D1117" : "white" , minHeight:"100vh"}}>

            <Header changeColor={changeColor} icon={icon} />

            <div className="formSearch">

                <input type="text" onChange={(e) => setValue(e.target.value)} placeholder="Search User.." />
                <Button onClick={getValue} variant="dark">Search</Button>
                {/* <SearchField /> */}

            </div>


            {
                find?
            <div className="userCardBOx">
                <UserCard following={user ? user.following : null} follower={user ? user.followers : null}
                    repo={user? user.public_repos : null}
                   bio={user ? user.bio : null}
                    city={user ? user.location : null}
                    name={user ? user.name : null}
                    avatar={user ? user.avatar_url : "null"} />
            </div> : <Error msg={user.message} color={dark?"white" : "black"} />
            }            

         

        </div>
        

        )
}
export default App