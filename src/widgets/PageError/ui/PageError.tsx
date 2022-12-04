import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => {
    window.location.reload();
  };

  const { t } = useTranslation();
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('ErrorMessage')}</p>
      <Button onClick={reloadPage} className={cls.ButtonPageError}>
        {t('ImitateError')}
      </Button>
    </div>
  );
};
