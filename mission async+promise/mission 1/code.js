const postsFetch = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};

const todosFetch = () => fetch("https://jsonplaceholder.typicode.com/todos");

const usersFetch = () => fetch("https://jsonplaceholder.typicode.com/users");

const main = async () => {
  // לא עובד מחזיר מערך של Promise
  // const responses = [
  //     await postsFetch(),
  //     await todosFetch(),
  //     await usersFetch()
  // ];
  // const datas = responses.map(async r => {
  //     const ret = await r.json();
  //     return await ret;
  // });
  // console.log(datas);

  let response = await postsFetch();
  const json = await response.json();
  console.log(json);
  response = await todosFetch();
  const json2 = await response.json();
  console.log(json2);
  response = await usersFetch();
  const json3 = await response.json();
  console.log(json3);

  //   console.log(json, json2, json3);
};

main();
