export interface ProductPlate {
  id: string;
  name: string;
  category: "Google" | "Instagram";
  colorName: string;
  image: string;
  alt: string;
  description: string;
}

export const BRAND_INFO = {
  name: "PLACAS NFC FÁCIL",
  logoUrl: "https://i.postimg.cc/gJWbXT3S/Logo-NFC-Azul-para-Placas-Faceis.png",
  price: "R$ 9,99",
  priceNumeric: 9.99,
  badge: "Acesso Exclusivo ao Fornecedor",
};

export const PRODUCT_PLATES: ProductPlate[] = [
  {
    id: "google-azul",
    name: "Placa NFC Google Azul",
    category: "Google",
    colorName: "Azul Oficial",
    image: "https://i.postimg.cc/htzkCBrw/placa-azul.webp",
    alt: "Placa NFC Google na cor azul com logotipo do Google e QR Code para avaliações",
    description: "Modelo ideal para balcões e recepções receberem avaliações 5 estrelas no Google.",
  },
  {
    id: "google-preta",
    name: "Placa NFC Google Preta",
    category: "Google",
    colorName: "Preta Premium",
    image: "https://i.postimg.cc/QtbwBx8S/placa-preta.webp",
    alt: "Placa NFC Google na cor preta elegante com logotipo e QR Code para avaliações",
    description: "Design sofisticado e moderno que combina com estabelecimentos de alto padrão.",
  },
  {
    id: "instagram-rosa",
    name: "Placa NFC Instagram Rosa",
    category: "Instagram",
    colorName: "Rosa / Degradê",
    image: "https://i.postimg.cc/Fs18R429/placa-instagram-rosa.webp",
    alt: "Placa NFC Instagram na cor rosa com ícone oficial e QR Code para atrair seguidores",
    description: "Perfeita para salões, clínicas de estética, cafeterias e lojas de moda.",
  },
  {
    id: "instagram-preta",
    name: "Placa NFC Instagram Preta",
    category: "Instagram",
    colorName: "Preta Minimalista",
    image: "https://i.postimg.cc/g2Z7VKcR/placa-instagram-preta.webp",
    alt: "Placa NFC Instagram na cor preta fosca com QR Code e tecnologia de aproximação",
    description: "Estilo discreto e elegante para conectar clientes ao perfil do seu Instagram.",
  },
];

export const BENEFITS = [
  {
    number: "01",
    title: "Fornecedor em um só lugar",
    description: "Encontre as informações disponibilizadas sobre o fornecedor das placas NFC.",
    iconName: "Store",
  },
  {
    number: "02",
    title: "Modelos para diferentes negócios",
    description: "Conheça opções voltadas para avaliações no Google e divulgação no Instagram.",
    iconName: "Layers",
  },
  {
    number: "03",
    title: "Baixo investimento inicial",
    description: "Consulte as informações por apenas R$ 9,99.",
    iconName: "Coins",
  },
];

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Faça a compra por R$ 9,99",
    description: "Adquira o acesso às informações do fornecedor de forma rápida e segura.",
  },
  {
    step: 2,
    title: "Receba as instruções de acesso",
    description: "Receba as instruções de acesso conforme as condições informadas na oferta.",
  },
  {
    step: 3,
    title: "Consulte as informações do fornecedor",
    description: "Acesse os contatos e catálogo para planejar a aquisição das suas placas NFC.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "O que estou comprando?",
    answer: "Você está comprando acesso às informações do fornecedor de placas NFC, conforme a descrição da oferta.",
  },
  {
    question: "Estou comprando as placas físicas?",
    answer: "Não. O valor de R$ 9,99 refere-se ao acesso ao fornecedor, não à compra das placas físicas.",
  },
  {
    question: "Quanto custa o acesso?",
    answer: "O preço anunciado é de R$ 9,99, conforme as condições da oferta.",
  },
  {
    question: "Como receberei o acesso?",
    answer: "Consulte as instruções e condições de entrega apresentadas no processo de compra.",
  },
  {
    question: "As placas estão incluídas no valor?",
    answer: "Não. O valor informado refere-se ao acesso ao fornecedor.",
  },
];
