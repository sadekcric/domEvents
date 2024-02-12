let subhanAllahCount = 0;
let alhamdulillah = 0;
let allahuakbar = 0;

function increment1(id) {
  if (subhanAllahCount === 33) {
    const err = alert(`Most Number is 33`);
    return err;
  }
  const innderText = document.getElementById(id);
  innderText.innerText = subhanAllahCount = subhanAllahCount + 1;
}

function increment2(id) {
  if (alhamdulillah === 33) {
    const err = alert(`Most Number is 33`);
    return err;
  }
  const innderText = document.getElementById(id);
  innderText.innerText = alhamdulillah = alhamdulillah + 1;
}

function increment3(id) {
  if (allahuakbar === 33) {
    const err = alert(`Most Number is 33`);
    return err;
  }
  const innderText = document.getElementById(id);
  innderText.innerText = allahuakbar = allahuakbar + 1;
}

function decrement1(id) {
  if (subhanAllahCount === 0) {
    return alert(`Min Number is 0`);
  }
  const innderText = document.getElementById(id);
  innderText.innerText = subhanAllahCount = subhanAllahCount - 1;
}

function decrement2(id) {
  if (alhamdulillah === 0) {
    return alert(`Min Number is 0`);
  }
  const innderText = document.getElementById(id);
  innderText.innerText = alhamdulillah = alhamdulillah - 1;
}

function decrement3(id) {
  if (allahuakbar === 0) {
    return alert(`Min Number is 0`);
  }
  const innderText = document.getElementById(id);
  innderText.innerText = allahuakbar = allahuakbar - 1;
}

// reset

function reset(id1, id2, id3) {
  document.getElementById(id1).innerText = "0";
  document.getElementById(id2).innerText = "0";
  document.getElementById(id3).innerText = "0";
}
