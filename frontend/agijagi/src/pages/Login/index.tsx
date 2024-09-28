import { useState } from 'react';
import * as s from './style';
import Button from '../../components/common/Button';
import Textfield from '../../components/common/Textfield';
import Typhography from '../../components/common/Typography';
import { IntroductionSlider } from '../../components/Login/IntroductionSlider/IntroductionSlider';
import { ValidationState } from '../../components/common/Textfield/Textfield.types';
import { useNavigate } from 'react-router-dom';
import BackIcon from '@heroicons/react/24/outline/ChevronLeftIcon';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [level, setLevel] = useState<number>(0);
  const [loginMode, setLoginMode] = useState<boolean>(false);
  const [isValidated, setIsValidated] = useState<boolean[]>([false, false]);

  const widthRatio = window.innerWidth / 360;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const handleActivateLogin = () => {
    setLoginMode(!loginMode);
  };

  const handleLevel = (level: number) => {
    setLevel(level);
  };

  const navigator = useNavigate();

  function validatePassword(input: string): ValidationState {
    if (input.trim() === '') {
      return 'normal';
    }

    if (input.length >= 8 && input.length <= 16) {
      setIsValidated([isValidated[0], true]);
      return 'success';
    } else {
      setIsValidated([isValidated[0], false]);
      return 'danger';
    }
  }

  function validateEmail(input: string): ValidationState {
    if (input.trim() === '') {
      return 'normal';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(input)) {
      setIsValidated([true, isValidated[1]]);
      return 'success';
    } else {
      setIsValidated([false, isValidated[1]]);
      return 'danger';
    }
  }

  return (
    <s.Container>
      <s.Moon
        width={width}
        height={height}
        ratio={widthRatio}
        level={level}
        loginMode={loginMode}
      >
        <s.PatternContainer>
          <s.Pattern1 ratio={widthRatio} />
          <s.Pattern2 ratio={widthRatio} />
          <s.Pattern3 ratio={widthRatio} />
          <s.Pattern4 ratio={widthRatio} />
          <s.Pattern5 ratio={widthRatio} />
          <s.Pattern6 ratio={widthRatio} />
        </s.PatternContainer>
      </s.Moon>
      <IntroductionSlider
        level={level}
        handleLevel={handleLevel}
        loginMode={loginMode}
      />
      <s.LoginContainer width={width} loginMode={loginMode}>
        <Button fullWidth={true} onClick={handleActivateLogin}>
          로그인
        </Button>
        <Button
          color="secondary"
          fullWidth={true}
          onClick={() => {
            navigator('/signup');
          }}
        >
          회원가입
        </Button>
      </s.LoginContainer>

      <s.FormContainer width={width} loginMode={loginMode}>
        <s.BackButton onClick={handleActivateLogin}>
          <BackIcon />
        </s.BackButton>
        <Typhography size="7xl" weight="bold">
          로그인
        </Typhography>
        <Textfield
          size="lg"
          label="이메일"
          color="secondary"
          isColoredLabel={true}
          inputValue={email}
          setInputValue={setEmail}
          validationFunction={validateEmail}
          disabled={!loginMode}
        ></Textfield>
        <Textfield
          size="lg"
          label="비밀번호"
          isColoredLabel={true}
          inputValue={password}
          setInputValue={setPassword}
          validationFunction={validatePassword}
          disabled={!loginMode}
          type="password"
        ></Textfield>
        <Button
          size="md"
          color={isValidated[0] && isValidated[1] ? 'primary' : 'greyScale'}
          fullWidth={true}
          disabled={!(isValidated[0] && isValidated[1])}
          onClick={() => {}}
        >
          <Typhography color="white">로그인</Typhography>
        </Button>
      </s.FormContainer>
    </s.Container>
  );
};
export default Login;
