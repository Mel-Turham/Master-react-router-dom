import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, {
	loader as rootLoader,
	action as rootAction,
} from './Routes/Root';
import ErrorPage from './Error-page';
import Contact, {
	loader as contactLoader,
	action as contactAction,
} from './Routes/Contact';
import EditContact, { action as editAction } from './Routes/Edit';
import { action as destroyAction } from './Routes/Destroy';
import Index from './Routes/Index';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <Index /> },
					{
						path: '/contacts/:contactId',
						element: <Contact />,
						loader: contactLoader,
						action: contactAction,
					},
					{
						path: 'contacts/:contactId/edit',
						element: <EditContact />,
						loader: contactLoader,
						action: editAction,
					},
					{
						path: 'contacts/:contactId/destroy',
						action: destroyAction,
						errorElement: <h1>Oops! There was an error.</h1>,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
);
