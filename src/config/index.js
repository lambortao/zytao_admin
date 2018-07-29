const path = require('path');

import article from '@/config/views/article.js';
import project from '@/config/views/project.js';
import think from '@/config/views/think.js';
import friend from '@/config/views/friend.js';

let cmsBasic = {
  think,
  article,
  project,
  friend
}

export default cmsBasic;