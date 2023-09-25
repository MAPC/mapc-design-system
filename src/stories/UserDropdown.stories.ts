import type { Meta, StoryObj } from "@storybook/react";

import { UserDropdown } from "../components/UserDropdown";

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
  },
};
