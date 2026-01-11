import React from 'react';

interface AndroidSvgIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  background?: string;
  opacity?: number;
  rotation?: number;
  shadow?: number;
  screenColor?: string;
  flipHorizontal?: boolean;
  flipVertical?: boolean;
  padding?: number;
  strokeColor?: string
  ref?: React.Ref<SVGSVGElement>;
}

const AndroidSvgIcon = ({
  size = 0,
  color = '#ffff',
  strokeWidth = 2,
  background = 'transparent',
  opacity = 1,
  rotation = 0,
  shadow = 0,
  screenColor = '',
  flipHorizontal = false,
  flipVertical = false,
  padding = 0,
  strokeColor = '',
  ref
}: AndroidSvgIconProps) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  const viewBoxSize = 44 + (padding * 2);
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="#ffffff"
      color={color}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(' ') || undefined,
        filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: background !== 'transparent' ? background : undefined
      }}
    >
      <path fill={color} d="M12 40V8c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4" /><path fill={screenColor} d="M32 7H16c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1" /><path fill={screenColor} d="M21 40h6v2h-6z" />
    </svg>
  );
};

export default AndroidSvgIcon;