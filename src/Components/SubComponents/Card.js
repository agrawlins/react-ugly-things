import React, {useState, useContext} from "react";
import { AxiosContext } from "./AxiosContext";

const Card = (props) => {
    const [card, setCard] = useState({
        title: props.title,
        description: props.description,
        imgUrl: props.imgUrl
    })
    const [edit, setEdit] = useState(false)
    const {PutOne, DeleteOne} = useContext(AxiosContext)

    const handleChange = (event) => {
        const {name, value} = event.target
        setCard(prevCard => ({
            ...prevCard,
            [name]: value
        }))       
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        PutOne(props._id, card) 
        setEdit(!edit)  
    }

  return(
      <div className="ugly--list">
        <li key={props.id} id ={props.id}>
            <h2 className="ugly--cardText Top">{card.title}</h2>
            <h3 className="ugly--cardText Middle">{card.description}</h3>
            <img src={card.imgUrl} className="ugly--image"/>
            <div className="cardButtons" id={props.id}>
                <button className = "deleteButton" onClick={() => DeleteOne(props._id)}>X</button>
                <button className="editButton" style={{display: edit ? "none" : "block"}}  onClick={() => {setEdit(!edit)}}>Edit</button> 
            </div>
        </li>
        <div className="cardInputs">
            <form className="form" style={{display: edit ? "block" : "none"}} onSubmit ={handleSubmit}>
            <label style={{color: "white"}}>Image URL</label>
                <br/>
                <input 
                    type="url"
                    className="form--input"
                    name="imgUrl"
                    value={card.imgUrl}
                    onChange={handleChange}
                />
                <br/>
                <label style={{color: "white"}}>Title</label>
                <br/>
                <input 
                    type="text"
                    className="form--input"
                    name="title"
                    value={card.title}
                    onChange={handleChange}
                />
                <br/>
                <label style={{color: "white"}}>Description</label>
                <br/>
                <input 
                    type="text"
                    className="form--input"
                    name="description"
                    value={card.description}
                    onChange={handleChange}
                />
                <br/>
                <button
                    type="submit"
                    className="form--button"
                    onClick={handleSubmit}
                >Save</button>
            </form>   
        </div>
    </div>    
  )
}

export default Card