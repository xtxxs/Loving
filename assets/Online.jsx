import { useEffect, useState } from "react"
import "./online.css"

const Online = ({info, data}) => {

      const {name, id_xat, avatar} = info 
      const photo = avatar === "" ? data.info.avatar : avatar 

      const [online, setOnline] = useState([])

      async function getOnline(id){

            try{
                  const response = await fetch(`https://oceanbot.net/online.php?id=${id}`)
                  const result = await response.json()
                  setOnline(result)
            }
            catch(err){
                  console.log('Error: ', + err)
            }
      }

      useEffect(() => {
            getOnline(id_xat)
      }, [id_xat])

      return (
            <div className="wrapper_online flex">
                  <div className="online_avatar">
                        <img src={photo} alt={name} />
                        <div className={online.status === "online" ? "online_dots green" : "online_dots red"}></div>
                  </div>
                  <div className={online.status === "online" ? "online_status green" : "online_status red"}>{online.status === "online" ? "Online" : "Offline"}</div>
            </div>
      )
}

export default Online
