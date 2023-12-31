import { FC } from 'react';

import Layout from '@/components/layout/Layout';

import { IHome } from './home.interface';

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>HomePage</h1>
		</Layout>
	);
};

export default Home;
