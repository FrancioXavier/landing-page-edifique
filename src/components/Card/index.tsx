import Image from 'next/image';
import { Card, CardName, SubTitle, Title } from './styled';
import { useMediaQuery } from '@mui/material';

export function CardComponent(props: {
  img: string;
  title: string;
  subtitle: string;
}) {
  const { img, title, subtitle } = props;

  const mobile = useMediaQuery('(max-width: 768px)');
  return (
    <Card>
      <Image
        src={img}
        width={100}
        height={100}
        alt="teste"
        style={{
          position: 'absolute',
          height: mobile ? '25vh' : '40vh',
          width: mobile ? '25vw' : '15vw',
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
