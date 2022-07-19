import axios from "axios";
export const getData = async () => {
    let response = await axios.get("http://localhost:8080/HRC/Fetch");
    console.log(response.data.actors); 
    return response.data.actors;
}

export const searchData = ({search}) =>{
    let data = "cust_number="+search.cust_number + "&buisness_year="+search.buisness_year + "&doc_id="+search.doc_id + "&invoice_id="+search.invoice_id;
    let response = axios.get("http://localhost:8080/HRC/search?"+ data);
    return response.data;
}

export const AddData = async ({business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,
    invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id}) =>{
        let data = "business_code="+business_code + "&cust_number="+cust_number + "&clear_date="+clear_date + "&buisness_year="+buisness_year + "&doc_id="+doc_id + "&posting_date=" +posting_date + "&document_create_date="+document_create_date + "&due_in_date="+due_in_date +
        "&invoice_currency="+invoice_currency + "&document_type="+document_type + "&posting_id="+posting_id + "&total_open_amount="+total_open_amount + "&baseline_create_date="+baseline_create_date + "&cust_payment_terms="+cust_payment_terms + "&invoice_id="+invoice_id;
        let response = await axios.get("http://localhost:8080/HRC/add?"+ data);
        return response.data;
    }