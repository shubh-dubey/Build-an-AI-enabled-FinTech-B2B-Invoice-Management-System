import * as React from "react";
import Button from '@mui/material/Button';

function AdvanceSearchComponent ({cust_number,buisness_year,doc_id,invoice_id,changeHandlerSearch, submitHandlerSearch, closeHandlerSearch}) {
    return <>
        <section style={{backgroundColor: "#0C2D48"}}>
        <h2 style={{color:"white", marginLeft:"30px"}}>ADVANCE SEARCH</h2>
            <input value={cust_number} type="text" name="cust_number" placeholder={"cust_number"} 
                style={{ marginLeft: "30px", marginBottom:"30px" ,width: 210, height:"50px", borderRadius:"5px"}} 
                required onChange={changeHandlerSearch}
            />
            <input value={buisness_year} type="text" name="buisness_year" placeholder={"buisness_year"} 
                style={{ marginLeft: "80px",  marginBottom:"30px" , width: 210, height:"50px", borderRadius:"5px"}} 
                required onChange={changeHandlerSearch}
            />
            <input value={doc_id} type="text" name="doc_id" placeholder={"doc_id"} 
                style={{ marginLeft: "30px",  marginBottom:"30px" , width: 210, height:"50px", borderRadius:"5px"}} 
                required onChange={changeHandlerSearch}
            />
            <input value={invoice_id} type="text" name="invoice_id" placeholder={"invoice_id"} 
                style={{ marginLeft: "80px",  marginBottom:"30px" , width: 210, height:"50px", borderRadius:"5px"}} 
                required onChange={changeHandlerSearch}
            />
            <br/>
            <Button value={"Search"} type={"submit"} placeholder={"Search"} 
                style={{height:"40px", borderRadius:"5px", marginLeft:"8px", marginBottom:"20px", 
                paddingRight:"110px", paddingLeft:"110px", backgroundColor: "#0C2D48", color:"white",
                border: "2px ridge white"}}  onClick={submitHandlerSearch}>Search</Button>

            <Button value={"Cancel"} type={"cancel"} placeholder={"Cancel"} 
                style={{height:"40px", borderRadius:"5px", marginLeft:"12px", marginBottom:"20px", 
                paddingRight:"110px", paddingLeft:"110px", backgroundColor: "#0C2D48", color:"white", 
                border: "2px ridge white"}} onClick={closeHandlerSearch}>Cancel</Button>
        </section>
    </>
}

export default AdvanceSearchComponent;