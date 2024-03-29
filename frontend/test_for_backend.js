const socket = require('socket.io-client').io('ws://localhost:8000');

//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getAllClothesSuccess', (data) => {
//    console.log(data); 
// });
// socket.emit('getAllClothes', {uid:0, username:'zz', type:'shoe'});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getClothesDetailSuccess', (data) => {
//    console.log(data); 
// });
// socket.emit('getClothesDetail', {pid:12});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('changeClothesInfoSuccess', (data) => {
//     console.log(data);
// });
// socket.emit('changeClothesInfo', {pid:8, change:{img_src:'\'https://img2.baidu.com/it/u=2412133177,3037428682&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=310\''}});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('addClothesSuccess', (data) => {
//     console.log(data);
// });
// socket.emit('addClothes', {uid:0, type:'top', img_src:'https://img1.baidu.com/it/u=3691886660,4074550413&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'});
// socket.on('deleteClothesSuccess', (data) => {
//     console.log(data);
// });
// socket.emit('deleteClothes', {uid:0, pid:13});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getOutfitsSuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getOutfits', {askType:'all', uid: 0});
// socket.on('getOutfitsRetURLSuccess', (data) => {
//    console.log(data);
// });
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getClothesEssaysSuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getClothesEssays', {pid: 11});
// socket.emit('getClothesComments', {pid: 11});
// socket.on('getClothesCommentsSuccess', (data) => {
//     console.log(data);
// });
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getAllArticlesSuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getAllArticles', {uid: 0});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getArticleDetailSuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getArticleDetail', {eid: 0});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getArticleCommentsSuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getArticleComments', {eid: 0});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('addClothesCommentsSuccess', (data) => {
//     console.log(data);  
// });
// socket.emit('addClothesComments', {pid: 11, uid: 2, content: 'test'});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('deleteClothesCommentsSuccess', (data) => {
//     console.log(data);
// });
// socket.emit('deleteClothesComments', {pid:11, seqid:1});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getGroupDetailSuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getGroupDetail', {gid: 0});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getGroupMembersSuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getGroupMembers', {gid: 0});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getGroupEssaySuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getGroupEssay', {gid: 0});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getWorldEssaySuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getWorldEssay', {num:4});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getAllHistorySuccess', (data) => {
//    console.log(data);
// });
// socket.on('getAllHistoryRetURLSuccess', (data) => {
//    console.log(data);
// });
// socket.emit('getAllHistory', {uid: 0});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// // 测试login logout功能
// socket.on('loginSuccess', (data) => {
//     console.log(data);
// });
// socket.on('loginFailed', (data) => {
//     console.log(data);
// });
// socket.emit('login', {username:'zz', password:require('md5')('zz')});

// socket.on('logoutSuccess', (data) => {
//     console.log(data);
// });
// socket.on('logoutFailed', (data) => {
//     console.log(data);
// });
// socket.emit('logout', {username: 'zz', uid: 0});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// // 测试 getUserGroups 接口
// socket.on('getUserGroupsSuccess', (data) => {
//       console.log(data);
// });
// socket.emit('getUserGroups', {uid: 1});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('getUserCreatGroupsSuccess', (data) => {
//       console.log(data);
// });
// socket.emit('getUserCreatGroups', {uid: 1});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('addOutfitsSuccess', (data) => {
//       console.log(data);
// });
// socket.emit('addOutfits', {uid: 1, username: 'asd', top_id: 8, bottom_id: 9, shoe_id: 10, coat_id: 11, ornament_id: 12});
// socket.emit('addOutfits', {uid: 0, username: 'zz', top_id: 13, bottom_id: 13, shoe_id: 13, coat_id: 13, ornament_id: 13});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('changeOutfitSuccess', (data) => {
//         console.log(data);
// });
// socket.emit('changeOutfit', {oid:10, change:{top_id:9, bottom_id:9}});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('addArticleSuccess', (data) => {
//       console.log(data);
// });
// socket.emit('addArticle', {uid:2, title:'test', content_src: 'null', relatedproducts: [/*{pid: 1}, {pid: 2}, {pid: 3}*/], relatedgroups: [/*{gid: 0}, {gid: 1}*/]});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('changeArticleSuccess', (data) => {
//         console.log(data);
// });
// socket.emit('changeArticle', {uid:2, eid:2, change:{content_src: '\'wobiande\'', title:'\'test for changeArticle\''}});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('addCommentToArticleSuccess', (data) => {
//         console.log(data);
// });
// socket.emit('addCommentToArticle', {uid: 2, eid: 2, content: 'test comment for test'});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('deleteArticleCommentSuccess', (data) => {
//     console.log(data);
// });
// socket.emit('deleteArticleComment', {eid: 2, ecid: 1});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('deleteArticleSuccess', (data) => {
//         console.log(data);
// });
// socket.emit('deleteArticle', {uid: 2, eid: 3});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('createGroupSuccess', (data) => {
//       console.log(data);
// });
// socket.emit('createGroup', {uid:1, group_name:'test_group2', intro: 'just for test'});
// --------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('joinGroupSuccess', (data) => {
//       console.log(data);
// });
// socket.emit('joinGroup', {uid:0, gid: 2});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.emit('deleteGroup', {uid: 2, gid: 1});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.on('addHistorySuccess', (data) => {
//       console.log(data);
// });
// socket.emit('addHistory', {uid:0, year:2077, month:12, day:1, climate:'阴', situation:'约会', top_id: 12, bottom_id: 11, shoe_id: 9, coat_id: 11, ornament_id: 12});
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// socket.emit('changeHistory', {change:{h_year:2019, climate:'\'大雨\''}, uid:3, hid: 1});
// socket.on('changeHistorySuccess', (data) => {
//         console.log(data);
// }); 
//--------------------------------------------------------------------------------------------------------------------------------------------------------
// const qiniu = require('qiniu-js')
// async function upload(req, res) {
//    try {
//      const { filename } = req.files[0]
//      const { qiniuConf = JSON.stringify(QI_NIU_CONFIG) } = req.body
//      const filePath = path.join(ORIGINAL_IMG_PATH, filename)
//      const url = await uploadImageToQiniu(filePath, JSON.parse(qiniuConf))
//      res.send(
//        successRes({
//          url,
//        })
//      )
//    } catch (err) {
//      res.send(errorRes(err))
//    }
//  }
//  async function uploadImageToQiniu(imagePath, qiniuConf) {
//    return new Promise((resolve, reject) => {
//      const { accessKey, secretKey, scope, domain } = qiniuConf
//      const config = new qiniu.conf.Config()
//      const formUploader = new qiniu.form_up.FormUploader(config)
//      const putExtra = new qiniu.form_up.PutExtra()
//      const token = getToken(accessKey, secretKey, scope)
 
//      // 上传内容
//      const key = path.parse(imagePath).name
//      const uploadItem = path.normalize(imagePath)
//      formUploader.putFile(token, key, uploadItem, putExtra, function (respErr, respBody) {
//        if (respErr) {
//          reject(respErr)
//        } else {
//          const { key } = respBody
//          resolve(`${domain}/${key}`)
//          // 删除image文件中的图片文件
//          setTimeout(() => {
//            clearImageFile()
//          }, 0)
//        }
//      })
//    })
//  }