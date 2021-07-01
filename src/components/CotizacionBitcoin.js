import {React, useState, useEffect} from 'react';



const CotizacionBitcoin = () =>{

const [precio, setPrecio] = useState(null);

    useEffect(() => {
        try{
            fetch("https://criptoya.com/api/letsbit/btc/ars/0.5")
            .then((response) => response.json())
            .then((data) => {
                setPrecio(data.bid);
            })
        }catch(e){
            console.log(`error no controlado en la función CotizacionBitcoin: ${e}`);
        }finally{
            //console.log("CotizacionBitcoin finalizado");
        }    

    }, []);
    
    return(
        <>
            <div className="text-warning">Bitcoin: $ {precio} </div>
        </>
    )

};

export default CotizacionBitcoin;