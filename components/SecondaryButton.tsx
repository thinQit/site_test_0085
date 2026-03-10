'use client';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface SecondaryButtonProps {
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

export default function SecondaryButton({
  children = 'Learn More',
  className = '',
  type = 'button',
  disabled = false,
  onClick = () => {},
}: Partial<SecondaryButtonProps>) {
  return (
    <Button
      type={type}
      variant="outline"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'rounded-lg border-border bg-transparent px-6 py-3 font-semibold text-[#111827] hover:bg-muted focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2',
        className
      )}
    >
      {children}
    </Button>
  )
}
