import * as React from "react";
import Button from '@mui/material/Button';

function AddComponent ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,posting_id,total_open_amount,
    baseline_create_date,cust_payment_terms,invoice_id,document_type,changeHandler, submitHandler,closeHandler}) {
      
    return <>
        <section style={{backgroundColor: "#0C2D48"}}>
        <h2 style={{color:"white", marginLeft:30}}>ADD</h2>
        {/* <form style={{width:"100%"}}> */}
            <input value={business_code} name="business_code" placeholder={"business_code"} style={{margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={cust_number} name="cust_number" placeholder={"cust_number"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={clear_date} type="date" name="clear_date" placeholder={"clear_date"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={buisness_year} name="buisness_year" placeholder={"buisness_year"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={doc_id} name="doc_id" placeholder={"doc_id"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={posting_date} type="date" name="posting_date" placeholder={"posting_date"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={document_create_date} type="date" name="document_create_date" placeholder={"document_create_date"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={due_in_date} type="date" name="due_in_date" placeholder={"due_in_date"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={invoice_currency} name="invoice_currency" placeholder={"invoice_currency"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={posting_id} name="posting_id" placeholder={"posting_id"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={total_open_amount} name="total_open_amount" placeholder={"total_open_amount"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={baseline_create_date} type="date" name="baseline_create_date" placeholder={"baseline_create_date"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={cust_payment_terms} name="cust_payment_terms" placeholder={"cust_payment_terms"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={invoice_id} name="invoice_id" placeholder={"invoice_id"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <input value={document_type} name="document_type" placeholder={"document_type"} style={{ margin: 10, width: 170, height:45, borderRadius:10}} required onChange={changeHandler}/>
            <br/>
            <Button value={"Add"} type={"submit"} placeholder={"Add"} 
                style={{height:45, borderRadius:10, marginLeft:20, marginBottom:10, 
                paddingRight:110, paddingLeft:110, backgroundColor: "#0C2D48", color:"white",
                border: "1px solid white"}}  onClick={submitHandler}>Add</Button>
            {/* <input value={"Search"} type={"submit"} placeholder={"Search"} style={{height:45, borderRadius:10, marginLeft:"8px", marginBottom:10, paddingRight:110, paddingLeft:110, backgroundColor: "#0C2D48", color:"white", borderColor:"white"}} onClick={submitHandlerSearch}/> */}
            <Button value={"Cancel"} type={"cancel"} placeholder={"Cancel"} 
                style={{height:45, borderRadius:10, marginLeft:40, marginBottom:10, 
                paddingRight:100, paddingLeft:100, backgroundColor: "#0C2D48", color:"white", 
                border: "1px solid white"}}  onClick={closeHandler}>Cancel</Button>
        {/* </form> */}
        </section>
    </>
}

export default AddComponent;