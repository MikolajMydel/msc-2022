import { RouteObject } from "react-router-dom";
import Root from "./Root";
import CodeAnalysis from "./CodeAnalysis/CodeAnalysis";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/:sequence",
				element: <CodeAnalysis />,
			},
		],
	},
];
