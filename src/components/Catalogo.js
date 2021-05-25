import imgFuenteAsus750 from '../images/Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular.jpg'; 
import imgFuenteAsus650 from '../images/Fuente_ASUS_TUF_650B_80_Plus_Bronze_650W.jpg'; 
import imgFuenteAsus550 from '../images/Fuente_ASUS_TUF_550B_80_Plus_Bronze_550W.jpg'; 
import GabineteCougarWhite from '../images/Gabinete_Cougar_Conquer_Aluminum_Vidrio_Templado_White.jpg';
import GabineteLian from '../images/Gabinete_Lian_Li_011_Dynamic_XL_ROG_Certify_White_ARGB.jpg';
import GabineteCougar from '../images/Gabinete_Cougar_Blazer_Essence_Vidrio_Templado.jpg';
import CoolerFANID from '../images/Cooler_FAN_ID-Cooling_XF-12025-ARGB-TRIO.jpg';
import CoolerFANCM from '../images/Cooler_FAN_Cooler_Master_MasterFan_SF240R_ARGB.jpg';
import CoolerFanAeroCool from '../images/Fan_Aerocool_ASTRO_24_ARGB.jpg';


function cargarProductos(){
    const arrayProductos = [
        {
            id: 1,
            title: 'Fuente ASUS 750W',
            text:'ROG STRIX 750G 80 Plus Gold Full Modular',
            stock: 7,
            precio: 36560,
            image: imgFuenteAsus750
        },
        {
            id: 2,
            title: 'Fuente ASUS 650W',
            text:'TUF 650B 80 Plus Bronze',
            stock: 5,
            precio: 23620,
            image: imgFuenteAsus650
        },
        {
            id: 3,
            title: 'Fuente ASUS 550W',
            text:'TUF 550B 80 Plus Bronze',
            stock: 3,
            precio: 17160,
            image: imgFuenteAsus550
        },
        {
            id: 4,
            title: 'Gabinete Cougar White',
            text:'Conquer Aluminum Vidrio Templado',
            stock: 2,
            precio: 28700,
            image: GabineteCougarWhite
        },
        {
            id: 5,
            title: 'Gabinete Lian Li 011',
            text:'Dynamic XL ROG Certify White ARGB',
            stock: 5,
            precio: 19700,
            image: GabineteLian
        },
        {
            id: 6,
            title: 'Gabinete Cougar',
            text:'Blazer Essence Vidrio Templado',
            stock: 10,
            precio:  27120,
            image: GabineteCougar
        },
        {
            id: 7,
            title: 'Cooler FAN ID-Cooling',
            text:'XF-12025-ARGB-TRIO',
            stock: 12,
            precio:  10640,
            image: CoolerFANID
        },
        {
            id: 8,
            title: 'Cooler FAN Cooler Master',
            text:'MasterFan SF240R ARGB',
            stock: 5,
            precio: 6560,
            image: CoolerFANCM
        },
        {
            id: 9,
            title: 'Fan Aerocool ASTRO 24',
            text:'ARGB 240MM',
            stock: 19,
            precio: 3520,
            image: CoolerFanAeroCool
        }
        
    ];

    return arrayProductos;
}

export default cargarProductos;