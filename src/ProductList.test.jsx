import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // Add this line back in!
import ProductList from './ProductList';

describe('C64 Product List Logic', () => {

    it('renders the Commodore 64 system header', () => {
        render(<ProductList />);
        const headerText = screen.getByText(/\*\*\*\* COMMODORE 64 BASIC V2 \*\*\*\*/i);
        expect(headerText).toBeInTheDocument();
    });

    it('displays the classic Commodore 64 product', () => {
        render(<ProductList />);
        const product = screen.getByRole('heading', { name: /^Commodore 64$/i });
        expect(product).toBeInTheDocument();
    });

    it('displays the price with a dollar sign', () => {
        render(<ProductList />);
        const price = screen.getByText(/\$595\.00/);
        expect(price).toBeInTheDocument();
    });

    it('renders the correct number of product cards', () => {
        const { container } = render(<ProductList />);
        const cards = container.querySelectorAll('.c64-card');
        expect(cards.length).toBe(4);
    });

    it('includes the READY prompt with the blinking cursor logic', () => {
        render(<ProductList />);
        const readyPrompt = screen.getByText(/READY\./i);
        expect(readyPrompt).toBeInTheDocument();
    });

    it('matches the C64 UI snapshot', () => {
        const { asFragment } = render(<ProductList />);
        expect(asFragment()).toMatchSnapshot();
    });
});