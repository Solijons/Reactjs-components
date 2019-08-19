// Transform in React js

const names = [];

for(let propName in props.names) {
  names.push(
  {
    name: propName,
    id: props.names[propName]
  }
  );
}



const namesOutput = names.map((nm) => {
  return <span> {nm.name} {nm.id} </span>
})
