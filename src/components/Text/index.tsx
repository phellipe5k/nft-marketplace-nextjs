import * as S from './style';

type Props = {
  h?: number;
  colors?: string;
  children?: any;
  width: any

};

const Text = ({ width = '100%', h = 1, children, colors = 'red', align = 'center' }: Props) => {
  return (
      <S.Text width={width} h={h} align={align} colors={colors}>{ children }</ S.Text>
    );
}

export default Text;
