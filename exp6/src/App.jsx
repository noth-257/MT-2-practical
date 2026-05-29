import React from 'react'; 
const productImage =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff";

// import './App.css'; 
// const Student = (props) => { 
//   return ( 
//     <div className="student-card"> 
//       <h2>Student Details</h2> 
//       <p> 
//         <strong>Name:</strong> {props.name} 
//       </p>  
//       <p> 
//         <strong>Course:</strong> {props.course} 
//       </p> 
//       <p> 
//         <strong>Marks:</strong> {props.marks} 
//       </p> 
//     </div> 
//   ); 
// };  
function App() { 
  return ( 
//     <div className="App"> 
//       <h1>Student Information System</h1>      
// <div className="student-container"> 
//         <Student 
//           name="Monika" 
//           course="B.Tech Data Science" 
//           marks="95" 
//         /> 
//         <Student 
//           name="Rahul" 
//           course="B.Tech CS" 
//           marks="88" 
//         />
//         <Student 
//           name="Sneha" 
//           course="B.Tech IT" 
//           marks="92" 
//         /> 
//       </div> 
//     </div> 
    <div
      style={{
        display:"flex",
        flexDirection:"column",
        minHeight:"100vh",
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
      }}
    >
      <h1
        style={{
          color:"black",
        }}
      >
      Student Information System
      </h1>
      <div
        style={{
          alignContent:"center",
          width:"220px",
          height:"220px",
          border:"1px solid black",
          color:"black",
          borderRadius:"20px",
        }}
      >
        <img
          src={productImage}
          alt="Nike Running Shoes"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <div
        // style={{
        //   alignContent:"center",
        //   width:"220px",
        //   height:"220px",
        //   border:"1px solid black",
        //   color:"black",
        //   borderRadius:"20px",
        // }}
      >
        {/* <img
          src={productImage}
          alt="Nike Running Shoes"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        /> */}
      </div>
      <div></div>
    </div>
  );  
} 
export default App; 
