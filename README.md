##### KANBAN DASHBOARD EXERCISE

TO DO:

1. Fork it.
2. Clone the project.
3. Create `config/master.key` file and put the key (your should get if from manager)
4. Create `.env` file and put
    ```
    LOCAL_DB_USR=<MYSQL USER>
    LOCAL_DB_PWD=<MYSQL PASSWORD>
5. Up the project. Execute rails db:create db:migrate db:seed
6. Implement the movement of elements using the drag-and-drop method. Columns are possible statuses that can be assigned to an element. When an element is moved to another column, the element's status should change to the one to which column it is transferred. All JS code should be written using Webpacker (app/javascript/packs)

Good luck!