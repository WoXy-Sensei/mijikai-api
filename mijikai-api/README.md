# Mijikai Api

This simple application shortens a given long URL, providing you with a short link. Redirects are established between the shortened link and the provided URL.

## Usage

### API Endpoint

`POST /api/v1/links`

### Request Format

```json
{
  "url": "https://bardiaramez.net"
}
```

### Successfully Shortened Link Response

```json
{
  "shortUrl": "URL"
}
```

### Error Responses

- 400 Bad Request: Invalid URL format.
- 500 Internal Server Error: An error occurred during the shortening process.


## Installation

1 - Clone the project to your local machine.
2 - Run the npm install command in the terminal to install the required dependencies.
3 - Use the npm start command to start the application.
