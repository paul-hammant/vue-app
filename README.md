# App

Small Vue SFC app that shows fields that change the URL

It also uses https://github.com/FranckFreiburger/vue3-sfc-loader to load the .vue component straight into a web page
without using webpack.

See it running by launching a static web server
```
python3 -m http.server 8000
# or alternate from https://gist.github.com/willurd/5720255
```

Unit Test:
    - vue-test-utils used to create unit tests
    - tests located /tests/unit

    Install dependencies:
    - npm i

    To run the tests:
    - npm run test:unit