import { RouteObject } from "react-router-dom";

import Root from "./Root/Root";
import CodeAnalysis from "./CodeAnalysis/CodeAnalysis";
import CodeInput from "./CodeInput/CodeInput";
import Visualization from "./Visualization/Visualization";

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
