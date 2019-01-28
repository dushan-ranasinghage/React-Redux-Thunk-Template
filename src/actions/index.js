// import * as commonTypes from './types';
import * as posts from './posts';

// Export common types
// export {commonTypes}

// Export module actions and types
export {posts as postsTypes}
export const postsActions = posts.default
