import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Student() {
  const paperStyle = {
    padding: "50 px 20px",
    widthe: 600,
    margin: "20px auto",
  };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => console.log("NEW STUDENT ADDEDD!"));
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Student</u>
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Student Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            color="error"
            onClick={handleClick}
          >
            Send
          </Button>
        </Box>
        <Paper elevation={3} style={paperStyle}>
          {students
            .slice()
            .reverse()
            .map((student) => (
              <Paper
                elevation={6}
                style={{
                  margin: "10px",
                  padding: "15px",
                  textAlign: "left",
                  border: "2px solid #e0e0e0",
                  borderRadius: "8px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                key={student.id}
              >
                <div style={{ marginBottom: "8px" }}>
                  <strong>Roll No.:</strong> {student.id}
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <strong>Student Name:</strong> {student.name}
                </div>
                <div>
                  <strong>Student Address:</strong> {student.address}
                </div>
              </Paper>
            ))}
        </Paper>
      </Paper>
    </Container>
  );
}
