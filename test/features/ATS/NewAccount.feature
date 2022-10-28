Feature: NewAccount

    @ATS
    Scenario Outline: <TestId>: Register on the website
        Given Register to Automation Test Store
        Then Create Account by enter all fields
            | FirstName | LastName | Email                  | Address1 | City    | Country | Region | ZipCode | LoginName   | Password  | Confrim   |
            | Peter9    | Chris9   | Peter.Chris9@gmail.com | street 1 | Utrecht | 150     | 2338   | 34567   | PeterChris10 | Password1 | Password1 |
        Then Validate on the landing screen with correct name
            | FirstName |
            | Peter9    |


        Examples:
            | TestId    |
            | ATS_TC001 |