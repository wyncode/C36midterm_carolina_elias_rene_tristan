import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import {
  useParams
} from 'react-router-dom';
import Axios from 'axios';
import Card from 'react-bootstrap/Card'

const PetDetail = () => {
  const [petData, setPetData] = useState({})
  let {
    petId
} = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await (Axios.get(`/api/pet/${petId}`))
        // .then(response => {
        //   console.log(response)

        // })
        console.log(result)


      const { id } = result.data
      setPetData(result.data)
    }
    getData()

  },[]) 

return ( 
<div>
  <p>{petData.name && petData.name}</p> 
  {
    petData.image && petData.image.map(image => {
      return(
        <img src={image.full} alt={image.full}/> 
      )})
  }
  
  
</div>
     )
};


export default PetDetail;