import React, { useMemo, useState } from 'react';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

import { isInStandaloneMode, isIos } from '../utils/browser';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClickBanner: () => void;
  title?: string;
  image?: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  image,
  onClickBanner,
  ...rest
}) => {
  const [bannerVisible, setBannerVisible] = useState(true);

  const ios = useMemo(() => isIos(), [isIos]);
  const standalone = useMemo(() => isInStandaloneMode(), [isInStandaloneMode]);
  const shouldRender = useMemo(() => ios && !standalone, [ios, standalone]);

  return shouldRender && bannerVisible ? (
    <Container {...rest}>
      <button type="button" onClick={onClickBanner}>
        {image && (
          <div className="image-container">
            <img src={image} alt="PWA Logo" />
          </div>
        )}
        <span>{title || 'Add to Homescreen'}</span>
      </button>
      <MdClose size={24} onClick={() => setBannerVisible(false)} />
    </Container>
  ) : null;
};

export default Modal;
