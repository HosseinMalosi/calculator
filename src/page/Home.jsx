import _ from "lodash";
import React, { useState } from "react";
import Card from "../UI/Card";
import { Backspace } from "react-bootstrap-icons";
import "./home.css";
const Home = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [isNew, setIsNew] = useState(false);

  const operattors = ["+", "-", "*", "/"];

  const onClickHandler = (e) => {
    const intNum = e.target.value;
    if (
      (operattors.includes(intNum) && value === "") ||
      (operattors.includes(intNum) && operattors.includes(value.slice(-1)))
    ) {
      return;
    }

    if (isNew) {
      if (operattors.includes(intNum) && result !== "") {
        setValue(result + intNum);
      } else if (!operattors.includes(intNum)) setValue(intNum);
      setIsNew(false);
    } else {
      setValue(value + intNum);
      console.log(intNum, value);
    }
  };

  const onSubmitHandler = () => {
    const calculated = eval(...value);
    setResult(calculated);
    setIsNew(true);
  };

  const onClearHandler = () => {
    setValue("");
    setResult("");
  };

  const onDeleteHandler = () => {
    setValue(value.slice(0, -1));
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-4 rounded bg-[#363636]">
        <form className="flex flex-col gap-4">
          <div className="w-64 sm:w-72 h-32 flex flex-col rounded-xl focus:outline-none border-2 border-[#282828] bg-[#969696] p-2 placeholder:text-gray-600">
            <span className="basis-1/2 relative text-4xl">
              {value || 0}
              <Backspace
                className=" text-2xl absolute top-3 right-2 cursor-pointer"
                onClick={onDeleteHandler}
              />
            </span>
            <span className="basis-1/2 text-3xl text-neutral-700">
              {result}
            </span>
          </div>
          <div className=" grid grid-cols-4 grid-rows-5 gap-2 text-center">
            <Card
              value={"C"}
              id="C"
              color="bg-emerald-600"
              fontSize="text-xl"
              className="col-span-2"
              onClick={onClearHandler}
            />
            <Card
              value={"/"}
              id="/"
              color="bg-cyan-600"
              fontSize="text-xl"
              onClick={(e) => onClickHandler(e)}
            />
            <Card
              value={"*"}
              id={"×"}
              color="bg-cyan-600"
              fontSize="text-xl"
              onClick={(e) => onClickHandler(e)}
            />
            <Card value={"1"} id="1" onClick={(e) => onClickHandler(e)} />
            <Card value={"2"} id="2" onClick={(e) => onClickHandler(e)} />
            <Card value={"3"} id="3" onClick={(e) => onClickHandler(e)} />
            <Card
              value={"+"}
              id="+"
              color="bg-cyan-600"
              fontSize="text-xl"
              onClick={(e) => onClickHandler(e)}
            />
            <Card value={"4"} id="4" onClick={(e) => onClickHandler(e)} />
            <Card value={"5"} id="5" onClick={(e) => onClickHandler(e)} />
            <Card value={"6"} id="6" onClick={(e) => onClickHandler(e)} />
            <Card
              value={"-"}
              id="-"
              color="bg-cyan-600"
              fontSize="text-xl"
              onClick={(e) => onClickHandler(e)}
            />
            <Card value={"7"} id="7" onClick={(e) => onClickHandler(e)} />
            <Card value={"8"} id="8" onClick={(e) => onClickHandler(e)} />
            <Card value={"9"} id="9" onClick={(e) => onClickHandler(e)} />
            <Card
              value={"="}
              id="="
              className="row-span-2"
              color="bg-emerald-600"
              fontSize="text-xl"
              onClick={onSubmitHandler}
            />
            <Card
              value={"0"}
              id="0"
              className=" col-span-2"
              onClick={(e) => onClickHandler(e)}
            />
            <Card
              value={"."}
              id="."
              fontSize="text-xl"
              onClick={(e) => onClickHandler(e)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
