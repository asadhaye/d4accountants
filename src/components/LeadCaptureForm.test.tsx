import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LeadCaptureForm } from './LeadCaptureForm';
import { useToast } from "@/components/ui/use-toast";
import React from 'react';

jest.mock('@/components/ui/use-toast', () => ({
    useToast: () => ({
        toast: jest.fn(),
    }),
}));

describe('LeadCaptureForm Component', () => {
    const mockService = "tax-planning"; // Provide a default service value
    it('renders the form correctly', () => {
        render(<LeadCaptureForm service={mockService} />);
        expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
        expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument();
    });

    it('displays a success toast on valid form submission', async () => {
        const { toast } = useToast();
        render(<LeadCaptureForm service={mockService} />);

        fireEvent.change(screen.getByLabelText('Full Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByLabelText('Phone Number'), { target: { value: '1234567890' } });

        fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

        await waitFor(() => {
            expect(toast).toHaveBeenCalledWith(expect.objectContaining({
                title: 'Success',
                description: expect.any(String),
            }));
        });
    });

    it('displays error messages for invalid form submission', async () => {
        render(<LeadCaptureForm service={mockService} />);

        // Submit form without filling any fields
        fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

        await waitFor(() => {
            expect(screen.getByText('Full name is required')).toBeInTheDocument();
            expect(screen.getByText('Email is required')).toBeInTheDocument();
            expect(screen.getByText('Phone number is required')).toBeInTheDocument();
        });

        // Test invalid email format
        fireEvent.change(screen.getByLabelText('Email Address'), { target: { value: 'invalid-email' } });
        fireEvent.click(screen.getByRole('button', { name: 'Send Message' }));

        await waitFor(() => {
            expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
        });
    });
});