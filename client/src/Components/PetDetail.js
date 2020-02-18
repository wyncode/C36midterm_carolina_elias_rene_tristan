import React, {
  useState,
  useEffect,
  Fragment
} from 'react';
import {
  useParams
} from 'react-router-dom';
import Axios from 'axios';

const PetDetail = () => {
  const [petData, setPetData] = useState({})
  let {
    petId
  } = useParams();

  useEffect(() => {
    const getData = async () => {
      const result = await (Axios.get(`/api/pets/${petId}`))
        // .then(response => {
        //   console.log(response)

        // })
        console.log(result)


      const { id } = result.data
      setPetData(id)
    }
    getData()

  },[]) 

return ( <p>{petData && petData.name}</p> 
     )
};


export default PetDetail;