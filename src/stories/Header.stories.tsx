import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Header from "../components/Header";
import { sunTheme, skyTheme, clearwaterTheme } from "../assets/themes";

const meta = {
  title: "components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderClearWater: Story = {
  args: {
    title: "Title",
    links: ["test1", "test2", "test3"],
    theme: clearwaterTheme,
  },
};

const title: React.ReactNode = (
  <>
    <span style={{ fontSize: "2.35rem", fontStyle: "italic" }}>60</span>
    <span style={{ verticalAlign: "super", fontStyle: "italic" }}>th</span> ANNIVERSARY TIMELINE
  </>
);

export const HeaderSky: Story = {
  args: {
    title: title,
    links: ["test1", "test2", "test3"],
    theme: skyTheme,
    buttonLinks: false,
  },
};
