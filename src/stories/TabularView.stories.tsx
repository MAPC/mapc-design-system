import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { sunTheme, turquoiseTheme, fuchsiaTheme, grayTheme } from "../assets/themes";
import { TabularView } from "../components/TabularView";

const meta = {
  title: "components/Tabular View",
  component: TabularView,
} satisfies Meta<typeof TabularView>;

export default meta;
type Story = StoryObj<typeof meta>;

const testData = [
  { title: "The First Book", body: "Large desciription of text", signature: "test name" },
  { title: "The Second Book", body: "Large desciription of text", signature: "tester" },
  { title: "The Last Book", body: "Large desciription of text", signature: "final book name" },
];

const testDataCost = [
  { title: "The First Book", price: 400, signature: "test name", price2: 400, signature2: "test name" },
  { title: "The First Book", price: 200, signature: "test name", price2: 400, signature2: "test name" },
  { title: "The First Book", price: 450, signature: "test name", price2: 400, signature2: "test name" },
  { title: "The First Book", price: 110, signature: "test name", price2: 400, signature2: "test name" },
  { title: "The First Book", price: 220, signature: "test name", price2: 400, signature2: "test name" },
  { title: "The First Book", price: 250, signature: "test name", price2: 400, signature2: "test name" },
  { title: "The First Book", price: 400, signature: "test name", price2: 400, signature2: "test name" },
  { title: "The First Book", price: 420, signature: "test name", price2: 400, signature2: "test name" },
  { title: "The First Book", price: 3300, signature: "test name", price2: 400, signature2: "test name" },
];

export const ViewText: Story = {
  args: { fields: ["title", "body", "signature"], data: testData, searchTerm: "", theme: sunTheme },
};

export const ViewCost: Story = {
  args: {
    fields: ["title", "price", "signature", "price2", "signature2"],
    data: testDataCost,
    searchTerm: "",
    theme: turquoiseTheme,
  },
  decorators: [
    (Story) => (
      <div style={{ height: "15rem" }}>
        <Story />
      </div>
    ),
  ],
};
