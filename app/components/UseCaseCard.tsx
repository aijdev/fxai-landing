import Link from "next/link";
import type { UseCase } from "../lib/content";
import { type Locale, defaultLocale, localizedPath } from "../i18n/config";
import { getDictionary } from "../i18n/getDictionary";
import { ArrowRightIcon } from "./Icons";

/** Full use-case card: audience, problem, solution, example, and a feature link. */
export function UseCaseCard({
  useCase,
  locale = defaultLocale,
}: {
  useCase: UseCase;
  locale?: Locale;
}) {
  const t = getDictionary(locale).common;
  return (
    <article className="card card-hover flex flex-col gap-4 p-6 sm:p-7">
      <span className="w-fit rounded-full bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand ring-1 ring-border">
        {useCase.audience}
      </span>
      <h3 className="text-xl font-semibold tracking-tight">{useCase.title}</h3>

      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        <p className="text-muted">
          <span className="font-semibold text-foreground">
            {t.useCaseProblemLabel}
          </span>
          {useCase.problem}
        </p>
        <p className="text-muted">
          <span className="font-semibold text-foreground">
            {t.useCaseSolutionLabel}
          </span>
          {useCase.solution}
        </p>
      </div>

      <p className="rounded-xl bg-surface p-4 text-sm italic leading-relaxed text-muted-strong">
        {useCase.example}
      </p>

      <Link
        href={localizedPath(useCase.featureHref, locale)}
        className="group mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
      >
        {t.explore} {useCase.feature}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
