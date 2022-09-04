import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./css/Products.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SortIcon from '@mui/icons-material/Sort';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Filterandsort({handleoptionChange}) {
    // const [appliedfilters, setAppliedfilters] = React.useState("");
    const [gender, setGender] = React.useState("");
    // const [sport, setSport] = React.useState("");

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // const handleoptionChange = (event) => {
    //     // if(event.target.checked){
    //     //     let temp = event.target.value;
    //     //     console.log("temp",temp)

    //     //     setAppliedfilters(appliedfilters+temp);
    //     //     console.log("appliedfilters",appliedfilters);
    //     // }
    // };
    return (
        <Box sx={{ display: 'flex' }} style={{ width:"80%", boxSizing:"border-box", margin:"auto" }}>
            <CssBaseline />
            <div onClick={handleDrawerOpen}
                edge="end"
                sx={{ mr: 2, ...(open && { display: 'none' }) }} > 
                <div classname="at-filtandsort" style={{border:"2px solid black", display:"flex", alignItems:"center",flexDirection:"row", padding:"2%", width:"112%", fontSize:"14px", marginTop:"5%", marginBottom:"5%"}}>FILTER & SORT <SortIcon style={{marginLeft:"3%"}}/> </div>
                </div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <HighlightOffIcon /> : <HighlightOffIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <div>Applied Filters</div>
                    <List>
                        <div classname="filterlist">
                            <span>Male </span>
                            <span>Running </span>
                        </div>
                    </List>
                </List>
                <List>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Price</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },

                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="lowtohigh" onChange={(e)=>handleoptionChange(e,"price")}/>
                                <ListItemText primary="Low To High" />
                            </ListItem>
                            {/* <Divider /> */}
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="hightolow" onChange={(e)=>handleoptionChange(e,"price")}/>
                                <ListItemText primary="High To Low" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </List>
                <Divider />


                <List>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Gender</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="Male" onChange={(e)=>handleoptionChange(e)}/>
                                <ListItemText primary="Male" />
                            </ListItem>
                            {/* <Divider /> */}
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="Female" onChange={(e)=>handleoptionChange(e)}/>
                                <ListItemText primary="Female" />
                            </ListItem>
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="Kids" onChange={(e)=>handleoptionChange(e)}/>
                                <ListItemText primary="Kids" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </List>

                <Divider />
                <List>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Sport</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="Lifestyle" onChange={(e)=>handleoptionChange(e, "Sport")}/>
                                <ListItemText primary="Lifestyle" />
                            </ListItem>
                            {/* <Divider /> */}
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="Training" onChange={(e)=>handleoptionChange(e,"sport")}/>
                                <ListItemText primary="Training" />
                            </ListItem>
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="Running" onChange={(e)=>handleoptionChange(e,"sport")}/>
                                <ListItemText primary="Running" />
                            </ListItem>
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} value="originals" onChange={(e)=>handleoptionChange(e,"sport")}/>
                                <ListItemText primary="originals" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </List>
                <Divider />
                <List>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Brand</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} />
                                <ListItemText primary="Low To High" />
                            </ListItem>
                            {/* <Divider /> */}
                            <ListItem button style={{ textAlign: "start", paddingLeft: "0" }}>
                                <Checkbox {...label} sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }} button style={{ textAlign: "start", paddingLeft: "0" }} />
                                <ListItemText primary="High To Low" />
                            </ListItem>
                        </AccordionDetails>
                    </Accordion>
                </List>
            </Drawer>
        </Box>
    );
}
