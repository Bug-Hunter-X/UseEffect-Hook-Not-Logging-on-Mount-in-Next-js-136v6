# Next.js useEffect Hook Mount Issue

This repository demonstrates a problem where a `useEffect` hook in Next.js does not log a message to the console on component mount, even with an empty dependency array.  This is unexpected behavior, as the empty array should ensure the effect runs only once upon initial render.

## Bug Description

The `useEffect` hook within `MyComponent` is intended to log 'Mounted!' to the console when the component mounts.  However, this log message does not appear. The component renders correctly, and the click counter functions as expected.  The issue is specifically related to the lack of the initial log message.

## Solution

The solution involves ensuring that the component's initial render completes before attempting to log a message or access its state.  Improper use of async operations within useEffect can interfere with the logging's visibility in the console.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe that the console does not log 'Mounted!' initially.
5. Review the solution file to see how to resolve the issue.