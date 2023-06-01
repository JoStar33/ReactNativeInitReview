import { ComponentMeta, ComponentStory } from "@storybook/react";

import ShoppingScreen from "./ShoppingScreen";

export default {
  title: "스크린/ShoppingScreen",
  component: ShoppingScreen,
} as ComponentMeta<typeof ShoppingScreen>;

export const ShoppingScreenTest: ComponentStory<typeof ShoppingScreen> = () => (
  <ShoppingScreen />
);