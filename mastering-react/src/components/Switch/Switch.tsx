import { ReactNode } from 'react';

interface CaseProps<T> {
  value?: T;
  condition?: (value: T) => boolean;
  children: JSX.Element;
}

export function Case<T>({ children }: CaseProps<T>): JSX.Element {
  return children;
}

export function DefaultCase({ children }: { children: ReactNode }) {
  return children;
}
DefaultCase.displayName = 'DefaultCase';

export interface SwitchProps<T> {
  value: T;
  children: JSX.Element[];
}

export function Switch<T>({ value, children }: SwitchProps<T>) {
  const filteredChildren = children.filter((child) => {
    if (child.props.value === value) {
      return true;
    }
    if (child.props.condition?.(value) === true) {
      return true;
    }
    return false;
  });

  if (filteredChildren.length > 0) {
    return filteredChildren;
  }

  const defaultCase = children.find((child) => child.type.displayName === DefaultCase.displayName);
  return defaultCase?.props.children || null;
}