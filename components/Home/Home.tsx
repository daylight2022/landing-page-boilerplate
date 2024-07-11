import BuyButton from './BuyButton';
import Introduction from './Introduction';
import UserPurchaseAvatar from './UserPurchaseAvatar';
import Pricing from './Pricing';
import Feature from './Feature';
import WallOfLove from './WallOfLove';
import FQA from './FQA';

const Home = () => {
	return (
		<>
			<Introduction />
			<UserPurchaseAvatar />
			<Feature id="Feature" />
			<Pricing id="Pricing" />
			<WallOfLove id="WallOfLove" />
			<FQA />
			<BuyButton id="BuyButton" />
		</>
	);
};

export default Home;
