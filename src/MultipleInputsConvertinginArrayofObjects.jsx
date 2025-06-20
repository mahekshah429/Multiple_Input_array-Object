import React, { useState } from "react";

const MultipleInputsConvertinginArrayofObjects = () => {
  const [name, setName] = useState("");
  const [fathername, setFathername] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [formDataArray, setFormDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !fathername || !mobilenumber || !city || !age) {
      alert("Please fill all fields");
      return;
    }

    const newEntry = {
      name,
      fathername,
      mobilenumber,
      city,
      age,
    };

    console.log("Submitted Object ➡️", newEntry); 

    setFormDataArray([...formDataArray, newEntry]);
    setName("");
    setFathername("");
    setMobilenumber("");
    setCity("");
    setAge("");
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "30px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Segoe UI, sans-serif",
    },
    heading: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      fontSize: "16px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
    },
    button: {
      width: "100%",
      padding: "12px",
      fontSize: "16px",
      backgroundColor: "#25d366",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
    list: {
      marginTop: "25px",
      listStyleType: "none",
      padding: 0,
    },
    listItem: {
      background: "#e1ffc7",
      marginBottom: "10px",
      padding: "12px",
      borderRadius: "8px",
      fontSize: "15px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📋 User Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Enter your father's name"
          value={fathername}
          onChange={(e) => setFathername(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Enter mobile number"
          value={mobilenumber}
          onChange={(e) => setMobilenumber(e.target.value)}
          style={styles.input}
        />

        <input
          type="text"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          ➕ Submit
        </button>
      </form>

      <h3 style={{ textAlign: "center", marginTop: "30px", color: "#444" }}>
        Submitted Entries
      </h3>
      <ul style={styles.list}>
        {formDataArray.map((entry, index) => (
          <li key={index} style={styles.listItem}>
            <strong>Name:</strong> {entry.name} <br />
            <strong>Father's Name:</strong> {entry.fathername} <br />
            <strong>Mobile:</strong> {entry.mobilenumber} <br />
            <strong>City:</strong> {entry.city} <br />
            <strong>Age:</strong> {entry.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleInputsConvertinginArrayofObjects;
