# CORS
||| ref

## link
- https://medium.com/@baphemot/understanding-cors-18ad6b478e2b

## CORS = Cross-Origin-Resource-Sharing
- sharing of resources (GET, POST, etc) across different domains
- your code (not you) wants to get and use data from another website (domain). because the other domain has a different level of security to your code, the browser disallows you to access the data that the other domain sends to you
- so CORS is a mechanism to set filters as to **who is allowed to send you data**

## Access-Control-Allow-Origin
- returned by server (the website sending your code new stuff)
- tells your code **who is allowed to access the server's reply**
- two options
	1. `*` any domain (every website in the world can access the data)
	2. `https://example.com` only example.com can access the data (or a list of domains)

## Access-Control-Allow-Credentials
- only required in the response if the server supports authentication via cookies
- `true` only, nothing else