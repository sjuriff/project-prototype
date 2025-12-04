import Vipps from '@/public/vipps-logo.svg';
import Image from 'next/image';

interface VippsIconProps {
  height?: number;
  width?: number;
}

export default function VippsIcon({height, width}: VippsIconProps) {
  return (
    
      <Image
        src={Vipps}
        alt="vipps logo"
        width={height}
        height={width}
      />
  
  );
}