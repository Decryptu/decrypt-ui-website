export const API_BASE_URL = "https://api.decrypt-ui.com/";

export type ComponentInfo = {
  name: string;
  description: string;
  route: string;
};

export const componentsList: ComponentInfo[] = [
  {
    name: "Button",
    description: "Clickable button component.",
    route: "/component/button",
  },
  {
    name: "Table",
    description: "Table to display complex data.",
    route: "/component/table",
  },
  // Add more components
];
