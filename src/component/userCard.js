import React from "react"
import { Button, Card } from "react-bootstrap"

const UserCard = ({avatar , name ,following,follower , city , bio , repo})=>{
    return(
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  src={avatar} />
  <Card.Body>
    <Card.Title><h5>{name}</h5></Card.Title>
    <Card.Text>
        <ul>
            <li><b> BIO: </b>{bio}</li>
            <li><b>REPO's: </b>{repo}</li>
            <li><b>followers: </b>{follower}</li>
            <li><b>following: </b>{following}</li>
            <li><b>CITY: </b>{city}</li>
        </ul>
    </Card.Text>

    
  </Card.Body>
</Card>
    )
}
export default UserCard