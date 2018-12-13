# OAuth 2.0
||| ongoing

## things required to use OAuth 2.0
- consumer key
	- client_id":"969449945528-776hnh3m9lssdp5885heqkdtrc52ucmn.apps.googleusercontent.com"
- consumer secret
	- client_secret":"8gAbKYWvoj_1cD3SlRkNd2Zg"

## TODO
- implement OAuth2.0 into todo app https://github.com/lepture/flask-oauthlib
- https://requests-oauthlib.readthedocs.io/en/latest/examples/real_world_example.html#real-example

## workflow
when you want to access your friend/client's data through ***WEBSITE A***'s API with Oauth2, you need to get them to give you permission (they will login themselves and tell WEBSITE A to give you permission), then you can only get the data that they allow you to have.
- it's exactly what is used on github / google when you have to jump to their page to login to ***give access to someone else's website***

## why go through all the trouble
Oauth Is based around the idea of **not sharing usernames and passwords when sharing data between apps/websites**. Instead of needing the user to key in site A’s username and password into site B to let site B get stuff from site A (dangerous because site B now has site A’s password), site B sends the user to site A to type the user/pw and then allow the user to decide how much permission to give site B, before sending the user back to site B.
- Prevent password sharing
- More adjustable permissions (types of data allowed to access, time allowed to access)
- https://hueniverse.com/beginners-guide-to-oauth-part-ii-protocol-workflow-200dbcfac627

## python's OAuth
- http://oauthlib.readthedocs.io/en/latest/faq.html