[![Selection-017.png](https://i.postimg.cc/Dykm8zQb/Selection-017.png)](https://postimg.cc/F1ph6NB9)

## Setup
To run this project, install it locally using npm:

```
$ cd ../search-n-find
$ npm install
$ npm run build
$ npm run test
$ npm run dev
```

## Tech stack
Nodejs, typescript

### API Design

<base-url>/search?searchTerm=king&sortBy=name

1. Two params are involved in the API: sortBy=['name', 'dateLastEdited'], searchTerm='any string'
2. By default the sortBy is 'name'
