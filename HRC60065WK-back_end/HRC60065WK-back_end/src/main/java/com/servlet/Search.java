package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import com.google.gson.Gson;
import com.pojo.Winter_internship;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Fetch
 */
@WebServlet("/Search")
public class Search extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Search() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		HashMap<Object, Object> Response = new HashMap<Object, Object>();
		ArrayList<Winter_internship> intern = new ArrayList<Winter_internship>();
			try {
				String cust_number=request.getParameter("cust_number");
				String doc_id=request.getParameter("doc_id");
				String invoice_id=request.getParameter("invoice_id");
				String buisness_year=request.getParameter("buisness_year");
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
				PreparedStatement ps = connection.prepareStatement("select * from winter_internship WHERE cust_number LIKE '%"+cust_number+"%' AND doc_id LIKE '%"+doc_id+"%' AND invoice_id LIKE '%"+invoice_id+"%' AND buisness_year LIKE '%"+buisness_year+"%' ");
				ResultSet rs = ps.executeQuery();
				while(rs.next()) {
					Winter_internship company = new Winter_internship(rs.getInt("sl_no"),rs.getString("business_code"),rs.getInt("cust_number"),rs.getString("clear_date"),
																	rs.getString("buisness_year"),rs.getString("doc_id"),rs.getString("posting_date"),rs.getString("document_create_date"),
																	rs.getString("document_create_date1"),rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),
																	rs.getInt("posting_id"),rs.getString("area_business"),rs.getDouble("total_open_amount"),rs.getString("baseline_create_date"),
																	rs.getString("cust_payment_terms"),rs.getInt("invoice_id"),rs.getInt("isOpen"),rs.getString("aging_bucket"),rs.getInt("is_deleted"));
						intern.add(company);	
				}
				Response.put("companies", intern);
			}catch(Exception e) {
				e.printStackTrace();
			}
			Gson gson = new Gson();
			String jsonResponse = gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin", "*");
			response.setHeader("Access-Control-Allow-Methods", "GET");
			response.getWriter().append(jsonResponse);
			
	}
	
}