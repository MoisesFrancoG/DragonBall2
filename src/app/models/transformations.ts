export interface Character {
    id: number;
    name: string;
    race: string;
    gender: string;
    ki: number;
    maxKi: number;
    description: string;
    image: string;
    transformations: Transformation[]; // Agregar esta línea
  }
  
  export interface Transformation {
    name: string;
    image: string;
    ki: number;
  }
  