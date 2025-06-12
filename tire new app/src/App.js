import React, { useState, useEffect } from 'react';
import './App.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

const [vehicleData, setVehicleData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "vehicles"));
    const data = querySnapshot.docs.map(doc => doc.data());
    setVehicleData(data);
  };
  fetchData();
}, []);
