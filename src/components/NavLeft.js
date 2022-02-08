import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cardShow,
  tableShow,
  heroShow,
  personalWebShow,
  welcomeShow,
} from "../slice/collectionSlice";
import T from "../img/avatar.png";
function NavLeft() {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection);

  return (
    <div
      class="w-60 shadow-md absolute text-white h-full"
      id="sidenavSecExample"
    >
      <div class="pt-4 pb-2 px-6 ">
        <button onClick={() => dispatch(welcomeShow())} className="">
          <div class="flex items-center">
            <div class="shrink-0">
              <img src={T} class="rounded-full w-10" alt="Avatar" />
            </div>
            <div class="grow ml-3">
              <p class="text-sm  text-gray-400">Rax Cruz</p>
            </div>
          </div>
        </button>
      </div>
      <ul class="relative px-1">
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <span className="text-red-400 font-bold">Web Design</span>
          </a>
        </li>
        <li class="relative" id="sidenavSecEx2">
          <button
            onClick={() => dispatch(personalWebShow())}
            class="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavSecEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavSecEx2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 mr-3"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
              ></path>
            </svg>
            <span>Personal Web</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </button>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavSecEx2"
            aria-labelledby="sidenavSecEx2"
            data-bs-parent="#sidenavSecExample"
          >
            {collection.contents.map((item) => (
              <li class="relative">
                <a
                  href="#!"
                  class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      <hr class="my-2" />
      <ul class="relative px-1">
        <li class="relative">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <span className="text-red-400 font-bold">Components</span>
          </a>
        </li>
        <li class="relative" id="sidenavXxEx2">
          <button
            onClick={() => dispatch(tableShow())}
            class="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavXxEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavXxEx2"
          >
            <svg
              version="1.1"
              class="w-3 h-3 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 490 490"
              enable-background="new 0 0 490 490"
            >
              <path
                fill="currentColor"
                d="m475,115.001h-460c-8.284,0-15,6.716-15,15s6.716,15 15,15h14.012v214.998c0,8.284 6.716,15 15,15s15-6.716 15-15v-65h370.989v65c0,8.284 6.716,15 15,15s15-6.716 15-15v-214.998h14.999c8.284,0 15-6.716 15-15s-6.716-15-15-15zm-44.999,149.998h-370.989v-60.002h370.989v60.002zm0-90.003h-370.989v-29.995h370.989v29.995z"
              />
            </svg>
            <span>Table</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </button>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavXxEx2"
            aria-labelledby="sidenavXxEx2"
            data-bs-parent="#sidenavSecExample"
          >
            {collection.contents.map((item) => (
              <li class="relative">
                <a
                  href="#!"
                  class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li class="relative" id="sidenavXxEx3">
          <button
            onClick={() => dispatch(cardShow())}
            class="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavXxEx3"
            aria-expanded="false"
            aria-controls="collapseSidenavXxEx3"
          >
            <svg
              class="w-3 h-3 mr-3"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="92px"
              height="92px"
              viewBox="0 0 92 92"
              enable-background="new 0 0 92 92"
            >
              <path
                fill="currentColor"
                id="XMLID_2192_"
                d="M92,23.4c0-4.1-3.3-7.4-7.4-7.4H7.4C3.3,16,0,19.3,0,23.4v45.3C0,72.7,3.3,76,7.4,76h77.3
	c4.1,0,7.4-3.3,7.4-7.4V23.4z M84,24v7H8v-7H84z M8,68V43h76v25H8z M76.5,55c0,2.2-1.8,4-4,4h-19c-2.2,0-4-1.8-4-4s1.8-4,4-4h19
	C74.7,51,76.5,52.8,76.5,55z"
              />
            </svg>
            <span>Card</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </button>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavXxEx3"
            aria-labelledby="sidenavXxEx3"
            data-bs-parent="#sidenavSecExample"
          >
            {collection.contents.map((item) => (
              <li class="relative">
                <a
                  href="#!"
                  class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li class="relative" id="sidenavXxhero">
          <button
            onClick={() => dispatch(heroShow())}
            class="w-full flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavXxhero"
            aria-expanded="false"
            aria-controls="collapseSidenavXxhero"
          >
            <svg
              class="w-3 h-3 mr-3"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="234px"
              height="260px"
              viewBox="0 0 234 260"
              enable-background="new 0 0 234 260"
            >
              <path
                fill="currentColor"
                d="M232.043,157.557L216.22,2l-32.915,51.122c0,0-28.733-21.024-66.301-21.024c-37.577,0-60.744,17.332-60.744,17.332L9.57,2
	L1.957,157.557h4.675C11.901,213.818,59.385,258,117,258s105.099-44.182,110.368-100.443H232.043z M47.147,109.233
	c2.105-7.719,11.19-11.065,17.794-6.556l35.635,24.35H42.293L47.147,109.233z M169.194,102.677
	c6.604-4.508,15.698-1.163,17.803,6.556l4.845,17.794h-58.283L169.194,102.677z M117,238.185c-46.68,0-85.26-35.314-90.447-80.628
	h180.893C202.26,202.871,163.68,238.185,117,238.185z M146.646,200.214H90.891v-16.932h55.755V200.214z"
              />
            </svg>

            <span>Hero</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-3 h-3 ml-auto"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
              ></path>
            </svg>
          </button>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavXxhero"
            aria-labelledby="sidenavXxhero"
            data-bs-parent="#sidenavSecExample"
          >
            {collection.contents.map((item) => (
              <li class="relative">
                <a
                  href="#!"
                  class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="primary"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default NavLeft;
