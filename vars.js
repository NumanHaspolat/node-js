const createUser = (name, age, job) => {
  const User = {
    name: name,
    age: age,
    job: job,
  };

  return User;
};

// console.log(createUser("Numan", 17, "Dev"));

//* ----------------------

const secretFile = "Secret_as_hell.png";
const name = "James";
const device = "PC";

module.exports = { name, device };
