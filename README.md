```markdown
# Fibonacci Calculator API

This is a simple RESTful API for calculating Fibonacci numbers. Given an index `n`, it returns the Fibonacci value at that index.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Examples](#examples)

## Installation

1. Clone the repository:

   ```bash
   git clone 
   cd fibonacci-calculator-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the TypeScript code:

   ```bash
   npm run build
   ```

4. Run the server:

   ```bash
   npm run start
   ```

The API will be available at `http://localhost:3000`.

## Usage

To use the API, make a GET request to the `/fibonacci/:n` endpoint, where `:n` is the index of the Fibonacci number you want to calculate.

## Endpoints

- `GET /fibonacci/:n`: Calculates the Fibonacci value at index `n`.

## Examples

- Calculate Fibonacci for index 3:

  ```bash
  curl http://localhost:3000/fibonacci/3
  ```

  Response:

  ```json
  {
    "value": 2
  }
  ```

- Calculate Fibonacci for index 6:

  ```bash
  curl http://localhost:3000/fibonacci/6
  ```

  Response:

  ```json
  {
    "value": 8
  }
  ```