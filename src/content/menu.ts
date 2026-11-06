export type Moment = "gelar" | "misturar" | "balde" | "fumar";

export const moments: { id: Moment; title: string; hint: string }[] = [
  { id: "gelar", title: "Pra gelar", hint: "Cerveja bem gelada" },
  { id: "misturar", title: "Pra misturar", hint: "Destilados, energético e coco" },
  { id: "balde", title: "Pro balde", hint: "Combos para a mesa" },
  { id: "fumar", title: "Pra fumar", hint: "Tabacaria" },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  moment: Moment;
  buildable: boolean;
};

export const menuItems: MenuItem[] = [
  { id: "heineken", name: "Heineken long neck", description: "Bem gelada, servida no balde com gelo.", moment: "gelar", buildable: true },
  { id: "jack-fire", name: "Jack Daniel's Tennessee Fire", description: "Whiskey com canela. Cai bem com energético.", moment: "misturar", buildable: true },
  { id: "red-bull", name: "Red Bull", description: "Lata gelada para o drink da noite.", moment: "misturar", buildable: true },
  { id: "agua-coco", name: "Água de coco Coco Quadrado 200 ml", description: "Para misturar com destilado ou para o dia seguinte.", moment: "misturar", buildable: true },
  { id: "gin", name: "Gin", description: "Seagers e outras marcas na prateleira.", moment: "misturar", buildable: true },
  { id: "martini", name: "Martini", description: "Vermute para drinks e aperitivo.", moment: "misturar", buildable: true },
  { id: "vodka", name: "Vodkas", description: "Variedade de marcas na parede da loja.", moment: "misturar", buildable: true },
];

export const baldeExample = "Jack Fire + Red Bull + água de coco, no gelo.";
