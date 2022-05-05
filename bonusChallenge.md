## Bonus Core Requirements
- Write an example(/pseudo) query for getting all employees for a business with their custom field values.
- Model an example request for users to users to specify their custom field values on a `POST /employees/:employee_id` request.


## Bonus Materials

If you get this far with time to spare, congratulations! It is absolutely not expected or required to get to this point. If you'd like to go further feel free to pick **one** of the below: 

### Expanded Functionality

- Write an example API Request and Response to create a new custom field. (I.e. If Dwight logged in to create a "Demerits" field).
- Some businesses like to specify a custom field on a per-trip basis instead of a per-employee basis (for example, each employee may have a _Department_ or _Employee ID_). Allow custom fields to be associated with either employees or trips.
- Modify your custom field schema to support multi-select multiple choice. (For example, a user should be able to specify multiple _Cost Centers_ to a single employee.)

### Performance Concerns

- Consider the performance of your solution when the employees database begins to contain millions of rows. Ensure that your solution scales elegantly to prevent increased latency on the employees endpoint with time.
- The `GET /employees` request is going to get quite large as businesses continue to use this project. Add a parameter to this request that allows the user to request specific date ranges, as well as request the report year-to-date, month-to-date, and week-to-date.


### API Validation

- Handle invalid custom field values (for example, attempting to set a plain text value to a custom field which accepts a multiple choice value.)
- There's no security, so anyone can use your new app! For example, one business can currently edit or delete another business' data (BAD!). Describe (with pseudo-code) how you would validate business requests.