import {useMemo, useState} from "react"
import { Container, Paper, Typography } from "@mui/material";
import {DataGrid,  } from "@mui/x-data-grid";
import SearchData from "./SearchData";
const columns = [
  { field: "name", headerName: "Name", flex: 1 },
  { field: "date", headerName: "Start Date", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
  { field: "role", headerName: "Role", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
];
const Reports = () => {
  const users = JSON.parse(localStorage.getItem("newUsers") || "[]");
  const rows = users.map((user: any, idx: number) => ({ id: idx + 1, ...user }));
  const paginationModel = { page: 0, pageSize: 5 };
  const [searchQuery, setSearchQuery] = useState("");

  

  const filteredUsers = useMemo(() => {
    if (!searchQuery) return [];
    const q = searchQuery.toLowerCase().replace(/\s+/g, "");
    return users
      .filter((user:any) => {
        if (!user.name) return false;
        const nameLower = String(user.name).toLowerCase();
        const nameCollapsed = nameLower.replace(/\s+/g, "");
        const initials = String(user.name)
          .split(/\s+/)
          .map((n:string) => (n && n[0]) ? n[0] : "")
          .join("")
          .toLowerCase();
        return (
          initials.startsWith(q) ||
          nameLower.includes(searchQuery.toLowerCase()) ||
          nameCollapsed.includes(q)
        );
      })
      .map((user:any, idx:number) => ({ id: idx + 1, ...user }));
  }, [users, searchQuery]);


  console.log(filteredUsers);
  return (
    <Container sx={{ px: '40px', py: '50px', }}>
      <Typography variant="h5" gutterBottom sx={{ width: "1001px", textAlign: "left", fontWeight: "bold" }}>
        Users
      </Typography>
      <Paper sx={{  width: 1120, p: '20px',display: 'flex-col',alignItems:"flex-end",my:0 }}>
        <SearchData onSearchChange={setSearchQuery} />
        {users && searchQuery && filteredUsers.length === 0 ? (
          <Typography color="error" sx={{ mt: 1 }}>this user cant be found</Typography>
        ) : (
          <DataGrid
            sx={{fontSize: '15px',height:'71%'}}
            rows={searchQuery && filteredUsers.length > 0 ? filteredUsers : rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
          />
        )}
      </Paper>
    </Container>
  );
};
export default Reports;
