## Pana Backend Code Challenge

### The Challenge

Using the included API server and your code wizardry, the goal is to implement functionality which allows custom data to be associated with a company's travel transactions that are stored in the database.

This custom data will be made up of "custom fields". Teams should be able to specify a name for each field (i.e. during account configration) and specify values for each field when making a transaction. For example, a team may use a custom field to store the associated _Employee ID_, _Cost Center_, or _Purpose_ of the transaction.

### Requirements

#### Core Requirements

- Implement a method to store custom data on a transaction.
  - Each team needs to be able to assign a custom name to each of their fields, as well as indicate how many custom fields they would like to use.
  - Custom fields should have values that are either: (a) plain text or (b) single-select multiple choice. Teams should be able to indicate what type of value each of their fields should accept. (It is out of scope of this project to design a front-end UI for the selection of these options)
- Add endpoints for the creation, editing, viewing, and deletion of a team's custom field schema
- Enable users to specify their custom field values on a `POST /transactions` request.
- Return the associated values of the custom fields on the `GET /transactions` request.

#### Current State
![Data Model](images/data_model.png) ![Sample Data](images/sample_data.png)

#### Extra Credit

- Handle invalid custom field values (for example, attempting to set a plain text value to a custom field which accepts a multiple choice value.)
- Some teams like to specify a custom field on a per-employee basis instead of a per-transaction basis (for example, each employee may have a _Department_ or _Employee ID_). Add an employee model, and allow custom fields to be associated with either employees or transactions.
  - On `GET /transactions` request, return the value of the custom fields associated with the employee who made the purchase (as well as the values of custom fields associated directly with the transaction).
- Modify your custom field schema to support multi-select multiple choice. (For example, a user should be able to specify multiple _Cost Centers_ to a single transaction.)
- Add an endpoint for updating a transaction with new custom data.
- Consider the performance of your solution when the transactions database begins to contain millions of rows. Ensure that your solution scales elegantly to prevent increased latency on the transactions endpoint with time.
- There's no security, so anyone can use your new app! For example, one team can currently edit or delete another team's data (BAD!). Try to implement some sort of authentication or authorization.
- The `GET /transactions` request is going to get quite large as teams continue to use this project. Add a paremeter to this request that allows the user to request specific date ranges, as well as request the report year-to-date, month-to-date, and week-to-date.

### Installation

- `$ createdb pana_backend_challenge`
- `$ cp .env.sample .env`
- `$ npm install`
- `$ npm run db:init`
- `$ npm start`

### Submission

When you're finished, zip the directory (excluding the node_modules) and email it to devon@pana.com. Please do not create a public repository with your solution, as we'd like to discourage others from using your code. 😁

With your submission, please include the approximate number of hours you spent working on this. Additionally, if you have any feedback for us about how the process went, we'd love to hear it! We're always looking to imrpove.

### Find a bug?

Bugs are a great way to earn bonus points! You can either create a Pull Request with a suggested fix or email engineers@pana.com with the bug, a suggested fix, and the subject line `Code Challenge Bug Report`.
