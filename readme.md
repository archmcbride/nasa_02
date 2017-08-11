NASA API Part II

We'll need to upgrade our NASA API assignments to improve the security and flexibility of the application. 
Redesign your application such that:
    - Requests to the NASA API are made from your server with the `request` module, instead of from the front-end using jQuery. 
    - Your API key should not be visible in any client-side code. It should only appear in the server code, where it is not visible to users. 
    - When the user loads the page, it should not immediately display results from the NASA API for a specific day. Instead, the user should have to submit a form that lets them specify which day they want asteroid information about. You can send this extra information to the server using either a query string, or a request body. 