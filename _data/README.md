# Working with dummy data

Install json server (ideally globally since it's often used on projects)

```
npm i -g json-server
```

Run json server off port 4000 since 3000 will already be in use by Next.js

```

json-server --watch ./\_data/db.json --port 4000

```

This is the url for the dummy data

```
http://localhost:4000/recipes
```
