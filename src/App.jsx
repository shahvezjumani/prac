import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";
import Products from "./components/Products";
import TypingSpeedTracker from "./components/TypingSpeedTracker";
import Clock from "./components/Clock";

const App = () => {
  // const [images, setImages] = useState({});
  // const [counter, setCounter] = useState(1);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/comments/${counter}`)
  //     .then((res) => res.json())
  //     .then((data) => setImages(data));
  // }, [counter]);

  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);

  // const me = (e) => {
  //   setX(e.clientX);
  //   setY(e.clientY);
  // };

  // useEffect(() => {
  //   window.addEventListener("mousemove", me);

  //   return () => {
  //     window.removeEventListener("mousemove", me);
  //   };
  // }, []);
  // const [text, setText] = useState("");
  // const [formData, setFormData] = useState({
  //   userName: "default",
  //   email: "default",
  //   occupation: "Mistri",
  //   gender: "Other",
  //   languagues: ["HTML"],
  // });

  // const onChangeHandler = (e) => {
  //   // console.log(e.target.checked);

  //   if (e.target.name === "languagues") {
  //     // console.log("inn");

  //     const copy = { ...formData };
  //     // console.log(copy);

  //     // lang.push(e.target.value);
  //     if (e.target.checked) {
  //       copy.languagues.push(e.target.value);
  //       // console.log(copy.languagues);
  //     } else {
  //       copy.languagues = copy.languagues.filter(
  //         (item) => item !== e.target.value
  //       );
  //     }
  //     // console.log(copy.languagues);
  //     // Mistri;
  //     setFormData(copy);
  //   } else {
  //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   }
  //   // console.log(lang);
  //   // console.log(formData.languagues);
  // };
  // const studentDetails = [
  //   {
  //     name: "ali",
  //     age: 21,
  //     occupation: "Engineer",
  //   },
  //   {
  //     name: "Khan",
  //     age: 22,
  //     occupation: "Mistri",
  //   },
  //   {
  //     name: "Jaan",
  //     age: 19,
  //     occupation: "Doctor",
  //   },
  // ];
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prev) => prev + 1);
  //     document.title = `Your count is ${counter}`;
  //     // console.log(counter);
  //   }, 500);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <>
      {/* <Products /> */}
      {/* <TypingSpeedTracker /> */}
      <Clock />
    </>
  );
};

export default App;
