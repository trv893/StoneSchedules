# StoneSchedules

StoneSchedules is a mobile application built using React Native Expo that facilitates the management of employee schedules for a restaurant. The application allows employees to view their schedules, release shifts for pickup by other employees, pick up released shifts, and request specific shifts from other employees.

## Features

- View weekly schedules in week increments from the current day
- Release shifts for pickup by other employees
- Pick up released shifts
- Request specific shifts from other employees
- Auth0 integration for signup and Gmail integration
- Schedule upload feature to upload schedules into the database
- Generation of the schedule for managers taking into account certain criteria including availability and preference and allowing the manager to make final edits before publishing the schedule
- Google calendar integration for a user’s schedule which automatically loads events into their google calendar about their schedule
- Notifications
- Language options
- Approval process for managers to accept or deny shift transfers
- Highlighted shifts feature which allows managers to designate shifts that must be picked up before any shift transfers are approved

## Installation

1. Clone the repository: `git clone https://github.com/trv893/StoneSchedules.git`
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:

    ```
    DB_HOST=<database-host>
    DB_USER=<database-username>
    DB_PASSWORD=<database-password>
    DB_NAME=<database-name>
    ```

4. Start the application by running `npm start`.

Note: The backend of the project is not located in this repository. The backend is written in C#. Example data being returned from the database can be found in ./assets/shiftDataExample.json.

## Usage

StoneSchedules allows employees to:

- View their assigned shifts, including the date, time, and section.
- Release shifts they don't want to work, making them available for other employees to pick up.
- Request to pick up shifts from other employees, either by sending a pickup request or by picking up a released shift.

To release a shift:

1. Click on the shift you want to release.
2. Click the "Release Shift" button.
3. Confirm that you want to release the shift.

To pick up a released shift:

1. Click on the released shift you want to pick up.
2. Click the "Pick Up Shift" button.
3. Confirm that you want to pick up the shift.

To request to pick up a shift:

1. Click on the employee whose shift you want to pick up.
2. Click the "Request to Pick Up Shift" button.
3. Wait for the owner of the shift to accept or deny your request.

### Schedule View

- The home screen displays the current month and year.
- A week selector component allows users to select the weeks displayed in the weekly schedule component.
- The weekly schedule component displays details about the user's schedule for the week selected by the week selector.

### Shift Release

- Employees can release shifts they are assigned and do not want to work. This action tells other employees that the shift is available for "pick up".
- An employee retains the released shift until another employee picks up that shift.

### Shift Pick Up

- Employees can pick up released shifts.

### Shift Request

- Employees can request to pick up a specific shift from another employee, regardless of whether that shift has been released or not.
- The request a pick up component will render a list of all employees working on that date at that shift time and what section each is scheduled for and a TouchableOpacity that will send a pick-up request to that user.

## Contributing

We welcome contributions to StoneSchedules! To contribute, please follow these steps:

1. Fork this repository to your own GitHub account.
2. Create a new branch with your changes: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
