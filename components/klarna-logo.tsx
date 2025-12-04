import Klarna from '@/public/klarna-logo.svg';
import Image from 'next/image';

interface KlarnaIconProps {
  height?: number;
  width?: number;
}

export default function KlarnaIcon({height, width}: KlarnaIconProps) {
  return (
    
      <Image
        src={Klarna}
        alt="vipps logo"
        width={height}
        height={width}
      />
  
  );
}