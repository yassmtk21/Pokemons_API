import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsFetch, setId } from "../actions";


function Card() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.myReducer.pokemons);

  useEffect(() => {
    dispatch(getPokemonsFetch());
  }, [getPokemonsFetch]);
  return (
    <div className="z-0">
      <div className="w-ful text-black pt-[50px] ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[80%] h-full m-auto">
          {pokemons.map((pok) => (
            <div
              className=" bg-[#153981] shadow-md shadow-neutral-700 rounded-md"
              key={pok.id}
            >
              <div className="w-full flex justify-center">
                <img
                  src={pok.sprites.back_default}
                  alt=""
                  className="relative top-5 bg-white rounded-full"
                />
              </div>
              <div className="bg-white text-blac pt-[30px]">
                <p className="w-full flex flex-col items-center justify-center gap-4">
                  <span className="font-bold">Name</span>
                  <span className="font-medium text-[#153981]">{pok.name}</span>
                </p>
              </div>
              <div className="w-full flex justify-center pt-[20px] pb-[10px] bg-white">
                <button
                  className="bg-black text-white px-[20px] py-[10px] rounded-md"
                  onClick={() => dispatch(setId(pok.id))}
                >
                  More info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Card;
