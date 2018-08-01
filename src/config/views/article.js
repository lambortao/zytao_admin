// 定制Edit页面的结构
const articleEdit = {

}

// 定制基础的页面结构
const articleBasic = {
  menu: {
    name: '文章',
    icon: 'images/3.png',
    url: 'article'
  },
  list: {
    title: '文章列表',
    funBottom: ['add', ['select', 'articleSelectData']],
    viewData: {
      showField: ['id', 'title', 'tmb', 'time'],
      tools: ['modify', 'look', 'up', 'del', 'order'],
      orderby: 'id desc'
    }
  },
  edit: {
    title: '文章详情',
    structure: articleEdit
  }
}

export default articleBasic;