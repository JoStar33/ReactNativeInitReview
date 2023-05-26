interface Card {
  title: string;
  contents: string;
}

interface CheckCard extends Card {
  checked: boolean;
}

export type { Card, CheckCard };

