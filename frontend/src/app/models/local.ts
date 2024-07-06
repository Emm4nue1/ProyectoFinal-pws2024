export class Local {

    _id!:string;
    superficie!:number;
    habilitado!:boolean;
    costoMes!: number;
    imagen!:string;
    alquilado!:boolean;
    // constructor(){
    //     this.imagen = "/assets/images/productos/producto_nuevo.png"
    // }
    constructor(){
        this.superficie = 0;
        this.habilitado = false;
        this.costoMes = 0;
        this.imagen = "";
        this.alquilado = false;
        
    }
    
    
}
