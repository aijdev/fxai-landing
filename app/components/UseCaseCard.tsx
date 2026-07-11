import Link from "next/link";
import type { UseCase } from "../lib/content";
import { ArrowRightIcon } from "./Icons";

/** Full use-case card: audience, problem, solution, example, and a feature link. */
export function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <article className="card card-hover flex flex-col gap-4 p-6 sm:p-7">
      <span className="w-fit rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand ring-1 ring-border">
        {useCase.audience}
      </span>
      <h3 className="text-xl font-semibold tracking-tight">{useCase.title}</h3>

      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        <p className="text-muted">
          <span className="font-semibold text-foreground">The problem — </span>
          {useCase.problem}
        </p>
        <p className="text-muted">
          <span className="font-semibold text-foreground">With FxAI — </span>
          {useCase.solution}
        </p>
      </div>

      <p className="rounded-xl bg-surface p-4 text-sm italic leading-relaxed text-muted-strong">
        {useCase.example}
      </p>

      <Link
        href={useCase.featureHref}
        className="group mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
      >
        Explore {useCase.feature}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
