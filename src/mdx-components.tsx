import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import {
  Playground,
  AdvancedPlayground,
  CounterPlayground,
  FormPlayground,
  TodoPlayground,
  // Beginner examples
  BeginnerHelloWorldPlayground,
  BeginnerTogglePlayground,
  BeginnerListPlayground,
  // Intermediate examples
  IntermediateUseEffectPlayground,
  IntermediateCustomHookPlayground,
  IntermediateFormValidationPlayground,
  // Advanced examples
  AdvancedReducerContextPlayground,
  AdvancedDebouncedSearchPlayground,
  AdvancedOptimisticUpdatePlayground,
} from "@/components/playground";

/**
 * Register all MDX components available in documentation pages.
 *
 * Fumadocs built-in:
 *   - Tabs, Tab (tabbed content)
 *   - Accordion, Accordions (collapsible sections)
 *   - Steps, Step (step-by-step guides)
 *   - Files, File, Folder (file tree visualization)
 *   - TypeTable (API type documentation)
 *   - ImageZoom (click-to-zoom images)
 *   - Cards, Card (navigation cards) — included in defaultMdxComponents
 *   - Callout — included in defaultMdxComponents
 *   - Heading — included in defaultMdxComponents
 *
 * Custom:
 *   - Playground variants (interactive code sandboxes)
 */
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,

    // Fumadocs interactive components
    ...TabsComponents,
    Accordion,
    Accordions,
    Step,
    Steps,
    File,
    Files,
    Folder,
    TypeTable,
    ImageZoom,

    // Interactive playgrounds
    Playground,
    AdvancedPlayground,
    CounterPlayground,
    FormPlayground,
    TodoPlayground,
    BeginnerHelloWorldPlayground,
    BeginnerTogglePlayground,
    BeginnerListPlayground,
    IntermediateUseEffectPlayground,
    IntermediateCustomHookPlayground,
    IntermediateFormValidationPlayground,
    AdvancedReducerContextPlayground,
    AdvancedDebouncedSearchPlayground,
    AdvancedOptimisticUpdatePlayground,

    // Caller overrides (e.g. relative link resolver)
    ...components,
  };
}
