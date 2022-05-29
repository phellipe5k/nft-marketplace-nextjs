import * as S from './style';
import { Button } from 'web3-components'; 

type Props = {
  title?: string;
};

const NftCard = ({ title = 'NftCard' }: Props) => (
  <S.Container>
    <S.Image />
    <S.Info>
      <S.Section>
        <S.CollectionsName>Metalhams</S.CollectionsName>
        <S.Value>4.25</S.Value>  
      </S.Section>

      <S.Section>
        <S.Name>Metalham #5138</S.Name>
      </S.Section>
      <Button.Gradient color='#69F4AF, #C36AF3'>Bid Now</Button.Gradient>
    </S.Info>
  </S.Container>
);

export default NftCard;
