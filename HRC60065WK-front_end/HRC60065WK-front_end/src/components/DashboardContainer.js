import React, { useState } from "react";
import { Paper, Button } from "@material-ui/core";
import NavbarComponent from "./NavbarComponent";
import Dialog from "@material-ui/core/Dialog";
import Add from "./AddComponent.js";
import EditComponent from "./EditComponent";
import DeleteComponent from "./DeleteComponent";
import {getData, AddData, searchData } from "../services/Data";
import AdvanceSearchComponent from "./AdvanceSearchComponent";
import { DataGrid } from "@mui/x-data-grid";
import axios from 'axios';

function DashboardContainer() {

  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [select, setSelection] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { field: "sl_no", headerName: "Sl No", width: 100 },
    { field: "business_code", headerName: "Business Code", width: 100 },
    { field: "cust_number", headerName: "Customer Number", width: 100 },
    { field: "clear_date", headerName: "Clear Date", width: 100 },
    { field: "buisness_year", headerName: "Business Year", width: 100 },
    { field: "doc_id", headerName: "Document ID", width: 100 },
    { field: "posting_date", headerName: "Posting Date", width: 100 },
    {
      field: "document_create_date",
      headerName: "Document Create Date",
      width: 100
    },
    { field: "due_in_date", headerName: "Due In Date", width: 100 },
    { field: "invoice_currency", headerName: "Invoice Currency", width: 100 },
    { field: "document_type", headerName: "Document Type", width: 100 },
    { field: "posting_id", headerName: "Posting ID", width: 100 },
    { field: "total_open_amount", headerName: "Total Open Amount", width: 100 },
    {
      field: "baseline_create_date",
      headerName: "Baseline Create Date",
      width: 100
    },
    {
      field: "cust_payment_terms",
      headerName: "Customer Payment Terms",
      width: 100
    },
    { field: "invoice_id", headerName: "Invoice ID", width: 100 }
  ];

  React.useEffect(async () => {
      setData(await getData())
  }, []);

