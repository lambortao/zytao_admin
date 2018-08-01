// 定制Edit页面的结构
const projectEdit = {

}

// 定制基础的页面结构
const projectBasic = {
  menu: {
    name: '项目',
    icon: 'images/2.png',
    url: 'project'
  },
  list: {
    title: '项目列表',
    funBottom: ['add', ['select', 'projectSelectData']],
    viewData: {
      showField: ['id', 'title', 'tmb', 'time'],
      tools: ['modify', 'look', 'up', 'del', 'order'],
      orderby: 'id desc'
    }
  },
  edit: {
    title: '项目详情',
    structure: projectEdit
  }
}

export default projectBasic;