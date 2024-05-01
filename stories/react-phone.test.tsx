import '@testing-library/jest-dom';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import { ReactHookFormAndZod } from './phone-input.stories';

describe('ReactHookFormAndZod', () => {
  test('renders form inputs and submit button', () => {
    render(<ReactHookFormAndZod />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('displays error message when name is empty and form is submitted', async () => {
    render(<ReactHookFormAndZod />);
    fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() =>
      expect(screen.getByText('Name is required')).toBeInTheDocument()
    );
  });

  test('updates submit state and resets form on valid submission', async () => {
    render(<ReactHookFormAndZod />);
    fireEvent.input(screen.getByPlaceholderText('Name'), {
      target: { value: 'John Doe' },
    });
    const phoneInput = screen.getByPlaceholderText<HTMLInputElement>('Phone');
    fireEvent.input(phoneInput, {
      target: { value: '+34 800 000 312' },
    });
    expect(screen.getByAltText('ES')).toBeInTheDocument();
    await act(() =>
      fireEvent.submit(screen.getByRole('button', { name: 'Submit' }))
    );

    // Проверка, что состояние submit обновилось
    expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    expect(screen.getByText(/\+34 800 000 312/)).toBeInTheDocument();

    // Проверка сброса формы
    expect(screen.getByPlaceholderText('Name').textContent).toBe('');
    expect(phoneInput.value).toBe('+1');

    expect(screen.getByAltText('US')).toBeInTheDocument();

    const countrySelectorButton = screen.getByRole('button');
    await act(() => fireEvent.click(countrySelectorButton));

    // Предположим, что по клику открывается dropdown с li
    // Эмулируем выбор страны (например, выбор UK)
    const liOption = screen.getByText(
      'United Kingdom of Great Britain and Northern Ireland'
    );
    await act(() => fireEvent.click(liOption));

    // Проверяем, что код страны обновился (пример для UK)
    expect(screen.getByDisplayValue('+44')).toBeInTheDocument();
    // Проверяем, что флаг страны обновился
    expect(screen.getByAltText('GB')).toBeInTheDocument();

    fireEvent.input(phoneInput, {
      target: { value: '+348' },
    });
    expect(phoneInput.value).toBe('+34 8');
  });

  test('updates country code and phone mask on country change', async () => {
    render(<ReactHookFormAndZod />);
    const countrySelectorButton = screen.getByRole('button');
    await act(() => fireEvent.click(countrySelectorButton));

    // Предположим, что по клику открывается dropdown с li
    // Эмулируем выбор страны (например, выбор UK)
    const liOption = screen.getByText(
      'United Kingdom of Great Britain and Northern Ireland'
    );
    await act(() => fireEvent.click(liOption));

    // Проверяем, что код страны обновился (пример для UK)
    expect(screen.getByDisplayValue('+44')).toBeInTheDocument();
    // Проверяем, что флаг страны обновился
    expect(screen.getByAltText('GB')).toBeInTheDocument();
  });
});
