import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import * as TabsComponents from "fumadocs-ui/components/tabs";
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

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    // Interactive playgrounds
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
    ...components,
  };
}
