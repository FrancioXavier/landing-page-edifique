import Image from 'next/image';
import { Card, CardName, SubTitle, Title } from './styled';

export function CardComponent(props: {
  img: string;
  title: string;
  subtitle: string;
}) {
  const { img, title, subtitle } = props;
  return (
    <Card>
      <Image
        src={img}
        width={100}
        height={100}
        alt="teste"
        style={{
          position: 'absolute',
          height: '40vh',
          width: '15vw',
          objectFit: 'cover',
        }}
      />
      <CardName>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </CardName>
    </Card>
  );
}
