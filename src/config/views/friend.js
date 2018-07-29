// 定制Edit页面的结构
const friendEdit = {

}

// 定制基础的页面结构
const friendBasic = {
  menu: {
    name: '友链',
    icon: 'images/friend.png',
    url: 'friend'
  },
  list: {
    title: '朋友列表',
    funBottom: ['add', ['select', 'friendSelectData']],
    viewData: {
      showField: ['id', 'title', 'tmb', 'time'],
      tools: ['modify', 'look', 'up', 'del', 'order'],
      orderby: 'id desc'
    }
  },
  edit: {
    title: '朋友详情',
    structure: friendEdit
  }
}

export default friendBasic;