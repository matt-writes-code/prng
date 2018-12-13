# MONGODB
- cross-platform
- document oriented database
- high performance
- high availability
- easy scalability

## TODO: read
- https://www.tutorialspoint.com/mongodb/mongodb_overview.htm
- implement a simple MongoDB server

## Concept
- based on the concept of a **collection** and **document**
1. Database
	- a physical container or collections
	- each db has it own sets of files
	- a single MongoDB server typically has **multiple databases**
2. Collection
	- a group of MongoDB documents
	- equivalent of an RDBMS table
	- a collection exists within only a single database
	- collections **do not enforce schema**
	- typically all documents in a collection are similar or related in purpose
3. Document
	- a document is a set of key-value pairs.
	- documents have dynamic schema
		- means documents in same collection do not need to have same set of fields or structure
		- common fields in a collection's documents may hold different types of data

