import { BrowserRouter as Router, Routes, Route, Outlet, Link, useLocation } from 'react-router-dom';
import Reports from './components/Reports';
import Home from './components/Home';
import NewUsers from './components/NewUsers';
import { AppBar, Toolbar, Drawer, List, ListItem, Box, Divider, ListItemButton } from "@mui/material";
import AssessmentIcon from '@mui/icons-material/Assessment';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import FolderSharedSharpIcon from '@mui/icons-material/FolderSharedSharp';

const drawerWidth = 300;
function DashboardLayout() {
  const location = useLocation();

  return (
        <Box sx={{ display: "flex",

        textAlign: 'center',
        backgroundColor: '#a5c8ebff',
         
        minHeight: '100vh' // ensure it covers the full viewport height
         }}>


      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          backgroundColor: '#000000ff',
          
          [`& .MuiDrawer-paper`]: {
             width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#ebf6ffff",
              },
        }}
      >
        <Toolbar className='h-[72px]' /> {/* pushes drawer content below the AppBar */}
        <List sx={{p:2.5 }} className='mt-10'>
          
          <ListItemButton
            sx={{ justifyContent: "center" ,borderRadius: "6px",my: "5px"  }}
            selected={location.pathname === "/"}
          >
            <AssessmentIcon sx={{textalign:'center'}}/>
            <Link  to="/" style={{ width: "100%", textAlign: "center", color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
          </ListItemButton>
          <ListItemButton
            sx={{ justifyContent: "center", borderRadius: "6px",my: "5px" }}
            selected={location.pathname === "/reports"}
          >
            <FolderSharedSharpIcon sx={{textalign:'center'}}/>
            <Link to="/reports" style={{ width: "100%", textAlign: "center", color: "inherit", textDecoration: "none" }}>
              Reports
            </Link>
          </ListItemButton>
          <ListItemButton
            sx={{ justifyContent: "center", borderRadius: "6px",my: "5px" }}
            selected={location.pathname === "/new-users"}
          >
            <PersonAddAltSharpIcon sx={{textalign:'center'}}/>
            <Link to="/new-users" style={{ width: "100%", textAlign: "center", color: "inherit", textDecoration: "none" }}>
              New Users
            </Link>
          </ListItemButton>

        </List>
      </Drawer>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginleft: `${drawerWidth}px` }}>


        <Toolbar className=' text-white ' />  {/* pushes content below the AppBar */}
        <Outlet /> {/* Where pages show up */}
      </Box>
    </Box>
  )
}




function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="reports" element={<Reports />} />
          <Route path="new-users" element={<NewUsers />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
