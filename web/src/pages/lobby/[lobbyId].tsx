import Heading from "@/components/Heading";
import Wrapper from "@/components/Wrapper";
import { isAuth } from "@/utils/isAuth";
import { useRouter } from "next/router";
import React from "react";

interface NewGameProps {}

const NewGame: React.FC<NewGameProps> = () => {
  const router = useRouter();

  isAuth();

  return (
    <Wrapper>
      <div className="flex w-full h-screen items-center justify-center bg-plt-four">
        <div className="flex items-center justify-center w-[50rem] h-[26rem] bg-plt-three rounded-md gap-2.5">
          <div className="w-[24rem] h-[25rem] border border-black rounded-md p-4">
            <Heading>Players:</Heading>
            <div>Share this link: {router.query.lobbyId}</div>
          </div>
          <div className="w-[24rem] h-[25rem] border border-black rounded-md p-4">
            <Heading>Settings:</Heading>
            <button
              type="submit"
              className="w-28 h-8 bg-plt-one hover:opacity-75 text-white"
            >
              Start game
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewGame;
