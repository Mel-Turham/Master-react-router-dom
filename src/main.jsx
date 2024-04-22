import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, {
	loader as rootLoader,
	action as rootAction,
} from './Routes/Root';
import ErrorPage from './Error-page';
import Contact, { loader as contactLoader } from './Routes/Contact';
import EditContact from './Routes/Edit';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		loader: rootLoader,
		action: rootAction,
		children: [
			{
				path: '/contacts/:contactId',
				element: <Contact />,
				loader: contactLoader,
			},
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
      },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>,
);
