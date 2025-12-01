
import panadolImg from "../images/panadol.jpeg";
import aspirinImg from "../images/panadol.jpeg";
import cetirizineImg from "../images/Cetirizine.jpeg";

const medicines = [
    { id: 1, name: "Panadol", price: 3.5, description: "Pain reliever", img:  process.env.PUBLIC_URL + "/images/panadol.jpeg" , category: "pain-relievers" },
    { id: 2, name: "Aspirin", price: 4.0, description: "Fever reducer", img: process.env.PUBLIC_URL + "/images/aspirin.jpeg", category: "pain-relievers" },
    { id: 3, name: "Cetirizine", price: 2.25, description: "Allergy relief", img: process.env.PUBLIC_URL + "/images/Cetirizine.jpeg", category: "allergy" }
  ];
  
  export default medicines;