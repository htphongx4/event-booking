import React from 'react';
import './Chip.scss';

type ChipProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
};

const Chip: React.FC<ChipProps> = ({ label, variant = 'primary' }) => (
  <span className={`chip chip__${variant}`}>{label}</span>
);

export default Chip;