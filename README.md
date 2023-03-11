# StoneSchedules

StoneSchedules is a React Native Expo application designed to help restaurant employees manage and view their schedules. With StoneSchedules, users can view their schedules for a given week, release shifts they cannot work, and request to pick up shifts that other employees have released or to pick up a specific shift from another employee.

Table of Contents
[Installation](#installation)
[Usage](#usage)
[Features](#features)
[Contributing](#contributing)
[License](#license)
Installation
To run StoneSchedules locally, you will need to have Node.js installed on your machine. Once Node.js is installed, clone the repository to your machine. Then navigate to the project's root directory and run `npm install` to install all necessary dependencies.

Usage
To launch StoneSchedules, navigate to the project's root directory and run `npm start`. This will launch the Expo Developer Tools in your browser. You can then run the app on your local device using the Expo Client app or on an emulator.

Once the app is running, users can view their schedules for a given week using the week selector component. Users can then release shifts they cannot work by tapping on the shift they want to release and selecting "Release Shift". Other employees can then request to pick up released shifts or to pick up a specific shift from another employee.

Features
View schedules for a given week
The main feature of StoneSchedules is the ability for users to view their schedules for a given week. The week selector component allows users to select the week they want to view, and the weekly schedule component displays their shifts for that week.

Release shifts that cannot be worked
If a user is unable to work a shift, they can release the shift for other employees to pick up. To release a shift, the user can tap on the shift they want to release and select "Release Shift".

Request to pick up released shifts or specific shifts from other employees
If a shift has been released, other employees can request to pick up the shift. To request a shift, the user can tap on the released shift and select "Request Shift". Users can also request to pick up a specific shift from another employee. To do so, the user can use the request a pick up component to send a pick up request to the employee who is scheduled for the shift.

Auth0 integration for signup and Gmail integration (not yet implemented)
In the future, StoneSchedules will integrate with Auth0 for signup and Gmail for email notifications.

Schedule upload feature to upload schedules into the database (not yet implemented)
In the future, StoneSchedules will include a schedule upload feature that allows managers to upload schedules into the database.

Generation of the schedule for the managers which will take into account certain criteria including availability and preference and allow the manager to make final edits before publishing the schedule (not yet implemented)
In the future, StoneSchedules will include a feature for managers to generate the schedule based on employee availability and preference. The manager will be able to make final edits before publishing the schedule.

Google calendar integration for a user’s schedule which automatically loads events into their Google calendar about their schedule (not yet implemented)
In the future, StoneSchedules will integrate with Google calendar to automatically load a user's schedule into their Google calendar.

Notifications (not yet implemented)
In the future, StoneSchedules will include a notification feature to alert users about their shifts and shift requests.

Language options (not yet implemented)
In the future, StoneSchedules will include language options to support users who speak languages other than English.
Contributing
We welcome contributions from the community. To contribute to StoneSchedules, follow these steps:

Fork the repository and clone it to your machine.
Create a new branch for your feature or bug fix.
Make your changes and test them thoroughly.
Submit a pull request.
License
StoneSchedules is licensed under the MIT License. Feel free to use, modify, and distribute the code as you see fit. We only ask that you give credit to the original authors.
