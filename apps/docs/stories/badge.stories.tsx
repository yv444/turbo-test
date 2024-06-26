import type { Meta, StoryObj } from "@storybook/react";
// eslint-disable-next-line import/no-unresolved -- path is correct
import { Badge } from "@yv444/badge";
import "@yv444/tokens/src/tokens.css";

const meta: Meta<typeof Badge> = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- this has a type
  component: Badge,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    role: {
      control: { type: "radio" },
      options: [
        "neutral",
        "info",
        "warning",
        "negative",
        "positive",
        "brand",
        "new",
      ],
    },
    emphasis: {
      control: { type: "radio" },
      options: ["bold", "subtle"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Badge {...props} />,
  name: "Badge",
  args: {
    children: "New",
    role: "brand",
    emphasis: "subtle",
  },
};
