import React, {Component} from 'react'
import photo from "./chihiro.jpg"
export default class ProfilPhoto extends Component{
    render() {
        return(
            <div>
                <img src={photo} style={{width:"400px"}}></img>
                
            </div>
        )
    }
}