```markdown
# Persian Date Utilities

A lightweight and efficient JavaScript/TypeScript library for working with the Persian (Shamsi) calendar. It provides features to convert, format, and manipulate Persian dates seamlessly using pure JavaScript.

## Features

- Convert Persian dates to Gregorian and vice versa.
- Format Persian dates in various styles (e.g., `YYYY/MM/DD`, `DD-MM-YYYY`, `Weekday, DD Month YYYY`).
- Calculate Persian week numbers (1–52).
- Handle leap years in the Persian calendar.
- Convert Persian digits to Latin digits.

## Installation

### Using npm

```bash
npm install persian-date-utils
```

### Using yarn

```bash
yarn add persian-date-utils
```

### Using pnpm

```bash
pnpm add persian-date-utils
```

## Usage

### Import the Library

```typescript
import { 
    getShamsiDateYMD, 
    getShamsiDateFull, 
    convertToGregorianDate, 
    isShamsiLeapYear, 
    getShamsiWeek 
} from 'persian-date-utils';
```

### Examples

#### Get the Current Persian Date in `YYYY/MM/DD` Format

```typescript
console.log(getShamsiDateYMD()); 
// Output: "1402/10/28" (example)
```

#### Get the Full Persian Date with Weekday

```typescript
console.log(getShamsiDateFull());
// Output: "شنبه، 28 دی 1402" (example)
```

#### Convert a Persian Date to Gregorian

```typescript
const persianDate = "1402/10/28";
console.log(convertToGregorianDate(persianDate));
// Output: "2024-01-17" (example)
```

#### Check if a Year is a Leap Year in the Persian Calendar

```typescript
console.log(isShamsiLeapYear(1402));
// Output: false
```

#### Get the Current Persian Week Number

```typescript
console.log(getShamsiWeek());
// Output: "42" (example, depending on the date)
```

## API Documentation

### `getShamsiDateYMD()`
Returns the current Persian date in `YYYY/MM/DD` format.

### `getShamsiDateFull()`
Returns the full Persian date with the weekday in `Weekday, DD Month YYYY` format.

### `convertToGregorianDate(persianDate: string)`
Converts a Persian date in `YYYY/MM/DD` format to a Gregorian date.

- **Parameter**: `persianDate` (string) – The Persian date to convert.
- **Returns**: A string representing the Gregorian date in `YYYY-MM-DD` format.

### `isShamsiLeapYear(year: number)`
Checks if a given Persian year is a leap year.

- **Parameter**: `year` (number) – The Persian year to check.
- **Returns**: `true` if the year is a leap year, otherwise `false`.

### `getShamsiWeek()`
Returns the current week number in the Persian calendar.

## Contributing

Contributions are welcome! If you'd like to add new features, improve the code, or fix bugs:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

This library leverages the following:
- [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) for Persian calendar support.
- Pure JavaScript methods for all computations and conversions.

---

```

### What’s Included
- **Introduction**: Describes the purpose of the library.
- **Features**: Highlights the key functionalities.
- **Installation**: Explains how to add the library to a project.
- **Usage Examples**: Demonstrates common use cases.
- **API Documentation**: Provides details for each exported function.
- **Contributing**: Encourages community involvement.
- **License**: Specifies licensing details.

This `README.md` is ready to be included in your GitHub repository and provides a comprehensive overview of your library. Let me know if you'd like to tweak any part!