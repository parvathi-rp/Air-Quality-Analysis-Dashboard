# Air Quality Analysis Dashboard

## Project Overview

The Air Quality Analysis Dashboard is a static web application designed to present and compare air pollution levels (Air Quality Index - AQI) across major Indian cities. The project demonstrates basic data visualization techniques using HTML, CSS, and JavaScript.

---

## Features

* Displays AQI data for multiple cities
* Color-coded indicators based on AQI levels
* Interactive bar charts using Chart.js
* Responsive layout for different screen sizes
* Automatic styling of data based on AQI values

---

## Project Structure

```
AirQualityWebsite/
│
├── index.html      Main dashboard page
├── data.html       Detailed AQI data
├── compare.html    AQI comparison chart
├── style.css       Styles and layout
├── script.js       Dynamic behavior and chart logic
```

---

## How to Run the Project

1. Download or clone the repository:

   ```
   git clone https://github.com/your-username/air-quality-dashboard.git
   ```

2. Open the project folder.

3. Open `index.html` in any web browser.

---

## Working Principle

* Each city is defined in HTML using a `data-aqi` attribute.
* JavaScript reads these values and:

  * Assigns appropriate color classes (Good, Moderate, Unhealthy)
  * Generates charts dynamically using Chart.js
* CSS ensures consistent styling and layout across all pages.

---

## AQI Classification

| AQI Range | Category                |
| --------- | ----------------------- |
| 0–50      | Good                    |
| 51–100    | Moderate                |
| 101–150   | Unhealthy for Sensitive |
| 151+      | Unhealthy               |

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Chart.js

---

## Future Enhancements

* Integration with real-time AQI APIs
* Search and filtering functionality
* City-wise trend analysis
* Map-based visualization

---

## Author

Parvathi R P

---

## License

This project is open source and available for educational use.
