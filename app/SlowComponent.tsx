async function getData() {
  const res = await fetch("http://localhost:3000/api/slowApi");
  return res.json();
}

async function getData2() {
  const res = await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    test: "Hello world 2"
  }
}

async function SlowComponent() {
  const json = await getData();

  return <div>{json.test}</div>;
}

export default SlowComponent;
