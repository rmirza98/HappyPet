import { Producto } from "../producto/producto";
import { Usuario } from "../usuario/usuario";

export interface Comentario {
    id:number;
    texto:string;
    producto:Producto;
    usuario:Usuario
}
