import {React, useState, useEffect} from 'react';



const CotizacionDolar = () =>{

const [precio, setPrecio] = useState(null);

    useEffect(() => {
        try{
            fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
            .then((response) => response.json())
            .then((data) => {
                // const cc = data.filter((p) => p.casa.nombre === "Dolar Blue");
                setPrecio(data.filter((p) => p.casa.nombre === "Dolar Blue")[0].casa.compra);
            })
        }catch(e){
            console.log(`error no controlado en la función CotizacionDolar: ${e}`);
        }finally{
            console.log("CotizacionDolar finalizado");
        }    

    }, []);
    
    return(
        <>
            <p className="text-success">Dolar: $ {precio} </p>
        </>
    )

};

export default CotizacionDolar;