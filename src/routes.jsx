import StartingPage from "@/pages/dashboard/startingPage";

export const routes = [
    {
      title: "",
      layout: "dashboard",
      pages: [
        {
          icon: "",
          name: "dashboard",
          path: "/home",
          element: <StartingPage />,
        },
      ],
    }



]