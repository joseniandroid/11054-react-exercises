import {
  AddButton,
  SubTitle,
  TextContainer,
  Title,
  Wrapper,
} from './ProductCard.styled';

import { Product } from '../../models';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={false} onClick={() => console.log('Implement Me')}>
        <p>+</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};
