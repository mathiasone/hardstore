function loadProducts(){
    const arrayProducts = [
        {
            id: "1",
            title: 'Fuente ASUS 750W',
            text:'ROG STRIX 750G 80 Plus Gold Full Modular',
            stock: 7,
            precio: 36560,
            image: '../../images/Fuente_ASUS_ROG_STRIX_750G_80_Plus_Gold_750W_Full_Modular.jpg',
            categoryId: "1",
            quantity: 1
        },
        {
            id: "2",
            title: 'Fuente ASUS 650W',
            text:'TUF 650B 80 Plus Bronze',
            stock: 5,
            precio: 23620,
            image: '../../images/Fuente_ASUS_TUF_650B_80_Plus_Bronze_650W.jpg',
            categoryId: "1",
            quantity: 1
        },
        {
            id: "3",
            title: 'Fuente ASUS 550W',
            text:'TUF 550B 80 Plus Bronze',
            stock: 3,
            precio: 17160,
            image: '../../images/Fuente_ASUS_TUF_550B_80_Plus_Bronze_550W.jpg',
            categoryId: "1",
            quantity: 1
        },
        {
            id: "4",
            title: 'Gabinete Cougar White',
            text:'Conquer Aluminum Vidrio Templado',
            stock: 2,
            precio: 28700,
            image: '../../images/Gabinete_Cougar_Conquer_Aluminum_Vidrio_Templado_White.jpg',
            categoryId: "3",
            quantity: 1
        },
        {
            id: "5",
            title: 'Gabinete Lian Li 011',
            text:'Dynamic XL ROG Certify White ARGB',
            stock: 5,
            precio: 19700,
            image: '../../images/Gabinete_Lian_Li_011_Dynamic_XL_ROG_Certify_White_ARGB.jpg',
            categoryId: "3",
            quantity: 1
        },
        {
            id: "6",
            title: 'Gabinete Cougar',
            text:'Blazer Essence Vidrio Templado',
            stock: 10,
            precio:  27120,
            image: '../../images/Gabinete_Cougar_Blazer_Essence_Vidrio_Templado.jpg',
            categoryId: "3",
            quantity: 1
        },
        {
            id: "7",
            title: 'Cooler FAN ID-Cooling',
            text:'XF-12025-ARGB-TRIO',
            stock: 12,
            precio:  10640,
            image: '../../images/Cooler_FAN_ID-Cooling_XF-12025-ARGB-TRIO.jpg',
            categoryId: "2",
            quantity: 1
        },
        {
            id: "8",
            title: 'Cooler FAN Cooler Master',
            text:'MasterFan SF240R ARGB',
            stock: 5,
            precio: 6560,
            image: '../../images/Cooler_FAN_Cooler_Master_MasterFan_SF240R_ARGB.jpg',
            categoryId: "2",
            quantity: 1
        },
        {
            id: "9",
            title: 'Fan Aerocool ASTRO 24',
            text:'ARGB 240MM',
            stock: 19,
            precio: 3520,
            image: '../../images/Fan_Aerocool_ASTRO_24_ARGB.jpg',
            categoryId: "2",
            quantity: 1
        }
        
    ];

    return arrayProducts;
}

export default loadProducts;

