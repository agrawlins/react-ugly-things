import React, {useState, useContext, useEffect} from "react"
import Card from "./SubComponents/Card"
import { AxiosContext } from "./SubComponents/AxiosContext"

const Ugly = () => {
    const {ugly, setUgly, uglyList, GetAll, PostOne} = useContext(AxiosContext)

    useEffect(() => {GetAll()}, [])

    let mappedList = uglyList.map((param1, index) => {
    return(
            <ul>
                <Card {...param1} 
                    key = {param1.id}
                    id = {param1.id}
                    data = {uglyList}
                    imgUrl = {param1.imgUrl}
                />
            </ul>
        )
    })
    
    const HandleChange = (event) => {
        const {name, value} = event.target
        setUgly(prevUgly => ({
            ...prevUgly,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <h1>Create New Ugly Thing</h1>
                <div  className="form">
                    <label>Copy/Paste Image URL</label>
                    <input 
                        type="url"
                        name="imgUrl"
                        className="form--input"
                        value={ugly.imgUrl}
                        onChange={HandleChange}
                    >
                    </input>
                    <label>Title</label>
                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                        name="title"
                        value={ugly.title}
                        onChange={HandleChange}
                    />
                    <label>Description</label>
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="description"
                        value={ugly.description}
                        onChange={HandleChange}
                    />

                    <button 
                        className="form--button"
                        onClick={PostOne}
                    >
                        ADD IT TO YOUR COLLECTION <br/> OF UNDESIRABLES
                    </button>
                </div>
                
                <div className="ugly">
                    <div className="ugly--list">
                        <h2 className="ugly--cardText Top">{ugly.title}</h2>
                        <h3 className="ugly--cardText Bottom">{ugly.description}</h3>
                        <img src={ugly.imgUrl} className="ugly--image"/>
                        <h1 className="ugly--cardText">PREVIEW</h1>
                        <div className="cardButtons">
                            <button className = "deleteButton" disabled>X</button>
                            <button className="editButton" disabled>Edit</button> 
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="uglyViewer">
                <h1>View Your Ugly Things</h1>
                <ul className="ul">
                    {mappedList}
                </ul>
            </div>
        </main>
    )
}

export default Ugly