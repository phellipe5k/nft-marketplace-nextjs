import Base from 'components/Base';
import NftRow from 'components/NftRow';
import Text from 'components/Text';
import * as S from './style';

type Props = {
  title?: string;
};

const HomeTemplate = ({ title = 'HomeTemplate' }: Props) => (
  <Base>
    <Text h={3} colors={'GREY'}>TRUSTED MONEY</Text>
    <Text colors={['#69F4AF', '#C36AF3']}>Discover digital art and Collect NFTs.</Text>
    <NftRow />
  </Base>
);

export default HomeTemplate;
