export function postBook(bookObj){
  console.log("bookObj trying to send")
  console.log(bookObj);
  fetch('http://localhost:8000/item', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookObj)
  })
  .then((res) => {
    console.log(res);
  });
}
