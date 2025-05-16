import {BrowserRouter, Navigate, Route, Routes} from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Terms from './pages/TermsPage';
import Policy from './pages/PolicyPage';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="terms" element={<Terms />} />
						<Route path="policy" element={<Policy />} />
					</Route>
					{/* <Route path="*" element={<Navigate to="/" replace />} /> */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
