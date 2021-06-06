import React from 'react'
import { useState } from 'react'
const categorias =[
    {
        "nombre": "Audio y Video",
        "articulos": ["Monitor Led 27", "Parlante Bluetooth", "Smart Tv de 65 plgs"]
    }, 
    {
        "nombre": "Ferreteria",
        "articulos": ["Martillo Pequeño", "Taladro Percusión ", "Serrucho Corte Fino"]
    },
    {
        "nombre": "Frutas",
        "articulos": ["Manzanas", "Fresas", "Uvas"]
    }
]
const Menu = () => {
    const [articulos, setArticulos] = useState(-1);
    const handleCargarArticulos=(e)=>{
        const opcion = e.target.value;
        setArticulos(opcion); 
        console.log(opcion);
    }
    return (
        <div className="row">
            <div className="col-6">
                <h3>Categorias</h3>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="categorias" id="setIdCategorias" onClick={handleCargarArticulos} >
                <option selected>Seleccione una opción</option>
                    {
                        categorias.map((item, i)=> (
                            <option key={i} value={i}>{item.nombre}</option>
                        ))
                    }
                </select>
            </div>
            <div className="col-6">
                <h3>Articulos</h3>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  name="articulos" id="selArticulo">
                    {
                        articulos >- 1 && 
                        (
                            categorias[articulos].articulos.map((item, i)=>(
                                    <option key={i} value={i}>{item}</option>
                        ))
                        )
                    }
                </select>
            </div>
        </div>
    )
}

export default Menu
