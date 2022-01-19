/** @format */
import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
function Header() {
  return (
    <div className="bg-white top-0 sticky shadow z-50">
      <div className="flex justify-between max-w-6xl items-center mx-auto">
        {/* led image div */}
        <div className="relative hidden lg:inline-grid h-10 w-24">
          <Image
            src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative lg:hidden sm:inline-grid h-8 w-8 flex-shrink-0 cursor-pointer">
          <Image
            src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* middle div */}
        <div className="max-w-sm">
          <div className="relative items-center p-3">
            <div className="absolute pl-3 flex items-center inset-y-0 pointer-events-none">
              <SearchIcon className="h-7 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="search"
              className="bg-gray-50 block w-full pl-10 sm:text-sm p-2 border-gray-400"
            />
          </div>
        </div>
        {/* right div */}
        <div className="items-center relative flex space-x-5">
          <div className="flex items-center">
            <HomeIcon className="navBtn" />
          </div>
          <div className="flex items-center">
            <PlusCircleIcon className="navBtn" />
          </div>
          <div className="flex items-center">
            <UserGroupIcon className="navBtn" />
          </div>
          <div className="flex items-center">
            <HeartIcon className="navBtn" />
          </div>
          <div className="flex items-center relative cursor-pointer -mt-2">
            <PaperAirplaneIcon className="h-7 w-8 rotate-45 navBtn " />
            <span className="absolute -top-1 -right-[0.1px] h-4 text-xs w-4 animate-pulse rounded-full items-center justify-center bg-red-500 text-white text-center navBtn">
              2
            </span>
          </div>
          <div className="flex items-center">
            <MenuIcon className="h-7 w-8 cursor-pointer" />
          </div>
          <div className="flex items-center">
            <img
              className="h-8 w-8 cursor-pointer rounded-full flex-shrink-0"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQFOfPu93n6Kxw/profile-displayphoto-shrink_200_200/0/1632301101571?e=1648080000&v=beta&t=s1cIHzGanUx7AIMBOlWiB4pzrrkfwOb1pqFc3mW2lts"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
