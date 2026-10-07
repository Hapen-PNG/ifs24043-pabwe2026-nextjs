import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('next/font/google', () => ({
  Plus_Jakarta_Sans: () => ({ className: 'mock-font' }),
}));
