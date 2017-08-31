# Ng4TestProject

#####This test application allows you to get Twitter posts by tag.

####[Live Demo](https://ng4-test-ahodqswpyh.now.sh/)

## Server

Enter you Twitter keys and tokens in `server/index.js`

```
const twitterClient = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
```

Run API `node ./server/index.js`  
API URL `http://localhost:8001`

## Frontend app

Run `ng serve --open`  

or
  
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
