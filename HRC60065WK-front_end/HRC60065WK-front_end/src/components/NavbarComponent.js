import React from "react";
import { Button, TextField, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RefreshRounded } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(232, 241, 250)",
      borderRadius: 15,
    }
  }
}));

const NavbarComponent = (props) => {
  const classes=useStyles();
  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin:20, height:"50px"}}>
      <ButtonGroup>
      <Button
        onClick={props.predictClick}
        variant="outlined"
        style={{ border:"1px solid white", color: "white", paddingRight: 60, paddingLeft: 60 }}>Predict</Button>
      
      <Button
        onClick={props.predictClick}
        variant="outlined"
        style={{ border: "1px solid white",color: "white",paddingRight: 60, paddingLeft: 60 }}>Analytics View</Button>
      
      <Button
        onClick={props.searchClick}
        variant="outlined"
        style={{ border: "1px solid white", color: "white",paddingRight: 60, paddingLeft: 60 }}>Advance Search</Button>

      </ButtonGroup>

      <button style={{marginLeft: 10, border: "1px solid white",variant:"outlined", backgroundColor: "#0C2D48" ,color: "white", marginRight:40, borderRadius:5}}  onClick={() => window.location.reload(true)}><RefreshRounded /></button>
      
      
      <div style={{ marginLeft: 5, paddingRight: 350, width: 50}}>
        <TextField
          style={{width: 350, textFillColor: "white"}}
          label="Search Customer ID..."
          variant="filled"
          className={classes.root}
          multiline={true}
          size="medium"
        />
      </div>

      <ButtonGroup>
      <Button
        onClick={props.addClick}
        variant="outlined"
        style={{ border: "1px solid white", color: "white", paddingRight: 70, paddingLeft: 70}}>Add</Button>
      <Button
        onClick={props.editClick}
        disabled={props.selected.length === 1 ? false : true}
        variant="outlined"
        style={{ border: "1px solid white", color: "white", paddingRight: 70, paddingLeft: 70}}>Edit</Button>
      <Button
        onClick={props.deleteClick}
        variant="outlined"
        style={{ border: "1px solid white", color: "white", paddingRight: 70, paddingLeft: 70}}>Delete</Button>
      </ButtonGroup>
    </div>
  );
};

export default NavbarComponent;