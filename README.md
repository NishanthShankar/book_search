# React Native Code Challenge

The goal of this code challenge is to implement a simple book search application in React-Native using the
[Google Book HTTP Api](https://developers.google.com/books/docs/v1/reference/volumes/list)

## Part 1: Book Search

- Implement a one screen application which displays an input field for serching and a search button.
- Tapping the search button loads the first 10 results in a list.
  - Each result must display the following fields:
    - Title
    - Author
    - Description
    - Thumbnail

## Part 2: Infinite scrolling

- When scrolling to the bottom of the screen, the application should automatically fetch and append the next 10 results.

## Notes

- We will evaluate you on code quality, maintainability, testability, and software engineering best practices in general.
- We do not expect any UI styling and won't evaluate the "look and feel" of the app.
- You can use any software library relevant to the completion of the tasks at hand.
- You can consult any resources you want but refrain from copy/pasting big parts of code. We want to evaluate your own code.

- The [search endpoint](https://developers.google.com/books/docs/v1/reference/volumes/list) does not need any
authentication and you should not need any authentication code to query it:
  - Ex: [https://www.googleapis.com/books/v1/volumes?q=jules+vernes](https://www.googleapis.com/books/v1/volumes?q=jules+vernes)

- The google book search api allows calls from any origin so you should not need any proxy from same domain of your react application:
  - [test-cors.org](http://www.test-cors.org/#?client_method=GET&client_credentials=false&server_url=https%3A%2F%2Fwww.googleapis.com%2Fbooks%2Fv1%2Fvolumes%3Fq%3Djules%20vernes&server_enable=true&server_status=200&server_credentials=false&server_tabs=remote)