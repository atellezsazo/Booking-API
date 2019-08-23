# Booking-API

## Goal

The Goal is to implement an API to get confirmed bookings

## Endpoints Available

- /
- bookings [GET]

---

## Installation

```
# Step 1. Install Node JS dependencies
$ npm install
```

### Development

```
$ npm run start-dev
```

### Testing

Explanation to how to prepare the environment for automated tests for this APIs.

#### Unit Test & Acceptance test

```
npm test
```

#### And coding styles test

```
npm run lint
```

#### Test Coverage

```
npm run coverage
```

```
--------------------------------|----------|----------|----------|----------|-------------------|
File                            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------------------------|----------|----------|----------|----------|-------------------|
All files                       |    92.45 |    66.67 |      100 |    92.31 |                   |
 API/uses_cases                 |    85.71 |       50 |      100 |    85.71 |                   |
  list_bookings.js              |    85.71 |       50 |      100 |    85.71 |              8,19 |
 domain/entities                |      100 |      100 |      100 |      100 |                   |
  booking.js                    |      100 |      100 |      100 |      100 |                   |
 domain/repository              |    93.33 |       50 |      100 |    92.86 |                   |
  bookings.js                   |    93.33 |       50 |      100 |    92.86 |                18 |
 infrastructure/database        |      100 |      100 |      100 |      100 |                   |
  index.js                      |      100 |      100 |      100 |      100 |                   |
 infrastructure/database/models |       95 |       80 |      100 |       95 |                   |
  bookings.js                   |      100 |      100 |      100 |      100 |                   |
  index.js                      |    94.12 |       80 |      100 |    94.12 |                23 |
--------------------------------|----------|----------|----------|----------|-------------------|
```

## Deployment

Local deployment or external manager deployment

```
$ npm start
```

## Built With 

- [Node JS](https://nodejs.org/en/)
- [Express JS](https://expressjs.com/)


## Authors

- Abner Tellez - Initial work - [Github Profile](https://www.github.com/atellezsazo/)
