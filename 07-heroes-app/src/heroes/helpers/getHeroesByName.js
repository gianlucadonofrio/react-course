import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  name = name.toLowerCase().trim();
  if (name.length === 0) return heroes;
  return heroes.filter((hero) => {
    return hero.superhero.toLowerCase().includes(name);
  });
};
