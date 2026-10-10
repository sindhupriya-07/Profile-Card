import React from 'react' 
import './App.css'
const App = () => {
  const yourName = "Sindhu";
  const yourAim = "To become a Full Stack Developer";
  const funFact = " I plan everything but doesnot plan to execute it";  
 return (
 <div className="profile-card"> 
  <h1 className="card-title">Profile Card</h1>
  <h2 className="profile-name">Name: {yourName}</h2>
  <h2 className="profile-aim">Aim: {yourAim}</h2>
  <p className="profile-learning">Iam currently learning React.</p>
  <p className="profile-fun-fact">Fun Fact: {funFact}</p>
 </div>
 )
 } 
export default App