/*
  这个配置文件的作用：
  1、控制左侧菜单栏的名字、icon、链接
  2、每个组件内的基础信息，如当前页面的名字，头部是否需要新增按钮、分类筛选、信息列表等基础组件
  3、定义当前页面的构成内容，就像CMS3.0里面的那样？（待定）
*/
const path = require('path');

let cmsBasic = {
  think: {
    menu: {
      name: '话痨',
      icon: 'think.png',
      url: 'think'
    },
    list: {
      title: '全是话痨'
    },
    edit: {
      title: '话痨'
    }
  },
  article: {
    menu: {
      name: '文章',
      icon: 'article.png',
      url: 'article'
    },
    list: {
      title: '文章列表'
    },
    edit: {
      title: '全是话痨'
      
    }
  },
  project: {
    menu: {
      name: '项目',
      icon: 'project.png',
      url: 'project'
    },
    list: {
      title: '项目列表'
    },
    edit: {
      
      title: '全是话痨'
    }
  },
  friend: {
    menu: {
      name: '友链',
      icon: 'friend.png',
      url: 'friend'
    },
    list: {
      title: '都是朋友'
    },
    edit: {
      title: '话痨'
    }
  }
}

export default cmsBasic;