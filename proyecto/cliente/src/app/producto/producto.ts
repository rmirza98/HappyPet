import { Categoria } from "../categoria/categoria";
import { Comentario } from "../comentario/comentario";
import { Ldv } from "../ldv/ldv";

export interface Producto {
    id:number;
    nombre:string;
    descripcion:string;
    precio:string;
    categoria: Categoria;
    comentarios:Comentario[];
    ldv:Ldv[];
}
