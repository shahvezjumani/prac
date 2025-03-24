const recordVideoOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Video one recorded");
  }, 1000);
});
const recordVideoTwo = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Video two recorded");
  //   }, 1000);
  resolve("video two is recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video three Recorded");
});

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
