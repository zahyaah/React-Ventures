const data = [
    {
        id: '1',
        question: "Which versions of React include Hooks?",
        answer: "Starting with 16.8.0, React includes a stable implementation of React Hooks for:\n" +
            "React DOM\n" +
            "React Native\n" +
            "React DOM Server\n" +
            "React Test Renderer\n" +
            "React Shallow Renderer"
    },
    {
        id: '2',
        question: 'Do I need to rewrite all my class components?',
        answer: 'No. There are no plans to remove classes from React — we all need to keep shipping products and can’t afford rewrites. We recommend trying Hooks in new code.\n'
    },
    {
        id: '3',
        question: 'What can I do with Hooks that I couldn’t with classes?',
        answer: 'Hooks offer a powerful and expressive new way to reuse functionality between components. “Building Your Own Hooks” provides a glimpse of what’s possible. This article by a React core team member dives deeper into the new capabilities unlocked by Hooks.\n'
    },
    {
        id: '4',
        question: 'Do Hooks work with static typing?\n',
        answer: 'Hooks were designed with static typing in mind. Because they’re functions, they are easier to type correctly than patterns like higher-order components. The latest Flow and TypeScript React definitions include support for React Hooks.\n' +
            'Importantly, custom Hooks give you the power to constrain React API if you’d like to type them more strictly in some way. React gives you the primitives, but you can combine them in different ways than what we provide out of the box.\n'
    }
];

export default data;