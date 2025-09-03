import { useState } from "react";
import { Box, TextField, Button, Typography, MenuItem } from "@mui/material";

const departments = [
  "Engineering",
  "Marketing",
  "Sales",
  "Human Resources",
  "Finance",
  "Support",
];

const roles = [
  "Manager",
  "Designer",
  "Imployee",
  "Contractor",
  "Intern",
  "Other",
];

const NewUsers = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && date && email && department && role && phone) {
      const user = { name, date, email, department, role, phone };
      const users = JSON.parse(localStorage.getItem("newUsers") || "[]");
      users.push(user);
      localStorage.setItem("newUsers", JSON.stringify(users));
      setName("");
      setDate("");
      setEmail("");
      setDepartment("");
      setRole("");
      setPhone("");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 5, p: 3, backgroundColor: "#fff", borderRadius: 2 }}>
      <Typography variant="h5" color="black" mb={2}>
        Add New User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
          required
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
          required
        />
        <TextField
          label="Phone Number"
          type="tel"
          variant="outlined"
          fullWidth
          value={phone}
          onChange={e => setPhone(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
          required
        />
        <TextField
          label="Department"
          select
          variant="outlined"
          fullWidth
          value={department}
          onChange={e => setDepartment(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
          required
        >
          {departments.map(dep => (
            <MenuItem key={dep} value={dep}>{dep}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Role"
          select
          variant="outlined"
          fullWidth
          value={role}
          onChange={e => setRole(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
          required
        >
          {roles.map(r => (
            <MenuItem key={r} value={r}>{r}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Start Date"
          type="date"
          variant="outlined"
          fullWidth
          value={date}
          onChange={e => setDate(e.target.value)}
          sx={{ mb: 2, backgroundColor: "white", borderRadius: 1 }}
          InputLabelProps={{ shrink: true }}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </form>
    </Box>
  );
};

export default NewUsers;