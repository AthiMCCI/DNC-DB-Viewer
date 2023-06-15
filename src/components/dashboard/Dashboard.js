import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';

import  { Fragment, useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Swal from 'sweetalert2'
import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { GridRowModes, GridActionsCellItem } from '@mui/x-data-grid-pro';


// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const DWNLINK_URL1 = 
"https://eu1.cloud.thethings.network/api/v3/as/applications/catena-boards-cdc/devices/eui-0002cc0100000ad0/down/replace"
         
const API_KEY1 = 
"NNSXS.4LRUIYISOZYHSTHPCINEI5NTAK7NFVXJL4NV23Q.MOSD66Q3AY2LM5MQSCTTG37J5T7TS7L33JRGUXWMUKKXW3VJOPUQ" 

const myfunc = [
    { "id": "1", "label": "Uplink Time Interval", "value": "UpLink Time Interval" },
    { "id": "2", "label": "CO2 Calibration", "value": "Co2 Calibration" },
    { "id": "3", "label": "Custom DownLink", "value": "Custom DownLink" }
]
const myfunc1 = [
    { "id": "1", "label": "Seconds", "value": "Seconds" },
    { "id": "2", "label": "Minutes", "value": "Minutes" },
    { "id": "3", "label": "Hours", "value": "Hours" }
]

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {
  const [myalert, setMyalert] = useState(false);
    const [myalertmsg, setMyalertMsg] = useState("");
    const [msgtype, setMsgtype] = useState("error");
    const dateFormatter = str => {
      return str;
    }
  
    const BASE_URL = "https://dashboard.mouserat.io/dncserver"
    const [rows, setRows] = React.useState([]);
    const [rowModesModel, setRowModesModel] = React.useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [selfunc, setSelfunc] = useState("");

    const [textInput, setTextInput] = useState('');


    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectionModelChange = (params) => {
      const selectedIds = params.selectionModel;
      setSelectedRows(selectedIds);
    };
  
    const handleShowSelected = () => {
      console.log("Selected Rows:", selectedRows);
      // Perform any desired actions with the selected rows
    };

    

    async function onSubmitDL(e){
        console.log("On Submit - 100")
        console.log("Value of TextField: ", textInput)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"dndata": textInput});
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
        };
        fetch("http://localhost:8894/nwqry", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    async function onSubmitDL_old(e){
        console.log("On Submit ")
        
        let mydict = {}
        mydict["frm_payload"] = "Aa4C"
        mydict["confirmed"] = true
        mydict["f_port"] = 1 
        
        let mylist = []
        mylist.push(mydict)

        let maindict = {}
        maindict["downloads"] = mylist

        console.log(maindict)
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", 'Bearer ' + API_KEY1);
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: maindict,
            redirect: 'follow'
        };
            
        let myslist = [];

        fetch(DWNLINK_URL1, requestOptions)
        // .then((response) => response.json())
        .then((response) => {
            console.log(response)
        })
    }
    
    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as per your requirements
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const [cols, setCols] = React.useState([]);
    const [mypopup, setMyPopUp] = React.useState(false);
    const [myassign, setMyAssign] = React.useState(false);
    const { data1, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 4,
        maxColumns: 6
    });


    
   
  





    const [selid, setSelId] = React.useState();


    function constructtable(mykeys) {
        let mycol = [];
        let maxFieldLengths = {}; // Track the maximum length for each field
      
        for (let i = 0; i < mykeys.length; i++) {
          let mydict = {};
          mydict['field'] = mykeys[i];
          if (mykeys[i] === 'id') {
            mydict['headerName'] = 'SlNo';
          } else {
            mydict['headerName'] = mykeys[i];
          }
          mycol.push(mydict);
          maxFieldLengths[mykeys[i]] = mydict['headerName'].length;
        }
      
      
        rows.forEach((row) => {
          mykeys.forEach((field) => {
            const value = row[field] ? row[field].toString() : '';
            const length = value.length;
            if (length > maxFieldLengths[field]) {
              maxFieldLengths[field] = length;
            }
          });
        });
      
        // Set the fixed width factor
        const widthFactor = 15; // Adjust the factor as per your preference
      
        // Update the column width dynamically based on the maximum length
        mycol.forEach((column) => {
          const field = column['field'];
          const maxFieldLength = maxFieldLengths[field];
          const fieldWidth = (maxFieldLength + 1) * widthFactor; // Calculate the width dynamically based on the maximum length
          column['width'] = fieldWidth;
        });
        mycol.push({
          field: 'actions',
          type: 'actions',
          headerName: 'Actions',
          width: 100,
          cellClassName: 'actions',
          getActions: ({ id }) => {
              const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
              if (isInEditMode) {
                  return [
                      <GridActionsCellItem icon={<SaveIcon />} onClick={handleSaveClick(id)} label="Save" />,
                      <GridActionsCellItem
                          icon={<CancelIcon />}
                          onClick={handleCancelClick(id)}
                          label="Cancel"
                          className="textPrimary"
                          color="inherit"
                      />
                  ];
              }

              return [
                  <GridActionsCellItem
                      icon={<EditIcon />}
                      onClick={handleEditClick(id)}
                      label="Edit"
                      className="textPrimary"
                      color="inherit"
                  />,
                  <GridActionsCellItem onClick={handleDeleteClick(id)} icon={<DeleteIcon />} label="Delete" color="inherit" />,
//                   <GridActionsCellItem
//                       icon={<ScreenRotationAltSharpIcon />}
//                       onClick={handleAssignClick(id)}
//                       helperText="Some important text"
//                       label="Custom Actimport RemoveDevice from './removedevice';
// ion"
//                       color="inherit"
//                       title="Assigned Devices"
//                   />
                  // <Button variant="text">T e x t</Button>
                  // onClick={handleCustomAction(id)}
              ];
          }
      });
        setCols(mycol);
      }

    const handleRowEditStart = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleRowEditStop = (params, event) => {
        event.defaultMuiPrevented = true;
    };

    const handleEditClick = (id) => () => {
        console.log('Edit Triggered: ===> ', id);
        setSelId(id)
;
        setMyPopUp(true);
    };
    const handleAssignClick = (id) => () => {
        console.log('assign device: ===> ', id);
        setSelId(id)
;
        setMyAssign(true);
    };

    function printmyrow(id)
 {
        console.log(rows);
    }

    const makepopenable = () => {
        setMyPopUp(false);
    };
    const makeassigndeviceenable = () => {
        setMyAssign(false);
    };

    const handleSaveClick = (id) => () => {
        setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    };

    const onProcessRowUpdateError = (error) => {
        console.log('Error: --->', error);
    };

    const handleCancelClick = (id) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true }
        });
    };

    const handleDeleteClick = (id) => async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this data!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });
    };

    const handleRowModesModelChange = (newRowModesModel) => {
        setRowModesModel(newRowModesModel);
    };

    const processRowUpdate = async (newRow) => {
        const updatedRow = { ...newRow, isNew: false };

        return updatedRow;
    };

    const handleTextInputChange = event => {
        setTextInput(event.target.value);
    };

    
    const [clients, setClients] = useState(["select a Client"])
    const [selclient, setSelClient] = useState("");

    useEffect(() => {
        getMyc()
    }, [] )

    async function getMyc(){
        let mydev = await getClientList()
        // setDcpoints(mydev)
        let mynewc = []
        for(let i=0; i<mydev.length; i++){
            let mydict = {}
            mydict["id"] = i+1;
            mydict["label"] = mydev[i].cname
            mydict["value"] = mydev[i].cname
            mynewc.push(mydict)
        }
        console.log(mydev)
        setClients(mynewc)
    }

    async function funcChange(e){
        let selfunc = e.target.value
        setSelfunc(e.target.value)
    }

    async function clientChange(e){
        let selclient = e.target.value
        setSelClient(e.target.value)
        let goc = await getOneClient(selclient)
        let myrow = goc[0];
        let mkeys = Object.keys(myrow);
        constructtable(mkeys);
        setRows(goc);
    }

    function showAlert(msg, mtype) {
        setMsgtype(mtype)
        setMyalertMsg(msg)
        setMyalert(true)
        setTimeout(()=>{setMyalert(false)}, 3000);    
    }

    
    function removeColumns(inlist){
        let forDeletion = ["", "_id", "latitude", "longitude", "createdAt", "updatedAt", "__v"]
        inlist = inlist.filter(item => !forDeletion.includes(item))
        return inlist
    }


    function getOneClient(sclient){
        return new Promise(async function(resolve, reject){
            let auth = sessionStorage.getItem("myToken")
            var myHeaders = new Headers();
            myHeaders.append("Authorization", 'Bearer ' + auth);
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders
            };
            
            let myslist = [];

            fetch(BASE_URL+"/listadev/"+sclient, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                data.forEach((item, index) => {
                    let myrow = {};
                    myrow['id'] = index + 1;

                    let keys = Object.keys(item);
                    keys = removeColumns(keys)
                    for (let i = 0; i < keys.length; i++) {
                        myrow[keys[i]] = item[keys[i]];
                    }
                    myslist.push(myrow);
                });
                console.log(myslist)
                resolve(myslist);
            })
            .catch((error) => {
                reject(error);
            });
        })
    }

    function getClientList(){
        return new Promise(async function(resolve, reject){
            let auth = sessionStorage.getItem("myToken")
            var myHeaders = new Headers();
            myHeaders.append("Authorization", 'Bearer ' + auth);
            myHeaders.append("Content-Type", "application/json");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders
            };
            fetch(BASE_URL+"/clients", requestOptions)
            .then(response => response.json())
            .then(data => {
                resolve(data)
            })
            .catch(error => {
                reject(error)
            });
        })
    }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            DB-VIEWER
          </Typography>
          {/* <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Enterprise
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Support
            </Link>
          </nav> */}
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container  disableGutters maxWidth="sm" component="main" sx={{ pt: 3, pb: 1 }}>
        <Typography style={{marginLeft:'15%'}}
         
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Select a Client {''}
          <select style={{ width: '30%',fontSize: '20px'  }}  name="location" id="location" onChange={clientChange}>
                {
                    clients.map(msgLoc => {
                        return ( <option key = {msgLoc.id} value={msgLoc.value}> {msgLoc.label} </option> ) 
                    })
                }
                </select>
        </Typography>


        <Typography variant="h70" align="left" color="text.secondary" component="p" >
        <DataGrid
         {...data1}
         loading={loading}
         slots={{ toolbar: GridToolbar }}
         rows={rows}
         columns={cols}
         pageSize={10}
         rowsPerPageOptions={[10]}
         checkboxSelection
         selectionModel={selectedRows} // Add this line to configure the selection model
         editMode="row"
         enableRowSelection
         enableSelectAll={false}
         rowModesModel={rowModesModel}
         onRowModesModelChange={handleRowModesModelChange}
         onRowEditStart={handleRowEditStart}
         onRowEditStop={handleRowEditStop}
         processRowUpdate={processRowUpdate}
         onProcessRowUpdateError={onProcessRowUpdateError}
         onSelectionModelChange={handleSelectionModelChange}
         style={{ width: '150%', marginLeft: '-20%' }}
       />

