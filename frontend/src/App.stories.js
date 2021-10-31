// YourComponent.stories.js | YourComponent.stories.jsx

import React from 'react';

import App from './App';

// 👇 This default export determines where your story goes in the story list
export default {
  title: 'YourComponent',
  component: App,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <YourComponent {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* 👇 The args you need here will depend on your component */
};
