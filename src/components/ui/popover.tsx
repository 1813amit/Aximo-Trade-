
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "../../lib/utils"

type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root> & {
  trigger?: "click" | "hover"
}

const Popover = ({ trigger = "click", ...props }: PopoverProps) => {
  const [open, setOpen] = React.useState(false)

  const { children, ...rest } = props;

  const triggerElement = React.Children.toArray(children).find(
    (child: any) => child.type.displayName === PopoverPrimitive.Trigger.displayName || child.props.asChild
  );
  
  const contentElement = React.Children.toArray(children).find(
    (child: any) => child.type.displayName === PopoverPrimitive.Content.displayName
  );

  if (trigger === "click") {
    return <PopoverPrimitive.Root {...props} />
  }

  // Manually implementing hover logic
  const handleOpenChange = (open: boolean) => {
    setOpen(open)
  }

  const openTimeout = React.useRef<number | undefined>()
  const closeTimeout = React.useRef<number | undefined>()

  const handleEnter = () => {
    clearTimeout(closeTimeout.current)
    if (!open) {
      openTimeout.current = window.setTimeout(() => setOpen(true), 0)
    }
  }

  const handleLeave = () => {
    clearTimeout(openTimeout.current)
    closeTimeout.current = window.setTimeout(() => setOpen(false), 100)
  }

  const PopoverTriggerWithHover = triggerElement ? React.cloneElement(
      triggerElement as React.ReactElement,
      {
          onMouseEnter: handleEnter,
          onMouseLeave: handleLeave,
          onFocus: handleEnter,
          onBlur: handleLeave,
      }
  ) : null;

  const PopoverContentWithHover = contentElement ? React.cloneElement(
      contentElement as React.ReactElement,
      {
          onMouseEnter: handleEnter,
          onMouseLeave: handleLeave,
          ...contentElement.props,
      }
  ) : null;

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={handleOpenChange} {...rest}>
      {PopoverTriggerWithHover}
      {open && PopoverContentWithHover}
    </PopoverPrimitive.Root>
  )
}

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      onPointerDownOutside={(e) => {
        const target = e.target as HTMLElement;
        // Allow focus to move to another element with the same popover trigger without closing it
        if (target.closest('[data-radix-popover-trigger]')) {
          e.preventDefault();
        }
      }}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }

    
