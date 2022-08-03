const c = 'test';

type action = 'up' | 'down';

function perfaction(action: action): 1 | -1 {
  switch (action) {
    case 'up':
      return -1;
    case 'down':
      return 1;
  }
}