{/* <Button href="#" variant="outlined" sx={{ my: 1, mx: -15 }} onClick={() => {
  console.log(selectedRows); // Log the selected rows to the console
}}>
  Show selected Checkbox
</Button> */}
 <Button variant="outlined" sx={{ my: 1, mx: -15 }} onClick={handleShowSelected}>
        Show Selected Rows
      </Button>
        </Typography>
      </Container>

      {/* End hero unit */}
      <Container maxWidth="md" component="main">
      <Typography style={{marginLeft:'15%'}}
         
         variant="h5"
         align="center"
         color="text.primary"
         gutterBottom
       >
         Select a Function {''}
         <select style={{ width: '30%',fontSize: '20px'  }} name="location" id="location" onChange={funcChange}>
         {
            myfunc.map(msgLoc => {
                return ( <option key = {msgLoc.id} value={msgLoc.value}> {msgLoc.label} </option> ) 
            })
         }
         </select>
       </Typography>
       <Typography style={{marginLeft:'1%',marginTop:"3%"}}
         
         variant="h5"
         align="center"
         color="text.primary"
         gutterBottom
       >
         Interval {''}
         </Typography>
         <Box sx={{ marginLeft:'57%', marginTop:"-7%",width:"10%" }}>
         <TextField style={{}}
            id="standard-basic"  label="Enter Data" variant="standard"
            value = {textInput}
            onChange= {handleTextInputChange}
         />
         </Box>
          <Box sx={{ minWidth: 850,marginTop:"-22px",marginLeft:"69%" }}>
         <select style={{ width: '12%',fontSize: '20px', marginTop:"-100px"  }}  name="location" id="location" onChange={funcChange}>
         {
            myfunc1.map(msgLoc => {
                return ( <option key = {msgLoc.id} value={msgLoc.value}> {msgLoc.label} </option> ) 
            })
         }
         </select>
         </Box>
         <Typography style={{marginLeft:'-10%',marginTop:"3%"}}
         
         variant="h5"
         align="center"
         color="text.primary"
         gutterBottom
       >
         Cycle to Repeat {''}
         </Typography>
         <Box sx={{ marginLeft:'57%', marginTop:"-7%",width:"10%" }}>
         <TextField style={{}}
            id="standard-basic"  label="Enter Data" variant="standard"
            value = {textInput}
            onChange= {handleTextInputChange}
         />
         <Button style={{marginLeft:"120%",marginTop:"-75%",fontSize: '10.5px',width:"135%"}}  onClick={onSubmitDL} variant="contained">Send Downlink</Button>
         </Box>
         
    
          









      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        {/* <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid> */}
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}