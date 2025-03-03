import { cn, formatDate, validateEmail, slugify } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('cn (className merger)', () => {
    it('merges multiple class names', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
    });

    it('handles undefined and null values', () => {
      expect(cn('class1', undefined, 'class2', null)).toBe('class1 class2');
    });

    it('handles conditional classes', () => {
      const condition = true;
      expect(cn('base', condition && 'active')).toBe('base active');
      expect(cn('base', !condition && 'inactive')).toBe('base');
    });

    it('handles array of classes', () => {
      expect(cn(['class1', 'class2'])).toBe('class1 class2');
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2023-01-01');
      expect(formatDate(date)).toMatch(/January 1, 2023/);
    });

    it('handles different date formats', () => {
      const dateString = '2023-12-25T10:30:00';
      expect(formatDate(dateString)).toMatch(/December 25, 2023/);
    });

    it('returns empty string for invalid date', () => {
      expect(formatDate('invalid-date')).toBe('');
    });
  });

  describe('validateEmail', () => {
    it('validates correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    it('rejects invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
      expect(validateEmail('user@')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('slugify', () => {
    it('converts string to slug format', () => {
      expect(slugify('Hello World')).toBe('hello-world');
      expect(slugify('This is a Test')).toBe('this-is-a-test');
    });

    it('handles special characters', () => {
      expect(slugify('Hello & World!')).toBe('hello-and-world');
      expect(slugify('Product (2023)')).toBe('product-2023');
    });

    it('handles multiple spaces and dashes', () => {
      expect(slugify('hello   world')).toBe('hello-world');
      expect(slugify('hello---world')).toBe('hello-world');
    });

    it('handles non-English characters', () => {
      expect(slugify('Café & Résumé')).toBe('cafe-and-resume');
    });
  });
}));