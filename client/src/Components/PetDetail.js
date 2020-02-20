import React, {
  useState,
  useEffect,
} from 'react';
import {
  useParams
} from 'react-router-dom';
import Axios from 'axios';
import uuid from 'react-uuid';

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


      setPetData(result.data)
    }
    getData()

  },[petId]) 

return ( 
<div>
  <p>{petData.name && petData.name}</p> 
  { 
   petData.image && petData.image.map(image => {
   
      return(
        <img key={uuid()} src={image.full} alt={image.full}/> 
      )})
  }
  
  
</div>
     )
};


export default PetDetail;