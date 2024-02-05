import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import styles from './phone-input.module.scss';
import { usePhoneInput } from './phone-input-provider';

const PhoneInputPortal = ({ children }: { children?: React.ReactNode }) => {
  const { phoneInputRef, setIsPortal } = usePhoneInput();
  const el = useRef(document.createElement('div')); // Создаем элемент для портала

  useEffect(() => {
    setIsPortal(true);
    return () => {
      setIsPortal(false);
    };
  }, [setIsPortal]);

  useEffect(() => {
    const { body } = document;
    el.current.classList.add(styles.portal);

    if (phoneInputRef?.current) {
      const rect = phoneInputRef.current.getBoundingClientRect();
      // Устанавливаем стили для позиционирования портала непосредственно под элементом ввода
      el.current.style.position = 'absolute';
      el.current.style.top = `${rect.bottom + window.scrollY}px`; // Учитываем прокрутку страницы по Y
      el.current.style.left = `${rect.left + window.scrollX}px`; // Учитываем прокрутку страницы по X
      el.current.style.width = `${rect.width}px`; // Можно установить ширину портала равной ширине элемента ввода
    }

    body.appendChild(el.current);

    return () => {
      body.removeChild(el.current);
    };
  }, [phoneInputRef]); // Пересчитываем позицию при изменении phoneInputRef

  // Используем ReactDOM.createPortal для рендеринга детей в созданном элементе
  return ReactDOM.createPortal(children, el.current);
};

export default PhoneInputPortal;
