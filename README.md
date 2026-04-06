# Lab 09 — Performance Optimization

## Overview

This lab focuses on optimizing React components for better performance using various techniques such as memoization, virtualization, and code splitting.

### Key Techniques Covered:
1. **Memoization**:
   - `React.memo`: Prevent unnecessary re-renders for pure components.
   - `useMemo`: Cache expensive calculations and re-compute only when dependencies change.
   - `useCallback`: Memoize functions to avoid re-creating them on each render.
   
2. **Virtualization**:
   - Rendering only the visible items in large lists to improve performance.
   
3. **Code Splitting**:
   - Lazy loading of non-critical components to optimize initial load time.

## Lab 9.1 — Memoization with React.memo, useMemo, useCallback

### Objective:
Learn to optimize React components using memoization techniques. This includes `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders, cache expensive computations, and avoid the recreation of functions.

### Components Implemented:
1. **Dashboard** (Parent component)
2. **UserCard** (Memoized with `React.memo`)
3. **AnalyticsChart** (Optimized with `useMemo`)
4. **ActivityFeed** (Simple child component)

### Steps:
1. **Unoptimized Dashboard**:
   - Basic components are created with `useState`.
2. **Optimized with React.memo**:
   - `UserCard` is memoized to prevent re-renders when props haven't changed.
3. **Optimized with useMemo**:
   - `AnalyticsChart` uses `useMemo` to cache the result of expensive calculations.
4. **Optimized with useCallback**:
   - `Button` components use `useCallback` to avoid re-creating functions on every render.

### Performance Improvement:
- Demonstrated performance differences by tracking re-renders in the console.
  
---

## Lab 9.2 — Virtualization for Large Lists

### Objective:
Implement list virtualization to efficiently render large datasets by only rendering visible items. We used `react-window` to achieve this.

### Steps:
1. **Install Virtualization Library**: `react-window`
2. **Generate Large Dataset**: Generated 10,000 mock items.
3. **Virtualized List**: Implemented virtual scrolling using `FixedSizeList` from `react-window`.
4. **Non-Virtualized List**: Created a non-virtualized list for performance comparison.
5. **Performance Comparison**:
   - Measured render time, DOM node count, and scroll performance.
   - Documented the performance improvements of the virtualized list.

### Virtualization Benefits:
- Reduced the number of DOM nodes rendered, improving performance.
- Smoother scrolling and faster initial render for large datasets.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
