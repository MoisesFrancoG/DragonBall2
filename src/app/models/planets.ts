export interface Character {
  id: number,
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    description: string,
    image: string,
    affiliation: string,
    deletedAt: null,
    originPlanet: Planet
  }

  export interface Planet {
  id: number,
  name: string,
  isDestroyed: boolean,
  description: string,
  image: string,
  deletedAt: null
}