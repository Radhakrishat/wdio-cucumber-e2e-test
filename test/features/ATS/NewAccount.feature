Feature: NewAccount

    @ATS
    Scenario Outline: <TestId>: Register on the website
        Given Register to Automation Test Store
        Then Create Account by enter all fields
            | FirstName | LastName | Email                  | Address1 | City    | Country | Region | ZipCode | LoginName   | Password  | Confrim   |
            | Peter4    | Chris4   | Peter.Chris4@gmail.com | street 1 | Utrecht | 150     | 2338   | 34567   | PeterChris5 | Password1 | Password1 |
        Then Validate on the landing screen with correct name
            | FirstName |
            | Peter4    |



        Examples:
            | TestId    |
            | ATS_TC001 |