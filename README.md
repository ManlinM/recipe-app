# What I learned
## Part 1
- created components using a folder structure nested inside components folder
    -used commands:ng gc components/header
    -which specify the path for the components that will be generated

- utilized the components by adding their selectors to the app components

- All components are styled using bootstraps

- created ingdients model that has the shared features for multiple          components

- created recipe model which encompasses the features for recipe-related components

- applied all the basics knowlege learned for the course
    - data binding
        - property and event binding
    - directives
        - built in directives: ngFor, 
    - string interpolation

## Part 2
- implemented component interaction techniques using the @Output and @Input decorators
    ### Task 1
    - utilized @Output and the ngIf directive to make the navigation bar interactive
        - To achieve this:
            - Created an EventEmitter associated with @Output.
            - In the app component, the header listens to the event created in the event component
            - Data is then passed from the header component to the app component and stored in the property insid app component
            - The app component triggers ngIf, which uses the data stored to determine whether to display the recipe or shopping list
    ### Task 2
    - when click a recipe, the details of the specific recipe will show on the side
        - To achieve this:
            - The 'recipe-item' component implements an event that is associated with its parent 'recipe-list' component
            - The 'recipe-list' component listens for the event emitted by its child component and uses it to implement an event that is associated with its parent 'recipe' component
            - The 'recipe' component listens for the event and stores the emitted data, passing it to its child component,'recipe-detail'
            - used ngIf directive to determine if a recipe is selected, if no recipe selected, a message will be displayed
    ### Task 3
    - Enable user to add data to shopping list by clicking 'Add' button
     - To achieve this:
            - added a click event to trigger 'onAddItem()'
            - used @ViewChild approach
                - created local references for the input fields for name and amount
                - used @ViewChild decorator to get the value from the local references
            - utilized @Output to pass input value to the parent 'shopping-list' component
                - implements an event which emitt data, obtained from input fields, to the parent component
            - The 'shopping-list' component listens for the event and stores the emitted data
            