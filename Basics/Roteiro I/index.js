const input = document.getElementsByTagName("input")[0];

const validInput = (delimiter) => {
  return input.value.replace(/\s/g, "").split(delimiter);
};
//-29, 84, 38, 3, 97, -12, -20, 14, 89, -21, 77, -19, 0, 66, 26
calc01 = () => {
  input.value = validInput(",")
    .map((element) => {
      return Math.pow(parseInt(element), 2);
    })
    .toString()
    .replaceAll(",", ", ");
};

calc02 = () => {
  input.value = Math.max(...validInput(","))
    .toString()
    .replaceAll(",", ", ");
};

calc03 = () => {
  input.value = validInput(",")
    .filter((e) => e >= 18)
    .toString()
    .replaceAll(",", ", ");
};

calc04 = () => {
  const regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:[1-9]?\d{3})/;

  if (input.value.match(regex))
    input.value = validInput(/[./-]/).toString().replaceAll(",", ", ");
};

calc05 = () => {
  input.value = input.value.toString().split("").reverse().join("");
};

calc06 = () => {
  input.value = validInput(",")
    .sort((a, b) => a - b)
    .toString()
    .replaceAll(",", ", ");
};

calc07 = () => {
  input.value = validInput(",").reduce((partialSum, a) => {
    if (a % 2 !== 0 && a % 3 == 0) return partialSum + parseInt(a);
    return partialSum;
  }, 0);
};

calc08 = () => {
  const content = document.getElementsByClassName("content")[0];
  try {
    content.removeChild(document.getElementsByClassName("response")[0]);
  } catch {}

  const result = validInput(",")
    .filter((e) => e >= 0)
    .map((element) => {
      let sum = 1;
      for (let i = 2; i <= element; i++) sum *= i;
      return sum;
    });
  let response = "";
  result.forEach((item, i) => {
    if (i <= 100 && i <= result.length) response += `<h3>${item}</h3><br />`;
    else return;
  });

  const div = document.createElement("div");
  div.className = "response";

  div.innerHTML = response;
  content.appendChild(div);
};

calc09 = () => {
  const content = document.getElementsByClassName("content")[0];
  const list = validInput(",");
  try {
    content.removeChild(document.getElementsByClassName("response")[0]);
  } catch {}

  let sum = 0,
    p = 0,
    n = 0;

  list.forEach((item) => {
    item = parseInt(item);
    sum += item;
    if (item >= 0) p++;
    else n++;
  });

  let response =
    `<h3>Average: ${sum / list.length}</h3><br/>` +
    `<h3>Positives ${((p * 100) / list.length).toFixed(2)}%: ${p}</h3><br/>` +
    `<h3>Negatives ${((n * 100) / list.length).toFixed(2)}%: ${n}</h3><br/>`;

  const div = document.createElement("div");
  div.className = "response";

  div.innerHTML = response;
  content.appendChild(div);
};

calc10 = () => {
    input.value = input.value.toString().split(",").reverse().join(",");
  };
