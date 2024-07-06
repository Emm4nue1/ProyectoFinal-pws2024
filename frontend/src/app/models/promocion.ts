import { Local } from "./local";

export class Promocion {
    _id!: string;
    local: Local;
    imagen: string;
    descripcion: string;
    fechaInicio: Date;
    fechaFin: Date;

    constructor(){
        this.local = new Local();
        this.imagen = "";
        this.descripcion = "";
        this.fechaInicio = new Date();
        this.fechaFin = new Date();
    }
}
