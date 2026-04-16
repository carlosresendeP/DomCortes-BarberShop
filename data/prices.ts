// ============================================================
//  TABELA DE PREÇOS — edite aqui para atualizar o site
// ============================================================

export interface PriceItem {
  name: string;
  description: string;
  price: string;
}

export interface PriceCategory {
  title: string;
  items: PriceItem[];
}

export const priceCategories: PriceCategory[] = [
  {
    title: "Cortes & Estilo",
    items: [
      {
        name: "Corte Degradê",
        description: "Técnica de fade com acabamento navalhado.",
        price: "R$ 30,00",
      },
      {
        name: "Corte Social",
        description: "O clássico adaptado ao seu perfil.",
        price: "R$ 20,00",
      },
      {
        name: "Corte na Tesoura",
        description: "Caimento natural e corte artesanal.",
        price: "R$ 25,00",
      },
      {
        name: "Pezinho & Acabamento",
        description: "Alinhamento de contornos e nuca.",
        price: "R$ 7,00",
      },
    ],
  },
  {
    title: "Barba & Cuidados",
    items: [
      {
        name: "Barba Completa",
        description: "Barba hidratada e alinhada.",
        price: "R$ 35,00",
      },
    ],
  },
];
