### Base URL: https://african-marketplace-03.herokuapp.com

#### Authentication:
| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [POST]   | /api/auth/register | Requires a username and password. Registers a new user.                                                |
| [POST]   | /api/auth/login    | Requires a username and password. Logs the user in and returns token.                                                    |

#### Users: 
| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [GET]    | /api/users         | Returns an array filled with user objects.                                                             |
| [GET]    | /api/users/:id     | Returns the user object with the specified `user_id`.                                                  |
| [DELETE] | /api/users/:id     | Removes the user with the specified `user_id`.                                                         |

### Table Entities

Users

| attribute  | data type | required                |
|------------|-----------|-------------------------|
| user_id         | integer   | auto-assigns            |
| username   | string    | Yes, and must be unique |
| password   | string    | Yes                     |

Items Data

| attribute           | data type | required     |
|---------------------|-----------|--------------|
| product_id          | integer   | auto-assigns |
| product_name        | string    | Yes          |
| product_price       | float     | Yes          |
| product_description | string    | No           |
| location            | string    | Yes          |
| user_id             | integer, FK| Yes         |
