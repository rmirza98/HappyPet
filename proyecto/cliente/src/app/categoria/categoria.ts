import { Producto } from "../producto/producto";
export interface Categoria {
    id:number;
    nombre: string;
    productos:Producto[];
}
