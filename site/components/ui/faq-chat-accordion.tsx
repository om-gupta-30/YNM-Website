"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

export interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  /** Set to empty string or omit to hide the timestamp line */
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  timestamp = "Every day, 9:01 AM",
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

  return (
    <div className={cn("p-4 font-brand", className)}>
      {timestamp ? (
        <div className="mb-4 text-sm text-muted-foreground">{timestamp}</div>
      ) : null}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem}
        onValueChange={setOpenItem}
      >
        {data.map((item) => {
          const value = String(item.id);
          const isOpen = openItem === value;
          return (
            <Accordion.Item value={value} key={item.id} className="mb-2">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-start justify-between gap-x-4 text-left">
                  <div
                    className={cn(
                      "relative flex min-h-[3rem] flex-1 items-center rounded-xl px-3 py-2 transition-colors",
                      isOpen
                        ? "bg-primary/20 text-primary"
                        : "bg-muted hover:bg-primary/10",
                      questionClassName
                    )}
                  >
                    {item.icon ? (
                      <span
                        className={cn(
                          "pointer-events-none absolute bottom-6 text-lg",
                          item.iconPosition === "right" ? "right-2" : "left-2"
                        )}
                        style={{
                          transform:
                            item.iconPosition === "right"
                              ? "rotate(7deg)"
                              : "rotate(-4deg)",
                        }}
                        aria-hidden
                      >
                        {item.icon}
                      </span>
                    ) : null}
                    <span className="pr-2 font-medium leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "mt-2 shrink-0 text-muted-foreground",
                      isOpen && "text-primary"
                    )}
                    aria-hidden
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="ml-2 mt-2 md:ml-12"
                >
                  <div
                    className={cn(
                      "relative max-w-xl rounded-2xl bg-primary px-4 py-3 text-sm leading-relaxed text-primary-foreground shadow-md",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
