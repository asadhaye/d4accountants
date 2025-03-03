import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LeadCaptureForm } from './index';
import { useToast } from '@/components/ui/use-toast';

// Mock the toast function
jest.mock('@/components/ui/use-toast', () => ({
  useToast: jest.fn().mockReturnValue({
    toast: jest.fn()
  })
}));

describe('LeadCaptureForm', () => {
  beforeEach(() => {
    // Clear mock calls between tests
    jest.clearAllMocks();
  });

  it('renders all form fields', () => {
    render(<LeadCaptureForm />);
    
    expect(screen.getByPlaceholderText(/your name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/how can we help you/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<LeadCaptureForm />);
    
    // Try to submit empty form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Check for validation messages
    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/invalid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument();
    });
  });

  it('submits form successfully', async () => {
    const mockToast = jest.fn();
    (useToast as jest.Mock).mockReturnValue({ toast: mockToast });

    global.fetch = jest.fn().mockResolvedValueOnce({ ok: true });

    render(<LeadCaptureForm />);
    
    // Fill in form data
    fireEvent.change(screen.getByPlaceholderText(/your name/i), { 
      target: { value: 'John Doe' } 
    });
    fireEvent.change(screen.getByPlaceholderText(/email address/i), { 
      target: { value: 'john@example.com' } 
    });
    fireEvent.change(screen.getByPlaceholderText(/phone number/i), { 
      target: { value: '+1234567890' } 
    });
    fireEvent.change(screen.getByPlaceholderText(/how can we help you/i), { 
      target: { value: 'Test message content' } 
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Check if success toast was shown
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Success!",
          description: "We'll be in touch with you shortly."
        })
      );
    });
  });

  it('handles submission errors', async () => {
    const mockToast = jest.fn();
    (useToast as jest.Mock).mockReturnValue({ toast: mockToast });

    // Mock fetch to simulate error
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Network error'));

    render(<LeadCaptureForm />);
    
    // Fill in form data
    fireEvent.change(screen.getByPlaceholderText(/your name/i), { 
      target: { value: 'John Doe' } 
    });
    fireEvent.change(screen.getByPlaceholderText(/email address/i), { 
      target: { value: 'john@example.com' } 
    });
    fireEvent.change(screen.getByPlaceholderText(/phone number/i), { 
      target: { value: '+1234567890' } 
    });
    fireEvent.change(screen.getByPlaceholderText(/how can we help you/i), { 
      target: { value: 'Test message content' } 
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Check if error toast was shown
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(
        expect.objectContaining({
          title: "Error",
          description: "Failed to submit form. Please try again.",
          variant: "destructive"
        })
      );
    });
  });
});