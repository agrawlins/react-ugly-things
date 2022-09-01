import React, {useState, createContext} from "react"
import axios from "axios"

const AxiosContext = createContext()

const AxiosContextProvider = (props) => {
    const baseURL = "https://api.vschool.io/adamrawlins/thing/"
    const [ugly, setUgly] = useState({
        title: "Harley",
        description: "the ugly goldfish",
        imgUrl: "https://pbs.twimg.com/media/Bc_B4vrCMAIPZck.png",
    })
    const [uglyList, setUglyList] = useState([])

    const GetAll = () => {
        axios.get(`${baseURL}`)
        .then(res => {
            console.log(res.data, "getting")
            setUglyList(res.data)
        })
        .catch(err => console.log(err))
    }

    const PostOne = () => {
        axios.post(`${baseURL}`, {
          title: ugly.title,
          description: ugly.description,
          imgUrl: ugly.imgUrl,
        })
        .then(res => {
          GetAll()
          }
        )
        .catch(err => console.log(err))
      }

      const PutOne = (id, card) => {
        axios.put(`${baseURL}${id}`, {
            title: card.title,
            description: card.description,
            imgUrl: card.imgUrl
          })
          .then(res => {
            GetAll()
            }
          )
          .catch(err => console.log(err))
    }

    const DeleteOne = (id) => {
        axios.delete(`${baseURL}${id}`)
        .then(res => {
            GetAll()
            }
          )
        .catch(err => console.log(err))
        console.log(id)
    }

    
    return(
        <AxiosContext.Provider value={{
          uglyList, setUglyList,
          ugly, setUgly,
          GetAll,
          PostOne,
          PutOne,
          DeleteOne,
          }}>
            {props.children}
          </AxiosContext.Provider>
    )
}

export {AxiosContext, AxiosContextProvider}