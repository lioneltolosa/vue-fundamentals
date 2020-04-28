/* export default {
  bind: (element) => {
    element.style.position = 'absolute';
    element.style.bottom = '5px';
    element.style.right = '5px';
  },
}; */

// Passing  data  to directive

/* export default {
  bind: (element, binding) => {
    if (binding.arg !== 'position') return;

    Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = '5px';
    });
    element.style.position = 'absolute';
  },
}; */

// Passing  data  to directive

// Another way more flexible
/* function applyStyles(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
export default {
  bind: (element, binding) => {
    applyStyles(element, binding);
  },
  update: (element, binding) => {
    applyStyles(element, binding);
  },
}; */
// Another way more flexible

// The better way in all world . Use bing and update in only one function

export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
