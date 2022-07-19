package com.servlet;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
/**
 * Servlet implementation class EditInvoice
 */
@WebServlet("/editData")
public class editData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public editData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			HashMap<Object,Object> Response = new HashMap<Object,Object>();
		

			String sl_no=request.getParameter("sl_no");
			String invoice_currency=request.getParameter("invoice_currency");
			String cust_payment_terms=request.getParameter("cust_payment_terms");
			
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","root");
			String sql = "UPDATE winter_internship set invoice_currency=?,cust_payment_terms=?  WHERE sl_no=?";//			String sql = "INSERT INTO actor (first_name,last_name) VALUES (?,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			
			ps.setString(1,invoice_currency);
			ps.setString(2,cust_payment_terms);
			ps.setString(3,sl_no);

			
			if(ps.executeUpdate() >0) {
				Response.put("updated", true);
			}else {
				Response.put("updated", false);
			}
			Gson gson = new Gson();
			String JSONresponse = gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.setHeader("Access-Control-Allow-Methods", "GET");
			response.getWriter().append(JSONresponse);
		}catch (Exception e) {
			e.printStackTrace();
		}

	}
}