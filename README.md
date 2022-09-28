
### This is a Raffle Draw Express project
### ADD CURD Feature

* Node.js
* Express.js

<br />
<br />

### CREATE TICKET
```

 URL: 127.0.0.1:4000/api/v1/tickets  --- POST request
 
```

  Body :
  ```
  {
    "username": "Mahadidev7",
    "price": 80
  }
  ```
![Create](https://i.ibb.co/k6C4ddP/Screenshot-1.png)

### READ TICKETS
```
 URL: 127.0.0.1:4000/api/v1/tickets   ---GET request

```

### TICKET READ BY ID
```
 URL: 127.0.0.1:4000/api/v1/tickets/t/${Ticket_ID}   ---GET request

```

### USER READ BY userName

```
 URL: 127.0.0.1:4000/api/v1/tickets/u/${usernmae}   ---GET request

```

### DELETE TICKET BY ID
```

 URL: 127.0.0.1:4000/api/v1/tickets/t/${Ticket_ID}   ---DELETE request

```

### DELETE USER BY username
```

 URL: 127.0.0.1:4000/api/v1/tickets/u/${usernmae}   ---DELETE request

```

### UPDATE TICKET BY ID
```

 URL: 127.0.0.1:4000/api/v1/tickets/t/${Ticket_ID}   ---put request

```
 Body :
  ```
  {
    "username": ${update_name},
    "price": ${update_price}
  }
 ```
 

### BULK ROUTE (multipul ticket buy)
```

 URL: 127.0.0.1:4000/api/v1/tickets/bulk   ---POST request

```
 Body :
  ```
  {
    "username": "Mahadidev7",
    "price": 50,
    "quantity": 3   //--- multipul ticket buy number
    
  }
 ```

### WINNER TICKET BY query
```

 URL: 127.0.0.1:4000/api/v1/tickets//draw?wc=${winner_number}   ---GET request

```







