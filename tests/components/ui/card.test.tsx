import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

describe('Card Component', () => {
  it('renders Card with children', () => {
    render(
      <Card>
        <div>Test Content</div>
      </Card>
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className to Card', () => {
    const { container } = render(
      <Card className="test-class">
        <div>Content</div>
      </Card>
    );
    expect(container.firstChild).toHaveClass('test-class');
  });

  it('renders interactive Card variant', () => {
    const { container } = render(
      <Card interactive>
        <div>Interactive Card</div>
      </Card>
    );
    expect(container.firstChild).toHaveClass('hover:bg-accent/50');
  });

  it('renders CardHeader with proper spacing', () => {
    const { container } = render(
      <CardHeader>
        <div>Header Content</div>
      </CardHeader>
    );
    expect(container.firstChild).toHaveClass('space-y-1.5');
  });

  it('renders CardTitle with correct styling', () => {
    render(
      <CardTitle>Card Title</CardTitle>
    );
    const title = screen.getByText('Card Title');
    expect(title).toHaveClass('text-2xl', 'font-semibold', 'leading-none', 'tracking-tight');
  });

  it('renders CardDescription with muted text', () => {
    render(
      <CardDescription>Card Description</CardDescription>
    );
    const description = screen.getByText('Card Description');
    expect(description).toHaveClass('text-sm', 'text-muted-foreground');
  });

  it('renders CardContent with proper padding', () => {
    const { container } = render(
      <CardContent>
        <div>Content</div>
      </CardContent>
    );
    expect(container.firstChild).toHaveClass('p-6', 'pt-0');
  });

  it('renders CardFooter with proper alignment', () => {
    const { container } = render(
      <CardFooter>
        <button>Action</button>
      </CardFooter>
    );
    expect(container.firstChild).toHaveClass('flex', 'items-center');
  });

  it('combines all Card components correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
          <CardDescription>This is a test card</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Main content</p>
        </CardContent>
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('This is a test card')).toBeInTheDocument();
    expect(screen.getByText('Main content')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});