import {
  CameraIcon,
  Container,
  InputBox,
  InvisibleInput,
  Label,
  Popup,
  PopupItem,
} from './MediaInput.styles';
import Typhography from '../../common/Typhography';
import { useState } from 'react';

const MediaIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
    />
  </svg>
);

interface MediaInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MediaInput = ({ onChange }: MediaInputProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const handlePopup = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    setMousePosition({
      x: e.clientX + document.documentElement.scrollLeft,
      y: e.clientY + document.documentElement.scrollTop,
    });
    setIsClicked(true);
  };
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
    setIsClicked(false);
  };

  return (
    <Container>
      <InputBox>
        <Label onClick={handlePopup}>
          {isClicked && (
            <Popup xPos={mousePosition.x} yPos={mousePosition.y}>
              <PopupItem>카메라</PopupItem>
              <PopupItem
                htmlFor="file"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                앨범
              </PopupItem>
            </Popup>
          )}
          <CameraIcon> {MediaIcon}</CameraIcon>
          <Typhography size="sm">사진, 영상 등록하기</Typhography>
        </Label>
        <InvisibleInput
          type="file"
          multiple
          id="file"
          onChange={handleUpload}
        />
      </InputBox>
    </Container>
  );
};

export default MediaInput;
