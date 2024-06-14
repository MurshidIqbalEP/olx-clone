import React, { useContext, useEffect, useState } from 'react';
import {PostContext} from '../../Store/PostContext'
import './View.css';
import { FirebaseContext } from '../../Store/Context';
function View() {

  const[userDeails,setUserDetails]=useState()
  
  const {postDetails}=useContext(PostContext)
  
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    const {userId} = postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=> {
        setUserDetails(doc.data())
        console.log(userDeails);
      });
    })
  },[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?.url}
          alt="image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails?.price} </p>
          <span>{postDetails?.name}</span>
          <p>{postDetails?.category}</p>
          <span>{postDetails?.createdAt}</span>
        </div>
      {userDeails &&  <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDeails.userName}</p>
          <p>{userDeails.phone}</p>
        </div>
}
      </div>
    </div>
  );
}
export default View;
