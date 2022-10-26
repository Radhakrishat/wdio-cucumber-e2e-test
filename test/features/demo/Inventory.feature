Feature: Inventory

    @demo @smoke
    Scenario Outline: <TestId>: Demo Inventory
        Given Login to inventory web app
        Then Inventory page should list <NumberOfProducts>
        Then Validate all products have valid price

        Examples:
            | TestId    | NumberOfProducts |
            | INTV_TC001 | 6 |