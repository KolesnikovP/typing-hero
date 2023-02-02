import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/selectLoginState/getLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string
}

// @memo для оптимизации лишней перерисовки компонента
export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loginForm = useSelector(getLoginState);
  const {
    username, password, isLoading, error,
  } = loginForm;

  // @useCallback для всех функций которые мы будем передавать пропсом в дочерние компоненты
  // мы будем передавать в useCallback, чтобы не пересоздавать функцию при каждом рендере
  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onChangeEmail = useCallback((value: string) => {
    dispatch(loginActions.setEmail(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('formAuthTitle')} theme={TextTheme.PRIMARY} />
      {error && <Text text={t('Введен неверный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input
        className={cls.input}
        type='text'
        onChange={onChangeUsername}
        value={username}
        autoFocus
      />
      <Input
        className={cls.input}
        type='text'
        onChange={onChangePassword}
        value={password}
      />
      <Button
        type='button'
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
