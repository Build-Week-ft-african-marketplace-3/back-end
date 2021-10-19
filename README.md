Base URL: https://african-marketplace-03.herokuapp.com/

#### Authentication:
| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [POST]   | /api/auth/register | Requires a username, password, name, and email. Registers a new user.                                  |
| [POST]   | /api/auth/login    | Requires a username and password. Logs the user in.                                                    |

#### Users: 
| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [GET]    | /api/users/        | Returns an array filled with user objects.                                                             |
| [GET]    | /api/users/:id     | Returns the user object with the specified `user_id`.                                                       |
| [DELETE] | /api/users/:id     | Removes the user with the specified `user_id` and returns the deleted user.                                 |
| [PUT]    | /api/users/:id

### Table Entities

User Data 

| attribute  | data type | required                |
|------------|-----------|-------------------------|
| id         | integer   | auto-assigns            |
| username   | string    | Yes, and must be unique |
| password   | string    | Yes                     |

Item Data

| attribute   | data type | required     |
|-------------|-----------|--------------|
| id          | integer   | auto-assigns |
| name        | string    | Yes          |
| price       | float     | Yes          |
| description | string    | No           |
| location    | string    | Yes          |
| user_id     | integer, FK| Yes        |
