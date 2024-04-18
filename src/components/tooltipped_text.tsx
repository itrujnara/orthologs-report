import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltippedText({
  tooltipText,
  children,
}: {
  tooltipText: string;
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted">{children}</span>
        </TooltipTrigger>
        <TooltipContent>
          <span>{tooltipText}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
