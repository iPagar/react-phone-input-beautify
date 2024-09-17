import '@testing-library/jest-dom';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PhoneInput } from '../src/phone-input';
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

  const setup = () =>
    render(
      <PhoneInput.Root>
        <PhoneInput.NumberInput placeholder="Phone" />
      </PhoneInput.Root>
    );

  it('maintains cursor position when adding a digit', async () => {
    setup();
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await act(async () => {
      await userEvent.type(input, '+7912');
    });
    expect(input).toHaveValue('+7 912');
    expect(input.selectionStart).toBe(6);
    expect(input.selectionEnd).toBe(6);
  });

  it('maintains cursor position when removing a digit', async () => {
    setup();
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await act(async () => {
      await userEvent.type(input, '+79123');
    });
    expect(input).toHaveValue('+7 912 3');

    await act(async () => {
      await userEvent.type(input, '{backspace}');
    });
    expect(input).toHaveValue('+7 912');
    expect(input.selectionStart).toBe(6);
    expect(input.selectionEnd).toBe(6);
  });

  it('handles cursor position when removing a space', async () => {
    setup();
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await act(async () => {
      await userEvent.type(input, '+7912 5');
    });
    expect(input).toHaveValue('+7 912 5');

    await act(async () => {
      await userEvent.type(input, '{backspace}');
    });
    expect(input).toHaveValue('+7 912');
    expect(input.selectionStart).toBe(6);
    expect(input.selectionEnd).toBe(6);
  });

  it('handles cursor position when pasting a number', async () => {
    setup();
    const input = screen.getByRole('textbox') as HTMLInputElement;

    input.focus();
    await act(async () => {
      await userEvent.paste('+79123456789');
    });
    expect(input).toHaveValue('+7 912 345 67 89');
    expect(input.selectionStart).toBe(16);
    expect(input.selectionEnd).toBe(16);
  });

  it('maintains cursor position when typing in the middle', async () => {
    setup();
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await act(async () => {
      await userEvent.type(input, '+7912345');
    });

    expect(input).toHaveValue('+7 912 345');

    await act(async () => {
      await userEvent.type(input, '6', {
        delay: 100,
        initialSelectionEnd: 5,
        initialSelectionStart: 4,
      });
    });

    expect(input).toHaveValue('+7 962 345');
    expect(input.selectionStart).toBe(5);
    expect(input.selectionEnd).toBe(5);
  });

  it('maintains cursor position when typing in the middle when there is a multiple backspace', async () => {
    setup();
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await act(async () => {
      await userEvent.type(input, '+7912345');
    });

    await act(async () => {
      await userEvent.type(input, '{backspace}{backspace}', {
        delay: 100,
        initialSelectionEnd: 5,
        initialSelectionStart: 5,
      });
    });

    expect(input).toHaveValue('+7 2345');
    expect(input.selectionStart).toBe(3);
    expect(input.selectionEnd).toBe(3);

    await act(async () => {
      await userEvent.type(input, '6', {
        delay: 100,
        initialSelectionEnd: 3,
        initialSelectionStart: 3,
      });
    });

    expect(input).toHaveValue('+7 62345');
    expect(input.selectionStart).toBe(4);
    expect(input.selectionEnd).toBe(4);
  });
});
