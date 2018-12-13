# GRAPH + RELATIONAL DATABASES
- https://www.youtube.com/watch?v=GekQqFZm7mA

### TODO: many database tech
- mysql https://www.ntu.edu.sg/home/ehchua/programming/sql/MySQL_HowTo.html
- MongoDB

## Types of Databases
- relational : MySQL, sqlite
- graph : Neo4j
- hierarchical : xml, json
- document : MongoDB

## RDBMS vs MongoDB
<div class="container">
	<table class="table table-bordered" style="text-align:center;">
	    <tbody>
	        <tr>
	            <th style="text-align:center;width:50%;">
	                RDBMS
	            </th>
	            <th style="text-align:center;">
	                MongoDB
	            </th>
	        </tr>
	        <tr>
	            <td>
	                Database
	            </td>
	            <td>
	                Database
	            </td>
	        </tr>
	        <tr>
	            <td>
	                Table
	            </td>
	            <td>
	                Collection
	            </td>
	        </tr>
	        <tr>
	            <td>
	                Tuple/Row
	            </td>
	            <td>
	                Document
	            </td>
	        </tr>
	        <tr>
	            <td>
	                column
	            </td>
	            <td>
	                Field
	            </td>
	        </tr>
	        <tr>
	            <td>
	                Table Join
	            </td>
	            <td>
	                Embedded Documents
	            </td>
	        </tr>
	        <tr>
	            <td>
	                Primary Key
	            </td>
	            <td>
	                Primary Key (Default key _id provided by mongodb itself)
	            </td>
	        </tr>
	        <tr>
	            <th colspan="2" style="text-align:center;">
	                Database Server and Client
	            </th>
	        </tr>
	        <tr>
	            <td>
	                Mysqld/Oracle
	            </td>
	            <td>
	                mongod
	            </td>
	        </tr>
	        <tr>
	            <td>
	                mysql/sqlplus
	            </td>
	            <td>
	                mongo
	            </td>
	        </tr>
	    </tbody>
	</table>
</div>


## Relational Databases
- https://www.ntu.edu.sg/home/ehchua/programming/sql/MySQL_HowTo.html
- https://www.ntu.edu.sg/home/ehchua/programming/sql/MySQL_Beginner.html
- http://www.mysqltutorial.org/basic-mysql-tutorial.aspx
- https://www.elated.com/articles/mysql-for-absolute-beginners/
- a ledger style structure
- a **THING** is a **row** in a **table**
- sometimes you split up the **THING** into parts across different **tables**

#### relationships are made(setup) with Constraints

- the you use Foreign Key **CONSTRAINTS** to represent **relationships** between data
	- by writing foreign keys, you give a row in some table an equal (or whatever) relationship to another row in the table (or another table)
		- e.g. if you put a value in this column over here in this table and there isn't a corresponding value in this table over here, then it won't work.
		- e.g. you may not be able to delete something here (in this row) because something is attached to it.
- is rigid, limits the kinds of things you are allowed to put into the database
- can get complex (and rigid) when representing relationships
	- relationships in the real world
		- e.g. multilevel joins are terribly slow
	- ORMs (Object Relational Mapping) is used to create complex queries
- RDBMS are designed to answer **known questions**.
- they have to be built with **all known questions** in mind so that they can be designed into the ORM

## Graph Databases
### \[property\] graphs
**do this first**
	- graphql + flask
	- https://www.youtube.com/watch?v=p7VujaALaGQ
- all graphql tutorials https://hackr.io/tutorials/learn-graphql
- https://egghead.io/courses/build-a-graphql-server
- https://neo4j.com/blog/neo4j-video-tutorials/
- https://www.howtographql.com/
- https://neo4j.com/developer/get-started/
- https://neo4j.com/blog/7-ways-data-is-graph/
- a **THING** is a **node** or **vertex**
- **nodes** have **PROPERTIES**
	- usually key-value pairs {Keys: Values}
- **nodes** also have **LABELS** to tell you what type of thing it is
- example of a node:

	n : Person
	id : 1234
	first_name : "Ed"
	last_name : "Finkler"
	
	where

	n is the node label
	other stuff are properties
- **nodes** are connected together by **RELATIONSHIPS** or **EDGES**
- **RELATIONSHIPS** have a **type** and a **direction** and can have **properties**
![node example](./images/node-example.png)
- __above__: setup of two nodes, both of them of type **person**
	- they both have similar properties, **but they don't have to**
	- there is a **directional** relationship between them (CHILD_OF)

#### in summary it's just **DOTS/NODES** and **LINES/EDGES** all the way down

- it more powerful than RDBMS specifically because **the meaning is in the relationships**
	- direct relationships (but that's not hard to do with RDBMS)
	- indirect relationships (which are harder to traverse with relational databases)
	![indirect relationships](./images/indirect-relationships.png)
<p align="center">
    usually slow and non-performant on RDBMS
</p>
- questions you didn't expect (when designing the database, which is almost always)
- you can add more relationships as needed and still be performant

## Document Databases
### MongoDB
- WIP

## links
- https://www.quora.com/Neo4j-Who-uses-a-graph-database-in-production
- https://www.quora.com/Why-arent-graph-databases-more-popular
- https://neo4j.com/blog/neo4j-graph-side-project/
