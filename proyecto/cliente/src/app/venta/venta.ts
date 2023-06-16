import { Ldv } from "../ldv/ldv";
import { Usuario } from "../usuario/usuario";

export interface Venta {
    id:number;
    fecha:string;
    direccion:string;
    telefono:string;
    ldvs:Ldv[];
    usuario:Usuario;

}