//search SetHandler
  const [openSearch, setOpenSearch] = React.useState(false);
  const searchClick = () => setOpenSearch(true);
  const handleCloseSearch = () => setOpenSearch(false);
  const [search,setSearch] = useState({cust_number:'',buisness_year:'',doc_id:'',invoice_id:''})
  const changeHandlerSearch =(e) =>{
    const {name,value} = e.target;
    setSearch({...search,[name]:value});
  }
  const submitHandlerSearch = async (e) =>{
    e.preventDefault();
    console.log(search);
    let data = "cust_number="+search.cust_number + "&buisness_year="+search.buisness_year + "&doc_id="+search.doc_id + "&invoice_id="+search.invoice_id;
    let response = await axios.get("http://localhost:8080/HRC/search?"+ data);
    
    setData(response.data.companies);
    handleCloseSearch();
  }
  const closeHandlerSearch = (e) =>{
    e.preventDefault();
    handleCloseSearch();
  }

  // States for Managing Add Dialog
  const [openAdd, setOpenAdd] = React.useState(false);
  const addClick = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  const [intern,setIntern] = useState({business_code:'',cust_number:'',clear_date:'',buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',due_in_date:'',invoice_currency:'',posting_id:'',total_open_amount:'',
    baseline_create_date:'',cust_payment_terms:'',invoice_id:'',document_type:''})
  const {business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,posting_id,total_open_amount,
  baseline_create_date,cust_payment_terms,invoice_id,document_type} = intern;
  const changeHandler =(e) =>{
    const {name,value} = e.target;
    setIntern({...intern,[name]:value});
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    window.alert("New Data Added!!");
    handleCloseAdd();
    window.location.reload(true);

    let response = await AddData(intern);
    if(response){
      setIntern({business_code:'',cust_number:'',clear_date:'',buisness_year:'',doc_id:'',posting_date:'',document_create_date:'',due_in_date:'',invoice_currency:'',posting_id:'',total_open_amount:'',
      baseline_create_date:'',cust_payment_terms:'',invoice_id:'',document_type:''});
    }
  }

  const closeHandler = (e) =>{
    e.preventDefault();
    handleCloseAdd();
  }

  // States for Managing Delete Dialog
  const [openDelete, setOpenDelete] = React.useState(false);
  const deleteClick = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const closeHandlerDelete = (e) =>{
    e.preventDefault();
    handleCloseDelete();
  }

  // States for Managing Edit Dialog
  const [openEdit, setOpenEdit] = React.useState(false);
  const editClick = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [selected, setSelected] = useState([]);
  const closeHandlerEdit = (e) =>{
    e.preventDefault();
    handleCloseEdit();
  }

  return (
    <>
    <header style={{backgroundColor:"#2D4250",height:90,padding:0,display:"flex"}}>
      <div style={{display:"inline-block",verticalAlign:"top"}}>
        <img src="headpic.png" style={{paddingLeft: 20,paddingTop: 10}}></img>
      </div>
      <div style={{display:"inline-block"}}>
        <p style={{fontSize:"30px",color:"white"}}>ABC Products</p></div>  
      <img src="hrc.png" style={{paddingLeft:420,height: 100,width:350}}></img>
    </header>
      <Paper
        style={{
          background: "#0C2D48",
        }}
      >
        <div
          style={{
           display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <NavbarComponent
            addClick={addClick}
            deleteClick={deleteClick}
            editClick={editClick}
            searchClick={searchClick}
            selected={selected}
          />

         <div style={{ height: 520, width: "100%",  backgroundColor: "#1B1F38", color:"white"}}>
            <DataGrid
            sx={{color:"white"}}
              // {...data}
              rows={data}
              columns={columns}
              getRowId={(row) => row.sl_no}
              // loading={data.rows.length === 0}
              // rowHeight={38}
              checkboxSelection
              onSelectionModelChange={
                itm => setSelected(itm)
                }
              // onSelectionModelChange={
              //   itm => console.log(data.find(index=>index=itm[0]))
              //   }
              // onSelectionModelChange={(ids) => {
              //   const selectedIDs = new String(ids);
              //   const selectedRowData = data.filter((row) =>
              //     selectedIDs.has(row.id)
              //   );
              //   console.log(selectedRowData);
              // }}
              disableSelectionOnClick
              rowsPerPageOptions={[5, 10, 25, 100]}
            />
          </div>
        </div>
      </Paper>
      <footer style={{backgroundColor:"#2D4250",padding:0,height:100}}>
        
            <p style={{color:"white"}}>2022 Highradius Corporation,All rights reserved</p>
          </footer>

      {/* Dialog Box for Add Button */}
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <Add business_code={business_code} cust_number={cust_number} clear_date={clear_date} buisness_year={buisness_year} doc_id={doc_id} posting_date={posting_date} document_type={document_type} document_create_date={document_create_date} due_in_date={due_in_date} invoice_currency={invoice_currency} posting_id={posting_id} total_open_amount={total_open_amount}
        baseline_create_date={baseline_create_date} cust_payment_terms={cust_payment_terms} invoice_id={invoice_id} changeHandler={changeHandler} submitHandler={submitHandler} closeHandler={closeHandler}/>
      </Dialog>

      {/* Dialog Box for Delete Button */}
      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DeleteComponent selected={selected} closeHandlerDelete={closeHandlerDelete}/>
      </Dialog>

      {/* Dialog Box for Edit Button */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <EditComponent  currData={data.find(e => e.sl_no === selected[0])} closeHandlerEdit={closeHandlerEdit}/>
      </Dialog>

      <Dialog open={openSearch} onClose={handleCloseSearch}>
      <AdvanceSearchComponent cust_number={search.cust_number} buisness_year={search.buisness_year} doc_id={search.doc_id} invoice_id={search.invoice_id} changeHandlerSearch={changeHandlerSearch} submitHandlerSearch={submitHandlerSearch} closeHandlerSearch={closeHandlerSearch}/>
      </Dialog>
    </>
  );
}

export default DashboardContainer;