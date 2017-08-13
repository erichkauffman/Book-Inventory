export function Sell(rowid){
  let url = 'http://localhost:8000/item/sell/' + rowid.toString();
  fetch(url, {
    method: "delete"
  }).then((response) => {
    console.log(response);
  });
}

export function Delete(rowid){
  let url = 'http://localhost:8000/item/delete/' + rowid.toString();
  fetch(url, {
    method: "delete"
  }).then((response) => {
    console.log(response);
  });
}
