'use client';
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps {
  children?: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

export default function PrimaryButton({
  children = 'Get Started',
  className = '',
  type = 'button',
  disabled = false,
  onClick = () => {},
}: Partial<PrimaryButtonProps>) {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white shadow-sm hover:bg-[#1D4ED8] focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2',
        className
      )}
    >
      {children}
    </Button>
  )
}
