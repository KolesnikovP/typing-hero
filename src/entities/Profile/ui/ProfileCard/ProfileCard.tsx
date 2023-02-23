import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Select } from 'shared/ui/Select/Select';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Profile } from '../../model/types/profile';

import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeLastName?: (value?: string) => void
  onChangeFirstName?: (value?: string) => void
  onChangeCountry?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    error,
    isLoading,
    onChangeAge,
    onChangeCountry,
    onChangeLastName,
    onChangeFirstName,
    onChangeUsername,
    onChangeAvatar,
    readonly,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
        <Text title={t('Ошибка')} text={t('Попробуйте перезагрузить')} align='center' theme={TextTheme.ERROR} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.AvatarWrapper}>
            <Avatar src={data?.avatar} size={70} />
            <Text className={cls.Name} title={`${data?.firstname} ${data.lastname}`} />
          </div>
        ) }
        <Input
          value={data?.firstname}
          label={t('Имя')}
          placeholder={t('Имя')}
          className={cls.input}
          onChange={onChangeFirstName}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          label={t('Фамилия')}
          placeholder={t('Фамилия')}
          className={cls.input}
          onChange={onChangeLastName}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          label={t('Возраст')}
          placeholder={t('Возраст')}
          className={cls.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Select
          label={t('Страна')}
          value={data?.age}
          placeholder={t('Страна')}
          className={cls.input}
          onSelect={onChangeCountry}
          disabled={readonly}
          options={[{ value: 'Russia', data: 'Russia' }]}
        />
        <Input
          value={data?.nickname}
          label={t('Никнейм')}
          placeholder={t('Никнейм')}
          className={cls.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          label={t('Аватар')}
          placeholder={t('Аватар')}
          className={cls.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
