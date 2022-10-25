Feature: NewAccount

    @ATS
    Scenario Outline: <TestId>: Register on the website
        Given Register to Automation Test Store
        # Then Create Account by enter all fields <>
        # Then Validate on the landing page

        Examples:
            | TestId    | FirstName | LastName | Email | Address1 | City |
            | ATS_TC001 | Peter | Chris | peter.chris@gmail.com | Netherlands | 