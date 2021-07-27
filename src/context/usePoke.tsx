import React, { createContext, useState } from "react";
import { useCallback } from "react";
import { colors } from "../Themes/colors";
type Type = {
  pokemon?: string;
  primaryColor?: string;
  handleSelectInitialPokemon: (poke: string) => void;
  handleSelectTheme: (poke: string) => void;
};

type Props = {
  children: React.ReactNode;
};

export const PokeContext = createContext<Type>({});

const PokeContextProvider = ({ children }: Props): JSX.Element => {
  const [pokemon, setPokemon] = useState<string>("");
  const [primaryColor, setPrimaryColor] = useState<string>("");

  const handleSelectTheme = useCallback(
    (poke: string) => {
      if (poke) {
        switch (poke) {
          case "bulbasaur":
            setPrimaryColor(colors.grass);
            break;
          case "charmander":
            setPrimaryColor(colors.fire);
            break;
          case "squirtle":
            setPrimaryColor(colors.water);
            break;

          default:
            setPrimaryColor(colors.dragon);
            break;
        }
      }
    },
    [primaryColor]
  );

  const handleSelectInitialPokemon = useCallback(
    (poke: string) => {
      setPokemon(poke);
    },
    [pokemon]
  );

  return (
    <PokeContext.Provider
      value={{
        handleSelectInitialPokemon,
        pokemon,
        primaryColor,
        handleSelectTheme,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

export default PokeContextProvider;
