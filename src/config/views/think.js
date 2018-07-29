// 定制Edit页面的结构
const thinkEdit = {

}

// 定制基础的页面结构
const thinkBasic = {
  menu: {
    name: '话痨',
    icon: 'images/think.png',
    url: 'think'
  },
  list: {
    title: '全是话痨',
    funBottom: ['add', ['select', 'thinkSelectData']],
    viewData: {
      showField: ['id', 'title', 'tmb', 'time'],
      tools: ['modify', 'look', 'up', 'del', 'order'],
      orderby: 'id desc'
    }
  },
  edit: {
    title: '话痨',
    structure: thinkEdit
  }
}

export default thinkBasic;