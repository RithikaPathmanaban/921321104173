import React from 'react'
import { useEffect } from "react";
function SingleProduct() {
    useEffect(() => {
        HttpRequest()
   
      }, []);
    async function HttpRequest(){
        await fetch("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000", { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTYzNTM5LCJpYXQiOjE3MTUxNjMyMzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUxYmQ1MmMxLTY3NWQtNDEwNy04OGUyLTU1YWRiMmQyMWE4MCIsInN1YiI6InJpdGhpa2FwMjFjc0Bwc25hY2V0LmVkdS5pbiJ9LCJjb21wYW55TmFtZSI6IkFsYmF0cm9zcyIsImNsaWVudElEIjoiNTFiZDUyYzEtNjc1ZC00MTA3LTg4ZTItNTVhZGIyZDIxYTgwIiwiY2xpZW50U2VjcmV0IjoidFVKcE5FbE5QZlRxSXNXRCIsIm93bmVyTmFtZSI6IlJpdGhpa2EiLCJvd25lckVtYWlsIjoicml0aGlrYXAyMWNzQHBzbmFjZXQuZWR1LmluIiwicm9sbE5vIjoiOTIxMzIxMTA0MTczIn0.XxR9_HqkqerbXb-P_lcjFiGKNug10AGJWCO-RnwR9a0' ,
            "Access-Control-Allow-Origin" : '*'
  })
          .then((data) => data.json())
          .then(data => {console.log(data)
            });
    
    }
      return (
    <div>SingleProduct</div>
  )
}


export default SingleProduct