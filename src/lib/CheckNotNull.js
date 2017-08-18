export function CheckNotNull(bookObject) {
  if(bookObject.title === null || bookObject.title === ""){
    return false;
  }else if(bookObject.authors === null || bookObject.authors === ""){
    return false;
  }else if(bookObject.isbn === null || bookObject.isbn === ""){
    return false;
  }else if(bookObject.edition === null){
    return false;
  }else if(bookObject.yr_print === null){
    return false;
  }else if(bookObject.printing === null){
    return false;
  }else if(bookObject.condition === null){
    return false;
  }else if(bookObject.cover === null){
    return false;
  }else if(bookObject.amt_paid === null){
    return false;
  }else if(bookObject.sell_price === null){
    return false;
  }else if(bookObject.site === null || bookObject.site === ""){
    return false;
  }else if(bookObject.shelf === null || bookObject.shelf === ""){
    return false;
  }else{
    return true;
  }
}
