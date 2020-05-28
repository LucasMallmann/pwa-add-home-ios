import React, { useMemo, useState, useCallback, CSSProperties } from 'react';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

import { isInStandaloneMode, isIos } from '../utils/browser';

interface Props {
  onClickBanner: () => void;
  title?: string;
  image?: string;
  style?: CSSProperties;
}

const Modal: React.FC<Props> = ({ title, image, onClickBanner, style }) => {
  const [bannerVisible, setBannerVisible] = useState(true);

  const ios = useMemo(() => isIos(), [isIos]);
  const standalone = useMemo(() => isInStandaloneMode(), [isInStandaloneMode]);
  const shouldRender = useMemo(() => ios && !standalone, [ios, standalone]);

  const handleBannerClick = useCallback(() => {
    onClickBanner();
    setBannerVisible(false);
  }, [onClickBanner, setBannerVisible]);

  return shouldRender && bannerVisible ? (
    <Container onClick={handleBannerClick} style={style}>
      <div>
        {image && (
          <div className="image-container">
            <img src={image} alt="PWA Logo" />
          </div>
        )}
        <span>{title}</span>
      </div>
      <MdClose size={24} onClick={() => setBannerVisible(false)} />
    </Container>
  ) : null;
};

export default Modal;
