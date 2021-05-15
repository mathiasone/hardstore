import fuente1 from '../images/Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular.jpg'; // with import
import fuente2 from '../images/Fuente_ASUS_TUF_650B_80_Plus_Bronze_650W.jpg'; // with import
import fuente3 from '../images/Fuente_ASUS_TUF_550B_80_Plus_Bronze_550W.jpg'; // with import

function cargarProductos(){

    const productos = [
        {
            id: 1,
            title: 'Fuente ASUS 750W',
            text:'Fuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular',
            stock: 7,
            image: fuente1
        },
        {
            id: 2,
            title: 'Fuente ASUS 650W',
            text:'Fuente ASUS TUF 650B 80 Plus Bronze 650W',
            stock: 5,
            image: fuente2
        },
        {
            id: 3,
            title: 'Fuente ASUS 550W',
            text:'Fuente ASUS TUF 550B 80 Plus Bronze 550W',
            stock: 3,
            image: fuente3
        }
        
    ];

    return productos;
    
}

export default cargarProductos;