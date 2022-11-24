## Todo assignment

As a user, I can:

- view a list of tasks (bonus: implement infinite scroll);
- add a new task using the mouse or keyboard;
- mark any task as completed, using the mouse or keyboard;
- delete any task, using the mouse or keyboard (with confirmation pop-up);
- view a specific subset of tasks: All tasks, only the pending tasks, or only the completed tasks (using different routes);
- completed tasks should have ~~strike through~~ style;
- (bonus) write tests using react-testing-library and msw, see -> [example](https://github.com/mswjs/examples/tree/master/examples/rest-react)
- (bonus) implement dark mode switch

PS: Feel free to style the app however you want, focus is mostly on the functionality.  
PS: Don't put all code in App.tsx, create separate components and folders as needed.

### `Fork this repository`

Don't contribute to this repo directly, but rather fork this repo to your github account, see -> [forking](https://www.freecodecamp.org/news/how-to-fork-a-github-repository/)

### `Technologies you should use`

- Material UI (already added to the project)
- React Query
- axios
- Typescript (already added to the project)
- JSON server (already added to the project)

### `Running mock server locally`

Fake BE service is already setup for you and you can run it locally by following these steps:

- Install JSON server

```
npm install -g json-server
```

- Start (run in separate terminal window)

```
json-server --watch --port 3004 ./server/db.json
```

- Now if you go to http://localhost:3004/todos, you'll get

```
{
  "id": 1,
  "title": "Learn Typescript",
  "isCompleted": false
}
```

- You can also use other routes

```
GET    /todos
GET    /todos/1
POST   /todos
PUT    /todos/1
PATCH  /todos/1
DELETE /todos/1
```

### `Installing project dependencies:`

```
npm i
```

### `Running the project`

```
npm start
```

### `Good luck 🚀`

