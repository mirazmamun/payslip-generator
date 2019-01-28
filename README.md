# Demo invoice generator app
This will run a web based payslip generator. We have provided a sample CSV in `data/sample.csv` file for the type of data. We have a demo app running at this URL, https://fervent-banach-7266db.netlify.com, Please note, this URL might change at any time.

**NOTE: until now, the front end is not fully tied up with business logic, this is going to be done soon**

## Project setup
This project is based on `VueJS` for creating re-usable components and uses `Babel` to transpile to ES5 or later for browser compatibility. You must have `nodejs > 8.0.0` and `npm > 5.0.0` for running the dev version locally. Once done do the following to install deps.
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```
The previous command will run all the tests under tests folder using `jest`. To run a specific test run:

```
./node_modules/.bin/jest ./tests/unit/lib/test-PaySlip.spec.js
```

### Lints and fixes files
```
npm run lint
```
