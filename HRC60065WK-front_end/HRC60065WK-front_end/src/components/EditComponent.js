import * as React from "react";
import axios from "axios";
import Button from '@mui/material/Button';

function EditComponent({currData,closeHandlerEdit}){
    let emptyVal = {
        invoice_currency: '',
        cust_payment_terms: '',
    };
    const [editData, setEditData] = React.useState(emptyVal);

    React.useEffect(()=>{
        setEditData(currData);
    },[currData]);

    const handleEdit = async () => {
        let data = "sl_no="+editData.sl_no + "&invoice_currency="+editData.invoice_currency + "&cust_payment_terms="+editData.cust_payment_terms;
        let response = await axios.get("http://localhost:8080/HRC/edit?"+ data);
        if(response.updated === true){
            console.log('success');
        }
    };

    return<>
        <section style={{backgroundColor: "#0C2D48"}}>
        <h2 style={{color:"white", marginLeft:"30px"}}>EDIT</h2>
        {/* <form> */}
        <input name="invoice_currency" value={editData.invoice_currency} 
                onChange={e=> {
                    setEditData({
                        ...editData,
                        invoice_currency: e.target.value,
                    })
                }}  style={{margin: "20px", width: 240, height:"50px", borderRadius:"5px"}}/>
            <input name="cust_payment_terms"value={editData.cust_payment_terms} 
                onChange={e=> {
                    setEditData({
                        ...editData,
                        cust_payment_terms: e.target.value,
                    })
                }}  style={{ margin: "20px", width: 240, height:"50px", borderRadius:"5px"}}/>
            <br/>
            <Button  type={"submit"} value={"Submit"} style={{height:"40px", borderRadius:"5px", marginLeft:"12px", marginBottom:"20px",paddingRight:"110px", paddingLeft:"110px", backgroundColor: "#0C2D48", color:"white", border: "2px ridge white"}} onClick={handleEdit}>EDIT</Button>
            <Button  type={"cancel"} value={"Cancel"} style={{height:"40px", borderRadius:"5px", marginLeft:"8px", marginBottom:"20px",paddingRight:"110px", paddingLeft:"110px", backgroundColor: "#0C2D48", color:"white", border: "2px ridge white"}} onClick={closeHandlerEdit}>CANCEL</Button>
        </section>
    </>
}

export default EditComponent;