 Use Register to new user on website  
 endpont="https://backend-gamma-vert.vercel.app/reg"
    request body contain ={
    "name":"dhaha",
    "email":"abs@gamil.com",
    "password":"123456"
}
method=POST
=========================
Login  endpont="https://backend-gamma-vert.vercel.app/log"
  request body contain={
    
    "email":"abs@gamil.com",
    "password":"12456"
}
method=POST

============================
Get all products data array
 endpont="https://backend-gamma-vert.vercel.app/pro"
 method=GET

============================
Get product by id
 endpont="https://backend-gamma-vert.vercel.app/proid/<product id>"
 method=GET

 =======================

 Get products by categeory
  endpont="https://backend-gamma-vert.vercel.app/pq?<categeory=value>"
  Example below to get all products   footwear categeory
  endpont="https://backend-gamma-vert.vercel.app/pq?categeory=footwear"
   method=GET
============================
