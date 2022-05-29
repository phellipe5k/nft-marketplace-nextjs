import * as S from './style';

type Props = {
  children: any;
};

const Base = ({ children }: Props) => (
  <S.Container>
    <S.Header />
    <S.ContentWrapper>
      { children }
    </ S.ContentWrapper>
    <S.Footer />
  </S.Container>
);

export default Base;
