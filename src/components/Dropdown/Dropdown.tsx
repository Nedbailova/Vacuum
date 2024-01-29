import { useState, useEffect } from 'react';
import './Dropdown.css'

interface DropdownProps {
  options: string[];
  onSelect: (selectedOption: string) => void;
}

const Dropdown = ({ options, onSelect }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const setFormActive = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
        <div className="dropdown-header" onClick={setFormActive}>
            {selectedOption ? selectedOption : options[0]}
            <svg width="24" height="13" viewBox="0 0 24 13" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M12 13L23.2583 0.25H0.74167L12 13Z" fill="#D9D9D9"/>
            </svg>
        </div>
      
        {isOpen && (
            <ul className="dropdown-list">
                {options.map((option) => (
                    <li key={option} onClick={() => handleSelect(option)}>
                    {option}
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default Dropdown;

