import NftCard from 'components/NftCard';
import * as S from './style';

type Props = {
  title?: string;
};

const NftRow = ({ title = 'NftRow' }: Props) => (
  <S.Container>
    <NftCard />
  </S.Container>
);

export default NftRow;
