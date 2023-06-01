interface Card {
  title: string;
  contents: string;
}

interface CheckCard extends Card {
  checked: boolean;
}

interface ShoppingCard extends Card {
  price: number;
}

export type { Card, CheckCard, ShoppingCard };

