import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import CopyIconSVG from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string
  text: string
}

// ToDo: check tips.md for explanation
export const Code = memo((props: CodeProps) => {
  const { className, text } = props;
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button type='button' className={cls.copyBtn} theme={ButtonTheme.CLEAR} onClick={onCopy}>
        <Icon Svg={CopyIconSVG} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
