import { cn } from './utils';

describe('cn utility function', () => {
    it('merges class names correctly', () => {
        expect(cn('class1', 'class2')).toBe('class1 class2');
        expect(cn('class1', undefined, 'class2')).toBe('class1 class2');
        expect(cn('class1', null, 'class2')).toBe('class1 class2');
        expect(cn('class1', false && 'class2', 'class3')).toBe('class1 class3');
        expect(cn('class1', true && 'class2', 'class3')).toBe('class1 class2 class3');
    });

    it('handles conditional classes', () => {
        const condition = true;
        expect(cn('base', condition && 'active')).toBe('base active');
        expect(cn('base', !condition && 'inactive')).toBe('base');
    });

    it('handles empty or falsy inputs', () => {
        expect(cn('')).toBe('');
        expect(cn(null)).toBe('');
        expect(cn(undefined)).toBe('');
        expect(cn(false)).toBe('');
    });

    it('handles multiple conditional classes', () => {
        const isActive = true;
        const isDisabled = false;
        expect(cn(
            'base',
            isActive && 'active',
            isDisabled && 'disabled',
            'persistent'
        )).toBe('base active persistent');
    });
});