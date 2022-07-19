import * as React from "react";
import axios from "axios";
import Button from '@mui/material/Button';


function DeleteComponent({selected, closeHandlerDelete}){

    const handleDelete = async () => {
        let data = "sl_no="+selected.join(',');
        let response = await axios.get("http://localhost:8080/HRC/delete?"+ data);
        if(response.deleted === true){
            console.log('success');
        }
    };


    return<>
        <section style={{backgroundColor: "#0C2D48"}}>
        <h2 style={{color:"white", marginLeft:"30px"}}>DELETE</h2>
        <form>
            <p style={{color:"white", marginLeft:"30px"}}>Are you sure you want to delete these record(s)?</p>
            <br/>
            <Button  type={"submit"} value={"Submit"} style={{height:"40px", borderRadius:"5px", marginLeft:"8px", marginBottom:"20px",paddingRight:"100px", paddingLeft:"100px", backgroundColor: "#0C2D48", color:"white", border: "2px ridge white"}} onClick={handleDelete}>DELETE</Button>
            <Button  type={"cancel"} value={"Cancel"} style={{height:"40px", borderRadius:"5px", marginLeft:"8px", marginRight:"8px",marginBottom:"20px",paddingRight:"100px", paddingLeft:"100px", backgroundColor: "#0C2D48", color:"white", border: "2px ridge white"}} onClick={closeHandlerDelete}>CANCEL</Button>
        </form>
        </section>


    </>
}

export default DeleteComponent;