import { SidebarItem } from "./types";

export const menuItems: SidebarItem[] = [
  {
    title: "Cidadão",
    list: [
      {
        label: "Registrar Situação",
        icon: "",
        url: "registrar-situacao",
      },
      {
        label: "Solicitar Auxílio",
        icon: "",
        url: "solicitacao-auxilio",
      },
    ],
  },
  {
    title: "Administrador",
    list: [
      {
        label: "Pesquisar Vulneráveis",
        icon: "",
        url: "pesquisar-vulneraveis",
      },
      {
        label: "Visualizar Totalizadores",
        icon: "",
        url: "visualizar-totalizadores",
      },
    ],
  },
];
