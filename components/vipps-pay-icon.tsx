import Vipps from '@/public/images/vipps-pay.svg';
import Image from 'next/image'; 

interface VippsIconProps {
  height?: number;
  width?: number;
}

export default function VippsPayIcon({height, width}: VippsIconProps) {
  return (
    
      <Image
        src={Vipps}
        alt="vipps logo"
        width={height}
        height={width}
      />
  
  );
}