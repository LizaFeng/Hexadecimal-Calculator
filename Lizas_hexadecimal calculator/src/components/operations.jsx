


function chooseOp(first_, second_, operation_) {
  switch (operation_) {
    case "+": return add(first_, second_);
    case "-": return sub(first_, second_);
    case "/": return div(first_, second_);
    case "*": return multi(first_, second_);
  }
}

function multi(first_, second_) {
  return (first_ * parseInt(second_, 16));
}

function add(first_, second_) {
  return (first_ + parseInt(second_, 16));
}

function sub(first_, second_) {
  return first_ - parseInt(second_, 16);
}

function div(first_, second_) {
  return first_ / parseInt(second_, 16);
}


export default chooseOp;


