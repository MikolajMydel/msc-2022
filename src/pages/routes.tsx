import { RouteObject } from "react-router-dom";
import Root from "./Root";
import CodeAnalysis from "./CodeAnalysis/CodeAnalysis";
import CodeInput from "./CodeInput/CodeInput";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <CodeInput />,
			},
			{
				path: "/:sequence",
				element: <CodeAnalysis />,
			},
		],
	},
];
