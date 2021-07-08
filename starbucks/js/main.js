require(['./js/draftjs-to-html.js'], function(res){
  $.ajax({
		url: `./json/data.json`,
		type: "GET",
		success: function (data) {
      console.log(data);
      // 文章ID
      var stbId = data.id;
      // 正文内容
      var stbContent = res(JSON.parse(data.content));
      // 标题 - 分享标题
      var stbTitle = data.title;
      // 分享摘要
      var description = data.description;
      // 分享图
      var stbImage = data.h5_image[0];
      // 时间
      var stbTime = moment(data.update_time).format('YYYY-MM-DD HH:mm');
      console.log(stbTime);
		}
	});
})