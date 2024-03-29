import { RouteObject } from "react-router-dom";

import Root from "./Root/Root";
import CodeAnalysis from "./CodeAnalysis/CodeAnalysis";
import CodeInput from "./CodeInput/CodeInput";
import About from "./About/About";

export const routes: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				index: true,
				element: <CodeInput />,
			},
			{
				path: "/analysis/:sequence",
				element: <CodeAnalysis />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
];
