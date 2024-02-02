import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setId } from "../actions";
import { RiCloseLine } from "react-icons/ri";

const Modal = () => {
  const dispatch = useDispatch();
  const Id = useSelector((state) => state.myReducer.id);
  const pokemons = useSelector((state) => state.myReducer.pokemons);
  const pokemon = pokemons.filter((pokemon) => pokemon.id === Id);
  useEffect(() => {
    document.body.style.overflow = Id ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [Id]);

  return Id ? (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[#000000] opacity-50 z-50`}
      ></div>
      <div
        className={`w-[90%] sm:w-[400px] text-black mx-auto pb-[30px] shadow-lg fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-[9999999] rounded-lg`}
      >
        {pokemon.map((pok) => (
          <div className="" key={pok.id}>
            <div className="p-[20px] w-full flex justify-between bg-gray-300 font-medium text-black">
              <span>{pok.name}</span>
              <span
                className="cursor-pointer w-[40px] h-[40px] hover:bg-gray-700 hover:text-white transition-all duration-500  rounded-full flex items-center justify-center"
                onClick={() => dispatch(setId(null))}
              >
                <RiCloseLine />
              </span>
            </div>
            <hr />
            <div className="w-full flex justify-center">
              <img
                src={pok.sprites.other.dream_world.front_default}
                className="w-[200px]"
                alt=""
              />
            </div>
            <div>
              <div className="w-full flex justify-around mt-[20px]">
                <h3 className="font-bold">
                  Weight: <span className="font-medium">{pok.weight}</span>
                </h3>
                <h3 className="font-bold">
                  Height: <span className="font-medium">{pok.height}</span>
                </h3>
              </div>
              <div className="w-full flex justify-center mt-[20px]">
                <h3 className="font-bold">
                  Experience :
                  <span className="font-medium">{pok.base_experience}</span>{" "}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : null;
};

export default Modal;
