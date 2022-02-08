import React from "react";
import { Container, Row } from "react-bootstrap";
function Cover() {
  return (
    <div className="bg-gray-800 h-screen overflow-hidden flex align-items-center relative shadow-picture2">
      <div class="absolute  opacity-[0.2] -right-[3%] -top-[12%] w-[400px] border-gray-700 border-8 shadow-xl shadow-picture animate-move-right rounded-lg">
        <img src={require("../img/2.png")} alt=""></img>
      </div>
      <div class="absolute  opacity-[0.6] left-[3%] -top-[21%] w-[300px] border-gray-700 border-8 shadow-xl shadow-picture animate-move-left  rounded-lg ">
        <img src={require("../img/1.png")} alt=""></img>
      </div>
      <div class="absolute  opacity-[0.1] -left-[5%] bottom-[0%] w-[200px] border-slate-700 border-8 shadow-xl shadow-picture animate-move-right  rounded-lg ">
        <img src={require("../img/3.png")} alt=""></img>
      </div>
      <div class="absolute  opacity-[0.9] right-[27%] top-[70%] w-[100px] border-gray-700 border-4 shadow-xl shadow-picture animate-move-right  rounded-lg ">
        <img src={require("../img/4.png")} alt=""></img>
      </div>
      <div class="absolute  opacity-[0.5] left-[30%] bottom-[29%] w-[250px]  border-slate-700 border-8 shadow-xl shadow-picture animate-move-right  rounded-lg ">
        <img src={require("../img/5.png")} alt=""></img>
      </div>
      <div class="absolute  opacity-[0.8] left-[10%] top-[35%] w-[80px] border-slate-700 border-4 shadow-xl shadow-picture animate-move-left  rounded-lg ">
        <img src={require("../img/6.png")} alt=""></img>
      </div>
      <div class="absolute  opacity-[0.1] -right-[5%] bottom-[0%] w-[200px] border-slate-700 border-8 shadow-xl shadow-picture animate-move-left  rounded-lg ">
        <img src={require("../img/7.png")} alt=""></img>
      </div>

      <Container>
        <div className="text-center relative">
          <h1 class="text-5xl font-bold text-white">Rax Cruz</h1>
          <span className="text-4xl border-b-2 border-dashed text-white">
            Tiny Mini <span class="text-red-400">Collection</span>
          </span>
        </div>
      </Container>
    </div>
  );
}

export default Cover;
