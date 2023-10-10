import type { Meta, StoryObj } from "@storybook/react";

import { UserDropdown } from "../components/UserDropdown";
import { sunTheme } from "../assets/themes";

const meta = {
  title: "components/User Dropdown",
  component: UserDropdown,
} satisfies Meta<typeof UserDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

function handle() {
  console.log("HANDLE");
}

export const DropdownOpen: Story = {
  args: {
    show: true,
    name: "Jane Doe",
    links: { Downloads: "/downloads", Data: "/data" },
    logout: true,
    logoutFunction: handle,
    target: undefined,
    theme: sunTheme,
  },
};

export const DropdownClosed: Story = {
  args: {
    show: false,
    name: "Jane Doe",
    links: { Downloads: "/downloads", Data: "/data" },
    logout: true,
    logoutFunction: handle,
    target: undefined,
    theme: sunTheme,
  },
};
