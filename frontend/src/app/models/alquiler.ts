import { Local } from "./local";
import { Usuario } from "./usuario";

export class Alquiler {

    _id!: string;
    propietario: Usuario;
    local: Local;
    plazomes: number;
    costoalquiler: number;
    fechaAlquiler: Date;
    
    constructor() {
        this.propietario = new Usuario();
        this.local = new Local();
        this.plazomes = 0;
        this.costoalquiler = 0;
        this.fechaAlquiler = new Date();
    }

}
