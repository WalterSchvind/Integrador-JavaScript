const products = [
 
  {
    id: 1,
    img: "/assets/img/Remera-run.webp",
    name: "Remera Manga Larga",
    desc: "De compresion ideal para runners",
    price: 10999,
    category: "running",
  },
  {
    id: 2,
    img: "/assets/img/Remera-Juv.webp",
    name: "Remera ADN Juventos",
    desc: "Para hombre",
    price: 9999,
    category: "remeras",
  },
  {
    id: 3,
    img: "/assets/img/Chomba-Boca.webp",
    name: "Chomba Boca Jrs",
    desc: "Clear Blue",
    price: 10999,
    category: "remeras",
  },
  {
    id: 4,
    img: "/assets/img/calza-runner-men.webp",
    name: "Calza Runner",
    desc: "Tiro Alto, Para hombres",
    price: 19999,
    category: "running",
    
  },
  {
    id: 5,
    img: "/assets/img/Remera-Cai.jfif",
    name: "Remera de Independiente",
    desc: "Negra",
    price: 9499,
    category: "remeras",
  },
  {
    id: 6,
    img: "/assets/img/calza-runner.webp",
    name: "Calza Runner",
    desc: "Para mujeres",
    price: 19499,
    category: "running",
  },
  {
    id: 7,
    img: "/assets/img/remera-antit.webp",
    name: "Remera Runner",
    desc: "Antitraspirante",
    price: 14999,
    category: "running",
  },
  {
    id: 8,
    img: "/assets/img/conjunto-arg.webp",
    name: "Conjunto Arg",
    desc: "Buzo de entrenamiento de Argentina",
    price: "15999",
    category: "mundial",
    recommended: true,
  },
  
  {
    id: 9,
    img: "/assets/img/remera.webp",
    name: "Remera Puma",
    desc: "Negro con logotipo Metalizado",
    price: 7999,
    category: "Remera",
  },
  {
    id: 10,
    img: "/assets/img/pantalon-arg.webp",
    name: "Pantalon de Entrenamiento",
    desc: "Parte del conjunto de la seleccion",
    price: 16999,
    category: "mundial",
    recommended: true,
  },
  {
    id: 11,
    img: "/assets/img/Remera-TRG.webp",
    name: "Remera Training",
    desc: "Sin mangas",
    price: 8999,
    category: "remeras",
  },
  {
    id: 12,
    img: "/assets/img/Remera-Bart.jpg",
    name: "Remera Bart",
    desc: "Remera Negra Braavosi Bart",
    price: 3300,
    category: "remeras",
  },

  {
    id: 13,
    img: "/assets/img/Remera-Bart.jpg",
    name: "Remera Bart",
    desc: "Remera Negra Braavosi Bart",
    price: 3300,
    category: "remeras",
  },
  {
    id: 14,
    img: "/assets/img/camiseta-kid.webp",
    name: "Camiseta Argentina",
    desc: "Para niños",
    price: 300,
    category: "kid",
    recommended: true,
  },
 {
    id: 15,
    img: "/assets/img/Remera-TRG.webp",
    name: "Remera Training",
    desc: "Sin mangas",
    price: 8999,
    category: "remeras",
  },
  {
    id: 16,
    img: "/assets/img/rompevientos-mj.webp",
    name: "Rompevientos",
    desc: "Campera rompevientos con capucha",
    price: 22900,
    category: "running",
  },
  
{
    id: 17,
    img: "/assets/img/calza-runner-men.webp",
    name: "Calza Runner",
    desc: "Tiro Alto, Para hombres",
    price: 19999,
    category: "running",
    
  },
  {
    id: 18,
    img: "/assets/img/calza-runner.webp",
    name: "Calza Runner",
    desc: "Para mujeres",
    price: 19499,
    category: "running",
  },
  {
    id: 19,
    img: "/assets/img/remera-boca-mjr.webp",
    name: "Camiseta visitante Boca",
    desc: "Para mujeres",
    price: 15999,
    category: "remeras",
  },

  {
    id: 20,
    img: "/assets/img/remera-entrenamiento-kids.jpg",
    name: "Remera Entrenamiento Seleccion",
    desc: "para niños/as",
    price: 25990,
    category: "kid",
    recommended: true,
  },
  {
    id: 21,
    img: "/assets/img/conjunto-s-r.webp",
    name: "Conjunto remera-shorts",
    desc: "Unisex",
    price: 10999,
    category: "kid",
  },
];

const mostPopularProducts = () => {
  const popularProducts = [];
  for (let i = 0; i < 16; i++) {
    if (i % 2.5 == 0) {
      popularProducts.push(products[i]);
    }
  }
  return popularProducts;
};