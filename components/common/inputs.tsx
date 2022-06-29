/* eslint-disable react/display-name */
import { Listbox } from '@headlessui/react';
import classNames from 'classnames';
import { forwardRef, InputHTMLAttributes, useState } from 'react';

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ disabled, className, id, style, ...rest }, ref) => {
  const inputClasses = classNames(className, 'some default classes');

  return (
    <input
      id={id}
      ref={ref}
      disabled={disabled}
      className={inputClasses}
      style={{ height: '40px', ...style }}
      {...rest}
    />
  );
});

type SelectProps = {
  options: Array<{
    text: string;
    isActive: boolean;
  }>;
  onChange: (index: number) => void;
  className?: string;
};

export const Select = ({ options, onChange, className = '' }: SelectProps) => {
  const initialOptionIndex = options.findIndex(option => option.isActive);
  const [selectedOptionIndex, setSelectedOptionIndex] =
    useState(initialOptionIndex);

  return (
    // @ts-ignore
    <Listbox value="0" as="div" className="listbox">
      {({ open }) => (
        <>
          <Listbox.Button className="some classes">
            {options[selectedOptionIndex].text}
          </Listbox.Button>
          <Listbox.Options
            style={{ maxHeight: 280 }}
            className="some more classes"
          >
            {options.map((option, i) => (
              <Listbox.Option key={i} value={i} className="some more classes">
                {option.text}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};
