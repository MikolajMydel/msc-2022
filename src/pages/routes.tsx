import { RouteObject } from "react-router-dom";

import Root from "./Root";
import CodeAnalysis from "./CodeAnalysis";
import CodeInput from "./CodeInput";
import Visualization from "./Visualization";

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
				path: "/visualization/:sequence",
				element: <Visualization />,
			},
		],
	},
];
